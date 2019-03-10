import React from "react";
import {Link} from 'react-router-dom';
import styles from "./BoardNav.module.scss";

//Components
import SubProfile from './SubProfile';

const BoardNav = (props) => {
  const {toggleProfile} = props;
  const logo = 'https://arweave.net/M_dOEcRCYElOy1WXdoGpY8ITFAsid5dZyBQkmZwhvPk';
  return(
    <div className={styles["boardnav"]}>
      <Link to="/"><img src={logo} alt="claim.it"/></Link>
      <SubProfile toggleProfile={toggleProfile}/>
    </div>
  )
};

export default BoardNav
