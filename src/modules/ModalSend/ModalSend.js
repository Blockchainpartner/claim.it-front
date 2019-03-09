import React, { Component } from 'react';
import styles from '../Board/Board.module.scss';

class ModalSend extends Component {
  render() {
    let {toggleSendClaim} = this.props;
    return (
      <React.Fragment>
        <div className={styles["panel"]}>
          <h3>New claim</h3>
          <button className="btn btn-danger" onClick={toggleSendClaim}>Cancel</button>
        </div>
      </React.Fragment>
    );
  }
}

export default ModalSend;
