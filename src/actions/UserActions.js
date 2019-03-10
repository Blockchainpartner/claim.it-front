import axios from "axios";

/**
 * Action types
 */

const POST_USER = 'POST_USER';
const GET_USER = 'GET_USER';
const SEARCH_USER = 'SEARCH_USER';
const PUT_USER = 'PUT_USER';
const ERROR_USER = 'ERROR_USER';

/**
 * Action creators
 */

export function postUserSuccess(){
    return {
        type: POST_USER,

    }
}

export function getUserSuccess(){
    return {
        type: GET_USER,

    }
}

export function searchUserSuccess(){
    return {
        type: SEARCH_USER,

    }
}

export function putUserSuccess(){
    return {
        type: PUT_USER,

    }
}

export function userActionError(){
    return {
        type: ERROR_USER,

    }
}

/**
 * Thunk action creators
 */

const postUser = ( userPrototype ) => {
    return async (dispatch, getState) => {
        let { web3 } = getState.eth;

        userPrototype.userAddress = (await web3.eth.getAccounts())[0];

        axios.post(
            "myapiurl",
            userPrototype,
            {}

        ).then((response) => {
            console.log(response);
            dispatch(postUserSuccess());
        }).catch((error) => {
            console.log(error);
            dispatch(userActionError());
        });
    }
};

const getUser = ( userId ) => {
    return async (dispatch) => {
        axios.get(
            `myapiurl/${userId}`,
            {}

        ).then((response) => {
            console.log(response);
            dispatch(getUserSuccess());
        }).catch((error) => {
            console.log(error);
            dispatch(userActionError());
        });
    }
};

const searchUser = ( filter, limit, sort ) => {
    return async (dispatch) => {

        let data = {filter, limit, sort};

        axios.post(
            `myapiurl/search`,
            data,
            {}

        ).then((response) => {
            console.log(response);
            dispatch(searchUserSuccess());
        }).catch((error) => {
            console.log(error);
            dispatch(userActionError());
        });
    }
};

const putUser = ( userId, userPrototype ) => {
    return async (dispatch) => {
        axios.put(
            `myapiurl/${userId}`,
            userPrototype,
            {}

        ).then((response) => {
            console.log(response);
            dispatch(putUserSuccess());
        }).catch((error) => {
            console.log(error);
            dispatch(userActionError());
        });
    }
};

export {
    POST_USER,
    GET_USER,
    SEARCH_USER,
    PUT_USER,
    ERROR_USER,
    postUser,
    getUser,
    searchUser,
    putUser
}
