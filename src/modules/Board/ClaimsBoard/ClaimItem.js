import React from "react";
import styles from "../Board.module.scss";

const ClaimItem = (props) => {
  let {id, title, description, from, to, fromImg, toImg, type} = props.claim;
  return(
    <div className={styles["claim-item"]+" card"}>
      <span className={styles["claim-img"]}>
        <img src={fromImg} alt={from} title={from}/>
      </span>

      <span className={styles["claim-info"]}>
        <h6>{title}</h6>
        <p>{description}</p>
      </span>

      <span className={styles["claim-details"]}>

      </span>

      <span className={styles["claim-actions"]}>
        <button className="btn btn-primary">Details</button>
      </span>
    </div>
  )
};

export default ClaimItem
