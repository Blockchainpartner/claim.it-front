import React from "react";
import {Link} from 'react-router-dom';
import styles from "./HomeNav.module.scss";

const HomeNav = () => {
  const logo = 'https://arweave.net/M_dOEcRCYElOy1WXdoGpY8ITFAsid5dZyBQkmZwhvPk';
  return(
    <div>
      <Link to="/"><img src={logo} alt="claim.it"/></Link>
    </div>
  )
};

export default HomeNav
