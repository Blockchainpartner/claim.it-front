import React, { Component } from 'react';
import styles from './Home.module.scss';
import {Link} from 'react-router-dom';

//Components
import HomeNav from '../../UI/HomeNav/HomeNav';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles["home"]}>
          <HomeNav/>
          <h1>Next generation identity claims manager</h1>
          <p>Access, manage, explore and send ERC734 identity claims.</p>
          <Link to="/board" className="btn btn-success">GET STARTED</Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
