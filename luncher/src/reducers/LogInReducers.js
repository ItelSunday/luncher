import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions";


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

        default:
        return state;

    }
}
