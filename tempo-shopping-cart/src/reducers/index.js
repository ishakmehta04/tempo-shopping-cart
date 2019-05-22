import { combineReducers } from 'redux';
import landingPageReducer from './landingPageReducer';
import overlayPageReducer from './overlayPageReducer';
import addToCartReducer from './addToCartReducer';
import totalCartItemReducer from './totalCartItemReducer';
import removeItemReducer from './removeItemReducer';

const rootReducer = combineReducers({
    landingPageReducer,
    overlayPageReducer,
    addToCartReducer,
    totalCartItemReducer,
    removeItemReducer
});

export default rootReducer;