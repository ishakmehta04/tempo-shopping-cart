import { FETCH_OVERLAY_DATA, FETCH_OVERLAY_DATA_FAILURE, FETCH_OVERLAY_DATA_SUCCESS } from '../actions/overlayPageAction';

const initialState = {
    isLoaded: false,
    error: false,
    payLoad: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_OVERLAY_DATA : 
            return {
                ...state,
                isLoaded: false
            }
        case FETCH_OVERLAY_DATA_SUCCESS: 
            return {
                ...state,
                isLoaded: true,
                payLoad: action.payload
            }
        case FETCH_OVERLAY_DATA_FAILURE:
            return {
                ...state,
                isLoaded: false,
                payLoad: action.error
            }
        default:
            return state;
    }
}