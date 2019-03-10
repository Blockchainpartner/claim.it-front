import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import {BrowserRouter, Route} from 'react-router-dom';

import style from './App.module.scss';

//Components
import BoardNav from './UI/BoardNav/BoardNav';
import BoardWrapper from './modules/Board/Wrapper';
import HomeWrapper from './modules/Home/Wrapper';
import SignupWrapper from './modules/Signup/Wrapper'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
        <BrowserRouter>
          <div className={style["claimit-app"]}>
            <Route exact path="/" component={HomeWrapper} />
            <Route exact path="/board" component={BoardWrapper} />
            <Route exact path="/signup" component={SignupWrapper} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
