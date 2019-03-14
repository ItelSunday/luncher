import { FETCH_SCHOOLS_START, FETCH_SCHOOLS_SUCCESS, FETCH_SCHOOLS_FAILURE } from "../actions";
import { GET_SINGLESCHOOL_START, GET_SINGLESCHOOL_SUCCESS, GET_SINGLESCHOOL_FAILURE } from "../actions";
import { DELETE_SCHOOL_START, DELETE_SCHOOL_SUCCESS, DELETE_SCHOOL_FAILURE } from "../actions";
import { ADD_SCHOOL_START, ADD_SCHOOL_SUCCESS, ADD_SCHOOL_FAILURE } from "../actions";
import { UPDATE_SCHOOL_START, UPDATE_SCHOOL_SUCCESS, UPDATE_SCHOOL_FAILURE } from "../actions";

const initialState = {
    schools: [],
    //isAdmin: false,
    //isLoggingIn: false,
    //loggedIn: false,
    fetchingInfo: false,
    gettingSchool: false,
    deletingSchool: false,
    addingSchool: false,
    updatingSchool: false,
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
        case GET_SINGLESCHOOL_START:
            return {
                ...state,
                gettingSchool: true,
                error: ''
            }
        case GET_SINGLESCHOOL_SUCCESS:
            return {
                ...state,
                gettingSchool: false,
                schools: action.payload,
                error: ''
            }
        case GET_SINGLESCHOOL_FAILURE:
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
        case ADD_SCHOOL_START:
            return {
                ...state,
                addingSchool: true,
                error: ''
            }
        case ADD_SCHOOL_SUCCESS:
            return {
                ...state,
                addingSchool: false,
                error: ''
            }
        case ADD_SCHOOL_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case UPDATE_SCHOOL_START:
            return {
                ...state,
                updatingSchool: true,
                error: ''
            }
        case UPDATE_SCHOOL_SUCCESS:
            return {
                ...state,
                updatingSchool: false,
                error: ''
            }
        case UPDATE_SCHOOL_FAILURE:
            return {
                ...state,
                error: ''
            }    
        default:
            return state;
    }
        
}