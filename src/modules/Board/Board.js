import React, { Component } from 'react';
import bg from '../../media/bg1.png';
import styles from './Board.module.scss';

//Components
import ClaimsBoard from './ClaimsBoard/ClaimsBoard';
import ClaimsMonitor from './ClaimsMonitor/ClaimsMonitor';
import ProfileWrapper from '../Profile/Wrapper';

const bgStyle={backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height:'100vh'};

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <div style={bgStyle}>
          <div className={styles["board"]}>
              <div className={styles["board-title"]}>
                <h1>Identity board</h1>
                <button className="btn btn-primary">Make a claim</button>
              </div>

              <div className={styles["board-panel"]+" card"} style={{padding: '20px'}}>
                <div className={styles["board-monitor"]}>
                  <ClaimsMonitor />
                </div>

                <div className={styles["board-claims"]+" panel"}>
                  <ProfileWrapper />
                </div>
              </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
