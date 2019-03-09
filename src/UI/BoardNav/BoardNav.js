import React from "react";
import styles from "./BoardNav.module.scss";
import logo from "../../media/logo.png";

//Components
import SubProfile from './SubProfile';

const BoardNav = (props) => {
  const {toggleProfile} = props;
  return(
    <div className={styles["boardnav"]}>
      <img src={logo} alt="claim.it"/>
      <SubProfile toggleProfile={toggleProfile}/>
    </div>
  )
};

export default BoardNav
