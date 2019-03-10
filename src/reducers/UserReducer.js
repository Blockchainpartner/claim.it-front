import { POST_USER, GET_USER, SEARCH_USER, PUT_USER, ERROR_USER } from "../actions/UserActions";

const defaultState = { users: undefined, currentUser: undefined };

const UserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case POST_USER:
            return {
                users: {
                ...state.users,
                [action.user.id]: action.user
                },
                currentUser: action.user,
            };

        case GET_USER:
            return {
                users: {
                    ...state.users,
                    [action.user.id]: action.user
                },
                currentUser: state.currentUser
            };

        case SEARCH_USER:
            return {
                users: {
                    ...state.users,
                    ...action.users
                },
                currentUser: state.currentUser
            };

        case PUT_USER:
            return {
                users: {
                    ...state.users,
                    [action.user.id]: action.user
                },
                currentUser: state.currentUser
            };

        case ERROR_USER:
            return {
                users: state.users,
                currentUser: state.currentUser
            };
        default:
            return state;
    }
};

export default UserReducer;