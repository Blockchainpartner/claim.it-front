import React, { Component } from 'react';
import styles from '../Board.module.scss';

//mocking
import {liveClaims} from './mockLiveClaims';

//Components
import LiveClaimList from './LiveClaimList';

class ClaimsMonitor extends Component {
  constructor(props){
    super(props);
    this.state= {
      liveClaims: liveClaims
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className={styles["panel-title"]}>
          <h3>Live claims</h3>
        </div>

        <div className={styles["panel-content"]}>
          <LiveClaimList liveClaims={liveClaims} />
        </div>
      </React.Fragment>
    );
  }
}

export default ClaimsMonitor;
