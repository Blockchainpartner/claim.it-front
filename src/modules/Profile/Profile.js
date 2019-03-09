import React, { Component } from 'react';
import styles from './Profile.module.scss';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    const currentUser = {
      "picture": "https://media.licdn.com/dms/image/C4D03AQEFEkHs6eyTKg/profile-displayphoto-shrink_200_200/0?e=1557360000&v=beta&t=iD77qK1-Gp3rGBetxiSJu6mu0E6wnCArxU2wKrtIUNI",
      "pseudo": "wawa.h8"
    }
    const {toggleProfile} = this.props;
    return (
      <React.Fragment>
        <div className={styles["panel"]}>
          <h3>Your profile</h3>
          <img src={currentUser.picture} alt={currentUser.pseudo} title={currentUser.pseudo} style={{borderRadius: '100%'}}/>
          <input type="text" className="form-control" value={currentUser.pseudo}/>
          <span>
            <button className="btn btn-success">Save changes</button>
            <button className="btn btn-danger" onClick={toggleProfile}>Cancel</button>
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
