import React, { Component } from 'react';

//Components
import Board from './Board';

class BoardWrapper extends Component {
  render() {
    return (
      <React.Fragment>
        <Board />
      </React.Fragment>
    );
  }
}

export default BoardWrapper;
