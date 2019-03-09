import React from "react";
import styles from "../Board.module.scss";

const LiveClaimItem = (props) => {
  let {id, title, from, to, fromImg, toImg, type} = props.lclaim;
  return(
    <div>
      <span>
        {id}
      </span>

      <span>
      </span>

      <span>
      </span>
    </div>
  )
};

export default LiveClaimItem
