import React, { Component } from 'react';
import bg from '../../media/bg1.png';
import styles from './Board.module.scss';

//Components
import ClaimsBoard from './ClaimsBoard/ClaimsBoard';
import ClaimsMonitor from './ClaimsMonitor/ClaimsMonitor';

const bgStyle={backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height:'100vh'}

class Board extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={bgStyle}>
          <div className={styles["board"]}>
              <div className={styles["board-title"]}>
                <h1>Identity board</h1>
              </div>

              <div className={styles["board-panel"]}>
                <div className={styles["board-monitor"]}>
                  <ClaimsMonitor />
                </div>

                <div className={styles["board-claims"]+" panel"}>
                  <ClaimsBoard />
                </div>
              </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
