import React from "react";
import {Link} from 'react-router-dom';
import styles from "./BoardNav.module.scss";
import logo from "../../media/logo.png";

//Components
import SubProfile from './SubProfile';

const BoardNav = (props) => {
  const {toggleProfile} = props;
  return(
    <div className={styles["boardnav"]}>
      <Link to="/"><img src={logo} alt="claim.it"/></Link>
      <SubProfile toggleProfile={toggleProfile}/>
    </div>
  )
};

export default BoardNav
