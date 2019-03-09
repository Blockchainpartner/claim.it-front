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
      currentClaim: {}
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

  render() {
    const {profileOn, claimOn, currentClaim} = this.state;
    return (
      <React.Fragment>
        <BoardNav toggleProfile={this.toggleProfile}/>
        <Board  profileOn={profileOn}
                claimOn={claimOn}
                toggleProfile={this.toggleProfile}
                toggleClaim={this.toggleClaim}
                currentClaim={currentClaim}/>
      </React.Fragment>
    );
  }
}

export default BoardWrapper;
