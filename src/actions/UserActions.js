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

export function postUserSuccess(user){
    return {
        type: POST_USER,
        user: user,
    }
}

export function getUserSuccess(user){
    return {
        type: GET_USER,
        user: user,
    }
}

export function searchUserSuccess(users){
    return {
        type: SEARCH_USER,
        users: users,
    }
}

export function putUserSuccess(user){
    return {
        type: PUT_USER,
        user: user,
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

const postUser = ( ipfsURI ) => {
    return async (dispatch, getState) => {
        let { web3 } = getState().eth;

        let userPrototype = {
            pictureURI: ipfsURI
        };

        userPrototype.actionKeyAddress = (await web3.eth.getAccounts())[0];
        console.log(userPrototype)
        axios({
          method:'post',
          url:'/user',
          data: userPrototype,
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
            console.log(response);
            dispatch(postUserSuccess(response.data));
        }).catch((error) => {
            console.log(error);
            dispatch(userActionError());
        });
    }
};

const getUser = ( userId ) => {
    return async (dispatch) => {
        axios.get(
            `/user/${userId}`,
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
            `/user/search`,
            data,
            {}

        ).then((response) => {
            console.log(response);
            dispatch(searchUserSuccess(response.data));
        }).catch((error) => {
            console.log(error);
            dispatch(userActionError());
        });
    }
};

const putUser = ( userId, userPrototype ) => {
    return async (dispatch) => {
        axios.put(
            `/user/${userId}`,
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
