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
            <div className={styles["board-title"]}>
              <h1>Identity board</h1>
            </div>

            <div className={styles["board-panel"]}>
              <div className={styles["board-monitor"]+" panel"}>
                <ClaimsMonitor />
              </div>
              <div className={styles["board-claims"]+" panel"}>
                <ClaimsBoard />
              </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
