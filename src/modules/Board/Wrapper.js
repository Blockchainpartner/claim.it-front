import React, { Component } from 'react';

//Components
import Board from './Board';
import BoardNav from '../../UI/BoardNav/BoardNav';

class BoardWrapper extends Component {
  constructor(props){
    super(props);
    this.state = {
      profileOn: false,
      claimOn: false,
      sendClaimOn: false,
      currentClaim: {},
    }
  }

  toggleProfile = () => {
    let profileOn = this.state.profileOn;
    let claimOn = null;
    let sendClaimOn = null;
    if(profileOn){
      profileOn = false;
    }
    else {
      profileOn = true;
      claimOn = false;
      sendClaimOn = false;
    }
    this.setState({profileOn, sendClaimOn, claimOn});
  }

  toggleClaim = (claim) => {
    let claimOn = this.state.claimOn;
    let currentClaim = this.state.currentClaim;
    let profileOn = null;
    let sendClaimOn = null;
    if(claimOn){
      currentClaim = {};
      claimOn = false;
    }
    else {
      currentClaim = claim;
      claimOn = true;
      profileOn = false;
      sendClaimOn = false;
    }
    this.setState({claimOn, currentClaim, profileOn, sendClaimOn});
  }

  toggleSendClaim = () => {
    let sendClaimOn = this.state.sendClaimOn;
    let claimOn = null;
    let profileOn = null;
    if(sendClaimOn){
      sendClaimOn = false;
    }
    else {
      sendClaimOn = true;
      profileOn = false;
      claimOn = false;
    }
    this.setState({sendClaimOn, claimOn, profileOn});
  }

  render() {
    const {profileOn, claimOn, currentClaim, sendClaimOn} = this.state;
    return (
      <React.Fragment>
        <BoardNav toggleProfile={this.toggleProfile}/>
        <Board  profileOn={profileOn}
                claimOn={claimOn}
                sendClaimOn={sendClaimOn}
                toggleProfile={this.toggleProfile}
                toggleClaim={this.toggleClaim}
                toggleSendClaim={this.toggleSendClaim}
                currentClaim={currentClaim}/>
      </React.Fragment>
    );
  }
}

export default BoardWrapper;
