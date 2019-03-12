import { FETCH_SCHOOLS_START, FETCH_SCHOOLS_SUCCESS, FETCH_SCHOOLS_FAILURE } from "../actions";

const initialState = {
    schools: [],
    //isAdmin: false,
    //isLoggingIn: false,
    //loggedIn: false,
    fetchingInfo: false,
    //adminInfo: {},
    error: ''
}

export const adminReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_SCHOOLS_START:
            return {
                ...state,
                fetchingInfo: true,
                error: ''
            }
        case FETCH_SCHOOLS_SUCCESS:
            return {
                ...state,
                schools: [...action.payload],
                fetchingInfo: false,
                error: ''
            }
        case FETCH_SCHOOLS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
        
}