import { adminReducer } from './adminReducers';
import { combineReducers } from 'redux';
import { registerReducer } from './registerReducers';
import { loginReducer } from './LogInReducers';
import { registerReducer } from './registerReducers';
import { publicReducer } from './publicReducers';

export default combineReducers({
    loginReducer,
    adminReducer,
<<<<<<< HEAD
    publicReducer,
=======
    publicReducer,    
>>>>>>> 10f084b0cb38b937c15201c176b02ec292665d84
    registerReducer
})

