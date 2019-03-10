import React, { Component } from 'react';
import styles from './Profile.module.scss';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: {}
    };
  }

  componentDidMount(){
    const currentUser = {
      "picture": "https://media.licdn.com/dms/image/C4D03AQEFEkHs6eyTKg/profile-displayphoto-shrink_200_200/0?e=1557360000&v=beta&t=iD77qK1-Gp3rGBetxiSJu6mu0E6wnCArxU2wKrtIUNI",
      "pseudo": "wawa.h8"
    }
    this.setState({currentUser});
  }

  pictureChange = (e) => {
    let files = e.target.files;
    if (files && files[0]) {
      let currentUser = this.state.currentUser;
      currentUser.picture = files;
      this.setState({files})
    }
  }

  saveChanges = () => {
    //PUT this.state.currentUser
    //Update component then !!
  }

  render() {
    const {toggleProfile} = this.props;
    const {currentUser} = this.state;
    return (
      <React.Fragment>
        <div className={styles["panel"]}>
          <h3>Your profile</h3>
          <img src={currentUser.picture} alt={currentUser.pseudo} title={currentUser.pseudo} style={{borderRadius: '100%'}}/>
          <div className={styles["input-file"]+" custom-file mb-3"}>
            <input type="file" className="custom-file-input" id="customFile" onChange={this.pictureChange}/>
            <label className="custom-file-label" for="customFile">Default custom file input</label>
          </div>

          <input type="text" className="form-control" value={currentUser.pseudo}/>

          <span>
            <button className="btn btn-success" onClick={this.saveChanges}>Save changes</button>
            <button className="btn btn-danger" onClick={toggleProfile}>Back</button>
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
