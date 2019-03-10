import React from "react";
import {Link} from 'react-router-dom';
import styles from "./HomeNav.module.scss";
import logo from "../../media/logo.png";

const HomeNav = () => {
  return(
    <div>
      <Link to="/"><img src={logo} alt="claim.it"/></Link>
    </div>
  )
};

export default HomeNav
