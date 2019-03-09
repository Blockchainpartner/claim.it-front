import React, { Component } from 'react';

//Components
import Board from './Board';
import BoardNav from '../../UI/BoardNav/BoardNav';

class BoardWrapper extends Component {
  render() {
    return (
      <React.Fragment>
        <BoardNav />
        <Board />
      </React.Fragment>
    );
  }
}

export default BoardWrapper;
