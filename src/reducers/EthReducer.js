import {SET_WEB3} from "../actions/EthAction";

const defaultState = {
    web3: undefined,
    ensContract: undefined,
};

const EthReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_WEB3:
            return {
                web3: action.web3,
                ensContract: action.ensContract
            };
        default:
            return state;
    }
};

export const getWeb3 = state => state.eth.web3;

export default EthReducer;