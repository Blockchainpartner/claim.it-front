import React from "react";
import styles from "./HomeNav.module.scss";
import logo from "../../media/logo.png";

const HomeNav = (props) => {
  let {date} = props;
  return(
    <div>
      <img src={logo} alt="kaim.it"/>
    </div>
  )
};

export default HomeNav
