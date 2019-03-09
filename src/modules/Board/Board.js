import React, { Component } from 'react';
import styles from './Board.module.scss';

//Components
import ClaimsBoard from './ClaimsBoard/ClaimsBoard';
import ClaimsMonitor from './ClaimsMonitor/ClaimsMonitor';

class Board extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles["board"]}>
            board bitch !
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
