import { adminReducer } from './adminReducers';
import { combineReducers } from 'redux';
import { registerReducer } from './registerReducers';
import { loginReducer } from './LogInReducers';
import { publicReducer } from './publicReducers';

export default combineReducers({
    loginReducer,
    adminReducer,
    publicReducer,    
    registerReducer
})