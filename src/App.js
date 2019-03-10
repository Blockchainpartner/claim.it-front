import React, { Component } from 'react';
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import {BrowserRouter, Route} from 'react-router-dom';
import style from './App.module.scss';
import bg from './media/bg1.png';

//Components
import BoardWrapper from './modules/Board/Wrapper';
import HomeWrapper from './modules/Home/Wrapper';
import SignupWrapper from './modules/Signup/Wrapper'

// Import Actions
import { initEthStore, initIpfs } from "./actions/EthAction";

class App extends Component {
  constructor(props){
    super(props);
    props.initEthStore();
    props.initIpfs();
  }


  render() {
    const bgStyle={backgroundImage: `url(${bg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height:'100vh'};

    return (
        <BrowserRouter>
          <div className={style["claimit-app"]} style={bgStyle}>
            <Route exact path="/" component={HomeWrapper} />
            <Route exact path="/board" component={BoardWrapper} />
            <Route exact path="/signup" component={SignupWrapper} />
          </div>
        </BrowserRouter>
    );
  }
}

const mapStateToProps = (store) => {
    return {
        web3: store.eth.web3,
        ensContract: store.eth.ensContract,
        ipfs: store.eth.ipfs
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        initEthStore: () => {
            dispatch(initEthStore())
        },
        initIpfs: () => {
            dispatch(initIpfs())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
