import { SET_WEB3, SET_IPFS } from "../actions/EthAction";

const defaultState = {
    web3: undefined,
    ensContract: undefined,
    ipfs: undefined
};

const EthReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_WEB3:
            return {
                web3: action.web3,
                ensContract: action.ensContract,
                ipfs: state.ipfs
            };
        case SET_IPFS:
            return {
                web3: state.web3,
                ensContract: state.ensContract,
                ipfs: action.ipfs
            };
        default:
            return state;
    }
};

export const getWeb3 = state => state.eth.web3;
export const getIpfs = state => state.eth.ipfs;

export default EthReducer;