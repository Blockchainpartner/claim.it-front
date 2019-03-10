import axios from "axios";

/**
 * Action types
 */

const POST_CLAIM = 'POST_CLAIM';
const GET_CLAIM = 'GET_CLAIM';
const SEARCH_CLAIM = 'SEARCH_CLAIM';
const PUT_CLAIM = 'PUT_CLAIM';
const ERROR_CLAIM = 'ERROR_CLAIM';

/**
 * Action creators
 */

export function postClaimSuccess(){
    return {
        type: POST_CLAIM,

    }
}

export function getClaimSuccess(){
    return {
        type: GET_CLAIM,

    }
}

export function searchClaimSuccess(){
    return {
        type: SEARCH_CLAIM,

    }
}

export function putClaimSuccess(){
    return {
        type: PUT_CLAIM,

    }
}

export function claimActionError(){
    return {
        type: ERROR_CLAIM,

    }
}

/**
 * Thunk action creators
 */

const postClaim = ( claimPrototype ) => {
    return async (dispatch, getState) => {
        let { web3 } = getState.eth;

        claimPrototype.userAddress = (await web3.eth.getAccounts())[0];

        axios.post(
            "",
            claimPrototype,
            {}

        ).then((response) => {
            console.log(response);
            dispatch(postClaimSuccess());
        }).catch((error) => {
            console.log(error);
            dispatch(claimActionError());
        });
    }
};

const getClaim = ( claimId ) => {
    return async (dispatch) => {
        axios.get(
            `/${claimId}`,
            {}

        ).then((response) => {
            console.log(response);
            dispatch(getClaimSuccess());
        }).catch((error) => {
            console.log(error);
            dispatch(claimActionError());
        });
    }
};

const searchClaim = ( filter, limit, sort ) => {
    return async (dispatch) => {

        let data = {filter, limit, sort};

        axios.post(
            `/search`,
            data,
            {}

        ).then((response) => {
            console.log(response);
            dispatch(searchClaimSuccess());
        }).catch((error) => {
            console.log(error);
            dispatch(claimActionError());
        });
    }
};

const putClaim = ( claimId, claimPrototype ) => {
    return async (dispatch) => {
        axios.put(
            `/${claimId}`,
            claimPrototype,
            {}

        ).then((response) => {
            console.log(response);
            dispatch(putClaimSuccess());
        }).catch((error) => {
            console.log(error);
            dispatch(claimActionError());
        });
    }
};

export {
    POST_CLAIM,
    GET_CLAIM,
    SEARCH_CLAIM,
    PUT_CLAIM,
    ERROR_CLAIM,
    postClaim,
    getClaim,
    searchClaim,
    putClaim
}
