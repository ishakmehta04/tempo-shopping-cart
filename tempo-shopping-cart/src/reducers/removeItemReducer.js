import { FETCH_REMOVE_FROM_CART_DATA, FETCH_REMOVE_FROM_CART_SUCCESS, FETCH_REMOVE_FROM_CART_FAILURE } from '../actions/removeItemAction';

const initialState = {
    isLoaded: false,
    error: false,
    payLoad: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_REMOVE_FROM_CART_DATA : 
            return {
                ...state,
                isLoaded: false
            }
        case FETCH_REMOVE_FROM_CART_SUCCESS: 
            return {
                ...state,
                isLoaded: true,
                payLoad: action.payload
            }
        case FETCH_REMOVE_FROM_CART_FAILURE:
            return {
                ...state,
                isLoaded: false,
                payLoad: action.error
            }
        default:
            return state;
    }
}