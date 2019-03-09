import { POST_CLAIM, GET_CLAIM, SEARCH_CLAIM, PUT_CLAIM, ERROR_CLAIM } from "../actions/ClaimActions";
// TODO change array to object
// TODO handle errors
const defaultState = [];

const ClaimReducer = (state = defaultState, action) => {
    switch (action.type) {
        case POST_CLAIM:
            return {
                claims: [...state.claims, action.claim]
            };

        case GET_CLAIM:
            return {
                claims: [...state.claims, action.claim]
            };

        case SEARCH_CLAIM:
            return {
                claims: [...state.claims, ...action.claims]
            };

        case PUT_CLAIM:
            return {
                claims: [...state.claims, action.claim]
            };

        case ERROR_CLAIM:
            return {
                claims: state.claims
            };
        default:
            return state;
    }
};

export default ClaimReducer;