import React, { Component } from 'react';
import styles from '../Board/Board.module.scss';

class ModalClaim extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles["panel"]}>
          <h3>Claim</h3>
          <span className={styles["claim-actors"]}>
            <label>From</label>
            <img src={fromImg} alt={from} title={from} style={{borderRadius: '100%'}}/>
            <label>To</label>
            <img src={toImg} alt={to} title={to} style={{borderRadius: '100%'}}/>
          </span>

          <span className={styles["claim-details"]}>
            <h4>{title}</h4>
            <p>{description}</p>
            <span>
              <span class="badge badge-warning">{type}</span>
              <i>Created {createdAt} ago</i>
            </span>
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default ModalClaim;
