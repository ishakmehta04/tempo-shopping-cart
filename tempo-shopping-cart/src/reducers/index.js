import { combineReducers } from 'redux';
import landingPageReducer from './landingPageReducer';
import overlayPageReducer from './overlayPageReducer';

const rootReducer = combineReducers({
    landingPageReducer,
    overlayPageReducer
});

export default rootReducer;