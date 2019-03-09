import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import {BrowserRouter, Route} from 'react-router-dom';

import style from './App.module.scss';

//Components
import HomeWrapper from './modules/Home/Wrapper';

class App extends Component {
  render() {
    return (
      <div className={style["claimit-app"]}>
        <BrowserRouter>
          <Route exact path="/" component={HomeWrapper} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
