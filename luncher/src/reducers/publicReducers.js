import {
    FETCHING_SCHOOLS,
    FETCHING_SCHOOLS_SUCCESS,
    FETCHING_SCHOOLS_FAILURE
  } from "../actions/publicActions";
  
  const initialState = {
    schools: [],
    isfetchingSchools: false,
    error: ""
  };
  
  export const publicReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_SCHOOLS:
        console.log("publicReducers", state);
        return {
          ...state,
          // schools: action.payload,
          isfetchingSchools: true,
          error: null
        };
  
      case FETCHING_SCHOOLS_SUCCESS:
        return {
          ...state,
          schools: [...action.payload],
          isfetchingSchools: false,
          error: null
        };
  
      case FETCHING_SCHOOLS_FAILURE:
        return {
          ...state,
          isfetchingSchools: false,
          error: action.payload
        };
  
      default:
        return state;
    }
  };