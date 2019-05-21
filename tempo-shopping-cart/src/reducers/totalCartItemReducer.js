import { FETCH_TOTAL_CART_DATA, FETCH_TOTAL_CART_SUCCESS, FETCH_TOTAL_CART_FAILURE } from '../actions/totalCartItemAction';

const initialState = {
    isLoaded: false,
    error: false,
    payLoad: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TOTAL_CART_DATA : 
            return {
                ...state,
                isLoaded: false
            }
        case FETCH_TOTAL_CART_SUCCESS: 
            return {
                ...state,
                isLoaded: true,
                payLoad: action.payload
            }
        case FETCH_TOTAL_CART_FAILURE:
            return {
                ...state,
                isLoaded: false,
                payLoad: action.error
            }
        default:
            return state;
    }
}