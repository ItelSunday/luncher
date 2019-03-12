import { adminReducer } from './adminReducers';
import { publicReducer } from './publicReducers';
import { combineReducers } from 'redux';

export default combineReducers({
    adminReducer,
    publicReducer
})

