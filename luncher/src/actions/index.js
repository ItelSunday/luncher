
import { combineReducers } from 'redux';
import { admin } from './Admin';
import { login } from './LogIn/LogIn';


export default combineReducers({
    admin,
    login
    
})



