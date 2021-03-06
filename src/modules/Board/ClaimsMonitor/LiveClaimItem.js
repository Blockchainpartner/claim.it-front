import React from "react";
import styles from "../Board.module.scss";

const LiveClaimItem = (props) => {
  let {id, title, from, to, fromImg, toImg, type} = props.lclaim;
  return(
    <div className={styles["lclaim-item"]} onClick={()=>props.toggleClaim(props.lclaim)}>
      <span className={styles["lclaim-img"]}>
        <span>
          <img src={fromImg} alt={from} title={from} onError={(e)=>{e.target.onerror = null; e.target.src="https://secure.webtoolhub.com/static/resources/icons/set110/7d2f7e06.png"}}/>
        </span>
      </span>

      <span className={styles["lclaim-title"]}>
        <h6>{title}</h6>
        <span class="badge badge-warning" style={{marginLeft: '10px'}}>{type}</span>
      </span>
    </div>
  )
};

export default LiveClaimItem
