import React from "react";
import styles from "../Board.module.scss";

//Components
import ClaimItem from './ClaimItem';

const ClaimsList = (props) => {
  return(
    <div className={styles["claims-list"]}>
      {
        props.claims.map((claim)=>{
          return <ClaimItem claim={claim} key={claim.id}/>
        })
      }
    </div>
  )
};

export default ClaimsList
