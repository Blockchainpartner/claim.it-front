import React, { Component } from 'react';
import { connect } from "react-redux";
import styles from './Signup.module.scss';
import Loader from 'react-loader-spinner';

//Components
import HomeNav from '../../UI/HomeNav/HomeNav';
import {postUser, searchUser} from "../../actions/UserActions";
import fileReaderPullStream from 'pull-file-reader';
import {withRouter} from "react-router-dom";

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      avatar: undefined,
      ready: true
    };
  }

  pictureChange = (e) => {
    let files = e.target.files;
    if (files && files[0]) {
        this.setState({avatar: files[0]});
    }
  };

  signup = () => {
      const fileStream = fileReaderPullStream(this.state.avatar);
      this.props.ipfs.add(fileStream, { progress: (prog) => console.log(`received: ${prog}`) })
          .then((response) => {
              console.log(response);
              let ipfsId = response[0].hash;
              console.log(ipfsId);
              this.props.postUser(ipfsId);
            this.props.getAllUsers(); // TODO do NOT do that in real life !
            this.props.history.push('/board')
          }).catch((err) => {
          console.error(err)
      })
  };

  render() {
    let {avatar, ready} = this.state;
    if(!ready) {
      return (
        <React.Fragment>
          <div className={styles["signup-panel"]}>
            <HomeNav/>
            <Loader type="Oval" color="green" height={80} width={80} />
          </div>
        </React.Fragment>
      );
    }
    else {
      return (
        <React.Fragment>
          <div className={styles["signup-panel"]}>
            <HomeNav/>
            <h2>Signup</h2>
            <p>Easy signup! You just need to upload an avatar</p>
            <div className={styles["file-input"]+" custom-file mb-3 card"}>
              <input type="file" className="custom-file-input" id="customFile" onChange={this.pictureChange}/>
              <label className="custom-file-label" for="customFile">{avatar ? avatar.name : 'Upload an avatar'}</label>
            </div>
            <button className="btn btn-success" onClick={this.signup}>Signup</button>
          </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (store) => {
  return {
    ipfs: store.eth.ipfs
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    postUser: (prototype) => {
      dispatch(postUser(prototype))
    },
    getAllUsers: () => {
      dispatch(searchUser({},0,{}))
    }
  }
};


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Signup)
);
