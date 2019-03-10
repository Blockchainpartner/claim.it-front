import React, { Component } from 'react';
import { connect } from "react-redux";
import styles from './Signup.module.scss';

//Components
import HomeNav from '../../UI/HomeNav/HomeNav';
import { postUser } from "../../actions/UserActions";
import fileReaderPullStream from 'pull-file-reader';

class Signup extends Component {

  pictureChange = (e) => {
    let ipfsId;
    let files = e.target.files;
    if (files && files[0]) {
      const fileStream = fileReaderPullStream(files[0]);
      this.props.ipfs.add(fileStream, { progress: (prog) => console.log(`received: ${prog}`) })
          .then((response) => {
            console.log(response)
            ipfsId = response[0].hash
            console.log(ipfsId)
            this.props.postUser(ipfsId)
          }).catch((err) => {
        console.error(err)
      })
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles["signup-panel"]}>
          <HomeNav/>
          <h2>Signup</h2>
          <p>Easy signup! You just need to upload an avatar</p>
          <div className="custom-file mb-3 card">
            <input type="file" className="custom-file-input" id="customFile" onChange={this.pictureChange}/>
            <label className="custom-file-label" for="customFile">Upload an avatar</label>
          </div>
        </div>
      </React.Fragment>
    );
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
    }
  }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Signup);
