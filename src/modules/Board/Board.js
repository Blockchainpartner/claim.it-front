import React, { Component } from 'react';
import bg from '../../media/bg1.png';
import styles from './Board.module.scss';

//Components
import ClaimsBoard from './ClaimsBoard/ClaimsBoard';
import ClaimsMonitor from './ClaimsMonitor/ClaimsMonitor';
import ModalClaimWrapper from '../ModalClaim/Wrapper';
import ModalSendWrapper from '../ModalSend/Wrapper';
import ProfileWrapper from '../Profile/Wrapper';

const bgStyle={backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height:'100vh'};

class Board extends Component {
  render() {
    const {profileOn, toggleProfile, claimOn, toggleClaim, currentClaim, toggleSendClaim, sendClaimOn} = this.props;
    return (
      <React.Fragment>
        <div style={bgStyle}>
          <div className={styles["board"]}>
              <div className={styles["board-title"]}>
                <h1>Identity board</h1>
                <button className="btn btn-success" onClick={toggleSendClaim}>Make a claim</button>
              </div>

              <div className={styles["board-panel"]+" card"} style={{padding: '20px'}}>
                <div className={styles["board-monitor"]}>
                  <ClaimsMonitor toggleClaim={toggleClaim}/>
                </div>

                <div className={styles["board-claims"]+" panel"}>
                  {(!profileOn && !claimOn && !sendClaimOn) &&
                    <ClaimsBoard  toggleClaim={toggleClaim}
                                  currentClaim={currentClaim}/>
                  }
                  {profileOn &&
                    <ProfileWrapper toggleProfile={toggleProfile}/>
                  }
                  {claimOn &&
                    <ModalClaimWrapper  toggleClaim={toggleClaim}
                                        currentClaim={currentClaim}/>
                  }
                  {sendClaimOn &&
                    <ModalSendWrapper   toggleSendClaim={toggleSendClaim}/>
                  }
                </div>
              </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
