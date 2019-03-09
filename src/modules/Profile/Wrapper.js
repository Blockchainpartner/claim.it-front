import React, { Component } from 'react';

//Components
import Profile from './Profile';

class ProfileWrapper extends Component {
  render() {
    const {toggleProfile} = this.props;
    return (
      <React.Fragment>
        <Profile toggleProfile={toggleProfile}/>
      </React.Fragment>
    );
  }
}

export default ProfileWrapper;
