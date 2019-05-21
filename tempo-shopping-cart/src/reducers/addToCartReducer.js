import { FETCH_ADD_TO_CART_DATA, FETCH_ADD_TO_CART_SUCCESS, FETCH_ADD_TO_CART_FAILURE } from '../actions/addToCartAction';

const initialState = {
    isLoaded: false,
    error: false,
    payLoad: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ADD_TO_CART_DATA : 
            return {
                ...state,
                isLoaded: false
            }
        case FETCH_ADD_TO_CART_SUCCESS: 
            return {
                ...state,
                isLoaded: true,
                payLoad: action.payload
            }
        case FETCH_ADD_TO_CART_FAILURE:
            return {
                ...state,
                isLoaded: false,
                payLoad: action.error
            }
        default:
            return state;
    }
}