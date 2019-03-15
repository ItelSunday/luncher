<<<<<<< HEAD
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";
=======
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions";
>>>>>>> da97cb8d18ed5e0366798aebeacabfdaed7c0968


const initialState ={
    logIn: false,
    loggedIn: false,
    loggedInUsername: '',
    token: '',
    error: '',
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
        return {
            ...state,
            logIn: true
        }

        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token);
<<<<<<< HEAD
        return {
            ...state,
            logIn: false,
            loggedIn: true,
            token: action.payload.token,
            loggedInUsername: action.payload.username,
        }

        case LOGIN_FAILURE:
        return {
            ...state,
            logIn: false,
            error: action.payload
        }

        default:
        return state;
=======
        return {
            ...state,
            logIn: false,
            loggedIn: true,
            token: action.payload.token,
            loggedInUsername: action.payload.username,
        }

        case LOGIN_FAILURE:
        return {
            ...state,
            logIn: false,
            error: action.payload
        }

        case LOGOUT:
        localStorage.removeItem("token");
        return {
          ...state,
          loggedIn: false,
          token: ""
        };
>>>>>>> da97cb8d18ed5e0366798aebeacabfdaed7c0968

        default:
        return state;

    }
}
