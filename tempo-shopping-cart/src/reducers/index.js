import { combineReducers } from 'redux';
import landingPageReducer from './landingPageReducer';
import overlayPageReducer from './overlayPageReducer';
import addToCartReducer from './addToCartReducer';
import totalCartItemReducer from './totalCartItemReducer';

const rootReducer = combineReducers({
    landingPageReducer,
    overlayPageReducer,
    addToCartReducer,
    totalCartItemReducer
});

export default rootReducer;