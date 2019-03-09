import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

import style from './App.module.scss';

//Components
import HomeWrapper from './modules/Home/Wrapper';

class App extends Component {
  render() {
    return (
      <div className={style["claimit-app"]}>
        <HomeWrapper />
      </div>
    );
  }
}

export default App;
