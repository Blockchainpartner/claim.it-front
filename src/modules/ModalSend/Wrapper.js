import React, { Component } from 'react';

//Components
import ModalSend from './ModalSend';

class ModalSendWrapper extends Component {
  render() {
    return (
      <React.Fragment>
        <ModalSend toggleSendClaim={this.props.toggleSendClaim}/>
      </React.Fragment>
    );
  }
}

export default ModalSendWrapper;
