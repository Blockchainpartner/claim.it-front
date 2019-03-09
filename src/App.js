import React, { Component } from 'react';
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import {BrowserRouter, Route} from 'react-router-dom';
import style from './App.module.scss';

//Components
import BoardNav from './UI/BoardNav/BoardNav';
import BoardWrapper from './modules/Board/Wrapper';
import HomeWrapper from './modules/Home/Wrapper';

// Import Actions
import { initEthStore } from "./actions/EthAction";

class App extends Component {
    constructor(props) {
        super(props);

        props.initEthStore();
    }
    render() {
        console.log(this.props)
        return (
            <BrowserRouter>
                <div className={style["claimit-app"]}>
                    <Route exact path="/" component={HomeWrapper} />
                    <BoardNav />
                    <Route exact path="/board" component={BoardWrapper} />
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        web3: store.eth.web3,
        ensContract: store.eth.ensContract
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        initEthStore: () => {
            dispatch(initEthStore())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
