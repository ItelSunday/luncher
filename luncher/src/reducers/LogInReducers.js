<<<<<<< HEAD
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";
=======
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions";
>>>>>>> d3078d338a936303c717236db601f35199ba9cfe


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
>>>>>>> d3078d338a936303c717236db601f35199ba9cfe

        default:
        return state;

    }
}
