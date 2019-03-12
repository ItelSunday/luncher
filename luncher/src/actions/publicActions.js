import axios from "axios";

export const FETCHING_SCHOOLS = "FETCHING_SCHOOLS";
export const FETCHING_SCHOOLS_SUCCESS = "FETCHING_SCHOOLS_SUCCESS";
export const FETCHING_SCHOOLS_FAILURE = "FETCHING_SCHOOLS_FAILURE";



export const publicReducer = () => dispatch => {
    dispatch({type: FETCHING_SCHOOLS});
    console.log(publicReducer);
    axios
      .get('https://luncher-server.herokuapp.com/api/schools')
      .then(res => res.data)
      .then(schools => 
        dispatch({
          type: FETCHING_SCHOOLS_SUCCESS,
          payload: schools
      }))
      .catch(err => 
        dispatch({
          type: FETCHING_SCHOOLS_FAILURE,
          payload: err.res
      }));
  };
  