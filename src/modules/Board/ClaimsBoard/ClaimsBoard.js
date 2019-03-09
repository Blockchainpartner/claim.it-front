import React, { Component } from 'react';
import styles from '../Board.module.scss';

//mocking
import {liveClaims} from '../ClaimsMonitor/mockLiveClaims';

//Components
import ClaimsList from './ClaimsList';

class ClaimsBoard extends Component {
  render() {
    const claims = liveClaims;
    return (
      <React.Fragment>
        <div className={styles["panel-title"]}>
          <h3>Your claims</h3>
          <div className={styles["claims-panel"]}>
            <span className={styles["claims-tools"]}>

            </span>
            
            <div className={styles["claims-list-panel"]}>
              <ClaimsList claims={claims}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ClaimsBoard;
