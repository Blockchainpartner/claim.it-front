import React from "react";
import styles from "../Board.module.scss";

//Components
import LiveClaimItem from './LiveClaimItem';

const LiveClaimList = (props) => {
  return(
    <div className={styles["live-list"]}>
      {
        props.liveClaims.map((lclaim)=>{
          return <LiveClaimItem lclaim={lclaim} key={lclaim.id}/>
        })
      }
    </div>
  )
};

export default LiveClaimList
