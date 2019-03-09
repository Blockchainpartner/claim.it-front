import React, { Component } from 'react';

//Components
import Board from './Board';
import BoardNav from '../../UI/BoardNav/BoardNav';

class BoardWrapper extends Component {
  constructor(props){
    super(props);
    this.state = {
      profileOn: false
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

  render() {
    const {profileOn} = this.state;
    return (
      <React.Fragment>
        <BoardNav toggleProfile={this.toggleProfile}/>
        <Board  profileOn={profileOn}
                toggleProfile={this.toggleProfile}/>
      </React.Fragment>
    );
  }
}

export default BoardWrapper;
