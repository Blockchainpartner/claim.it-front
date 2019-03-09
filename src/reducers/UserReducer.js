import { POST_USER, GET_USER, SEARCH_USER, PUT_USER, ERROR_USER } from "../actions/UserActions";
// TODO change array to object
// TODO handle errors
const defaultState = [];

const UserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case POST_USER:
            return {
                users: [...state.users, action.user]
            };

        case GET_USER:
            return {
                users: [...state.users, action.user]
            };

        case SEARCH_USER:
            return {
                users: [...state.users, ...action.users]
            };

        case PUT_USER:
            return {
                users: [...state.users, action.user]
            };

        case ERROR_USER:
            return {
                users: state.users
            };
        default:
            return state;
    }
};

export default UserReducer;