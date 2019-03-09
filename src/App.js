import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import {BrowserRouter, Route} from 'react-router-dom';

import style from './App.module.scss';

//Components
import BoardWrapper from './modules/Board/Wrapper';
import HomeWrapper from './modules/Home/Wrapper';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className={style["claimit-app"]}>
            <Route exact path="/" component={HomeWrapper} />
            <Route exact path="/board" component={BoardWrapper} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
