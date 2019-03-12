import { LOGIN_START, 
        LOGIN_SUCCESS } from "../actions/Admin";


const initialState ={
    logIn: false,
    error: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
        return {
            ...state,
            logIn: true
        };

        case LOGIN_SUCCESS:
        return {
            ...state,
            logIn: false,
            token: action.payload
        };

    }
}

export default reducer;