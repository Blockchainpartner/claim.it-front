import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

import style from './App.module.scss'

class App extends Component {
  render() {
    return (
      <div className={style["claimit-app"]}>
        Welcome home
      </div>
    );
  }
}

export default App;
