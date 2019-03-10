import React, { Component } from 'react';
import styles from './BoardNav.module.scss';

class SubProfile extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    const currentUser = {
      "id": "0xjd43fT67",
      "username": "wawa.h8",
      "picture": "https://media.licdn.com/dms/image/C4D03AQEFEkHs6eyTKg/profile-displayphoto-shrink_200_200/0?e=1557360000&v=beta&t=iD77qK1-Gp3rGBetxiSJu6mu0E6wnCArxU2wKrtIUNI",
    }
    const {toggleProfile} = this.props;
    console.log(this.props)
    return (
      <React.Fragment>
        <div className={styles["sub-profile"]}>
          <span className={styles["actions"]}>
            <p>{currentUser.id}</p>
            <button className="btn btn-info" onClick={()=>toggleProfile()}>PROFILE</button>
            <button className="btn btn-danger" onClick={()=>window.location.reload()}>LOGOUT</button>
          </span>

          <span className={styles["picture"]}>
            <img src={currentUser.picture} alt="Profile" title={currentUser.username} />
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default SubProfile;
