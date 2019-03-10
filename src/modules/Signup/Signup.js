import React, { Component } from 'react';
import styles from './Signup.module.scss';
import Loader from 'react-loader-spinner';

//Components
import HomeNav from '../../UI/HomeNav/HomeNav';

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
      this.setState({avatar: files[0]})
      //DO.STUFF
    }
  }

  signup = () => {
    //DO.STUFF
  }

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

export default Signup;
