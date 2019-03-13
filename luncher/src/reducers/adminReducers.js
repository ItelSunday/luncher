import { FETCH_SCHOOLS_START, FETCH_SCHOOLS_SUCCESS, FETCH_SCHOOLS_FAILURE } from "../actions";
import { DELETE_SCHOOL_START, DELETE_SCHOOL_SUCCESS, DELETE_SCHOOL_FAILURE } from "../actions";

const initialState = {
    schools: [],
    //isAdmin: false,
    //isLoggingIn: false,
    //loggedIn: false,
    fetchingInfo: false,
    deletingSchool: false,
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
        case DELETE_SCHOOL_START:
            return {
                ...state,
                deletingSchool: true,
                error: '',
            }
        case DELETE_SCHOOL_SUCCESS:
            return {
                ...state,
                deletingSchool: false,
                error: ''
            }
        case DELETE_SCHOOL_FAILURE:
            return {
                ...state,
                deletingSchool: false,
                error: action.payload
            }
        default:
            return state;
    }
        
}