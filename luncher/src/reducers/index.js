import { adminReducer } from './adminReducers';
import { combineReducers } from 'redux';
import { loginReducer } from './LogInReducers';
import { registerReducer } from './registerReducers';
import { publicReducer } from './publicReducers';

export default combineReducers({
    loginReducer,
    adminReducer,
    publicReducer,
    registerReducer
})

