import { FETCH_SCHOOLS_START, FETCH_SCHOOLS_SUCCESS, FETCH_SCHOOLS_FAILURE } from "../actions";
<<<<<<< HEAD
=======
import { DELETE_SCHOOL_START, DELETE_SCHOOL_SUCCESS, DELETE_SCHOOL_FAILURE } from "../actions";
>>>>>>> d3078d338a936303c717236db601f35199ba9cfe

const initialState = {
    schools: [],
    //isAdmin: false,
    //isLoggingIn: false,
    //loggedIn: false,
    fetchingInfo: false,
<<<<<<< HEAD
=======
    deletingSchool: false,
>>>>>>> d3078d338a936303c717236db601f35199ba9cfe
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
<<<<<<< HEAD
=======
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
>>>>>>> d3078d338a936303c717236db601f35199ba9cfe
        default:
            return state;
    }
        
}