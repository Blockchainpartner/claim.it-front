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
      currentClaim: {},
      sendClaimOn: false
    }
  }

  toggleProfile = () => {
    let profileOn = this.state.profileOn;
    if(profileOn){
      profileOn = false;
    }
    else {
      profileOn = true;
    }
    this.setState({profileOn});
  }

  toggleClaim = (claim) => {
    let claimOn = this.state.claimOn;
    let currentClaim = this.state.currentClaim;
    if(claimOn){
      currentClaim = {};
      claimOn = false;
    }
    else {
      currentClaim = claim;
      claimOn = true;
    }
    this.setState({claimOn, currentClaim});
  }

  toggleSendClaim = () => {
    let sendClaimOn = this.state.sendClaimOn;
    if(sendClaimOn){
      sendClaimOn = false;
    }
    else {
      sendClaimOn = true;
    }
    this.setState({sendClaimOn});
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
