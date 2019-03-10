import React, { Component } from 'react';
import styles from '../Board.module.scss';

//mocking
import {claims} from './mockClaims';

//Components
import ClaimsList from './ClaimsList';

class ClaimsBoard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles["panel"]}>
          <h3>Your claims</h3>
          <div className={styles["claims-panel"]}>
            <span className={styles["claims-tools"]}>

            </span>

            <div className={styles["claims-list-panel"]}>
              <ClaimsList claims={claims} toggleClaim={this.props.toggleClaim}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ClaimsBoard;
