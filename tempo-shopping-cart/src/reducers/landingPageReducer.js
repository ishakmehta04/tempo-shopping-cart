import { FETCH_LOAD_DATA, FETCH_LOAD_DATA_SUCCESS, FETCH_LOAD_DATA_FAILURE } from '../actions/landingPageAction';

const initialState = {
    isLoaded: false,
    error: false,
    payLoad: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_LOAD_DATA : 
            return {
                ...state,
                isLoaded: false
            }
        case FETCH_LOAD_DATA_SUCCESS: 
            return {
                ...state,
                isLoaded: true,
                payLoad: action.payload
            }
        case FETCH_LOAD_DATA_FAILURE:
            return {
                ...state,
                isLoaded: true,
                payLoad: action.error
            }
        default:
            return state;
    }
}