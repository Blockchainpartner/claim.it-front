import React, { Component } from 'react';

import ModalClaim from './ModalClaim';

class ModalClaimWrapper extends Component {
  render() {
    return (
      <React.Fragment>
        <ModalClaim currentClaim={this.props.currentClaim} toggleClaim={this.props.toggleClaim}/>
      </React.Fragment>
    );
  }
}

export default ModalClaimWrapper;
