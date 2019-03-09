import Web3 from 'web3';
import ensContractABI from '../util/ensContractABI';

/**
 * Action types
 */

const SET_WEB3 = 'SET_WEB3';

/**
 * Action creators
 */

export function setWeb3(web3, ensContract){
    return {
        type: SET_WEB3,
        web3,
        ensContract
    }
};

/**
 * Thunk action creators
 */

const initEthStore = () => {
    return async (dispatch) => {
        let web3;
        console.log("Hello");

        if (window.ethereum) {
            web3 = new Web3(window.ethereum);
            console.log(web3);
            try {
                // Request account access if needed
                await window.ethereum.enable();
                // Acccounts now exposed
            } catch (error) {
                // User denied account access...
                console.log(error);
            }
        }

        let ensAddress = web3.utils.toChecksumAddress("0xc2467ac1d5e60ef3a70e9e69c83724d3ff634050");
        const ensContract = new web3.eth.Contract(ensContractABI, ensAddress); // TODO use defaults instead
        dispatch(setWeb3(web3, ensContract));
    }
}

export {
    SET_WEB3,
    initEthStore,
}
