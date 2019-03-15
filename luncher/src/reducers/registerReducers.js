import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from "../actions";


const initialState ={
    regIn: false,
    registerIn: false,
    registerInUsername: '',
    token: '',
    error: '',
};

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START:
        return {
            ...state,
            regIn: true
        }

        case REGISTER_SUCCESS:
            localStorage.setItem("token", action.payload.token);
        return {
            ...state,
            regIn: false,
            registerIn: true,
            token: action.payload.token,
            registerInUsername: action.payload.username,
        }

        case REGISTER_FAILURE:
        return {
            ...state,
            regIn: false,
            error: action.payload
        };

        default:
        return state;

    }
}
