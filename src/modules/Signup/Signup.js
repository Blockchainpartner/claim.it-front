import React, { Component } from 'react';
import styles from './Signup.module.scss';

//Components
import HomeNav from '../../UI/HomeNav/HomeNav';

class Signup extends Component {

  pictureChange = (e) => {
    let files = e.target.files;
    if (files && files[0]) {
      //DO.STUFF
    }
  }

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

export default Signup;
