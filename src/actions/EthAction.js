import Web3 from 'web3';
import ensContractABI from '../util/ensContractABI';
import ipfsClient from 'ipfs-http-client';

/**
 * Action types
 */

const SET_WEB3 = 'SET_WEB3';
const SET_IPFS = 'SET_IPFS';

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

export function setIpfs(ipfs){
    return {
        type: SET_IPFS,
        ipfs
    }
}

/**
 * Thunk action creators
 */

const initEthStore = () => {
    return async (dispatch) => {
        let web3;

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

const initIpfs = () => {
    return async (dispatch) => {

        let ipfs = ipfsClient({ host: '54.93.97.27', port: '5001', protocol: 'http' })

        dispatch(setIpfs(ipfs));
    }
}

export {
    SET_WEB3,
    SET_IPFS,
    initEthStore,
    initIpfs
}
