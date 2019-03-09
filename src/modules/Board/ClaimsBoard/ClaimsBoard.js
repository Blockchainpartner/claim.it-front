import React, { Component } from 'react';
import styles from '../Board.module.scss';

class ClaimsBoard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles["panel-title"]}>
          <h3>Your claims</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default ClaimsBoard;
