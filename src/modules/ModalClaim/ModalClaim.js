import React, { Component } from 'react';
import styles from '../Board/Board.module.scss';

class ModalClaim extends Component {
  render() {
    console.log(this.props)
    let {id, title, description, from, to, fromImg, toImg, type, createdAt} = this.props.currentClaim;
    let {toggleClaim} = this.props;
    return (
      <React.Fragment>
        <div className={styles["panel"]}>
          <h3>Claim</h3>
          <span className={styles["claim-actors"]}>
            <span>
              <label>From</label>
              <img src={fromImg} alt={from} title={from} style={{borderRadius: '100%'}} onError={(e)=>{e.target.onerror = null; e.target.src="https://secure.webtoolhub.com/static/resources/icons/set110/7d2f7e06.png"}}/>
            </span>

            <span>
              <label>To</label>
              <img src={toImg} alt={to} title={to} style={{borderRadius: '100%'}} onError={(e)=>{e.target.onerror = null; e.target.src="https://secure.webtoolhub.com/static/resources/icons/set110/7d2f7e06.png"}}/>
            </span>
          </span>

          <span className={styles["claim-details"]}>
            <h4>{title}</h4>
            <p>{description}</p>
            <span>
              <span class="badge badge-warning">{type}</span>
              <i>Created {createdAt} ago</i>
            </span>
          </span>

          <div>
            <button className="btn btn-danger" onClick={toggleClaim}>Back</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ModalClaim;
