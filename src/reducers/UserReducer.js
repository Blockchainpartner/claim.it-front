import { POST_USER, GET_USER, SEARCH_USER, PUT_USER, ERROR_USER } from "../actions/UserActions";

const defaultState = { users: undefined};

const UserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case POST_USER:
            return {
                users: {
                ...state.users,
                [action.user.id]: action.user
                }
            };

        case GET_USER:
            return {
                users: {
                    ...state.users,
                    [action.user.id]: action.user
                }
            };

        case SEARCH_USER:
            return {
                users: {
                    ...state.users,
                    ...action.users
                }
            };

        case PUT_USER:
            return {
                users: {
                    ...state.users,
                    [action.user.id]: action.user
                }
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