import { adminReducer } from './adminReducers';
import { combineReducers } from 'redux';
import { loginReducer } from './LogInReducers';

export default combineReducers({
    loginReducer,
    adminReducer
})

