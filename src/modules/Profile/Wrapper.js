import React, { Component } from 'react';

//Components
import Profile from './Profile';

class ProfileWrapper extends Component {
  render() {
    return (
      <React.Fragment>
        <Profile />
      </React.Fragment>
    );
  }
}

export default ProfileWrapper;
