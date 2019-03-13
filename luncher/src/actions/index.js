import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT = "LOGOUT";

// Public
export const FETCHING_SCHOOLS = "FETCHING_SCHOOLS";
export const FETCHING_SCHOOLS_SUCCESS = "FETCHING_SCHOOLS_SUCCESS";
export const FETCHING_SCHOOLS_FAILURE = "FETCHING_SCHOOLS_FAILURE";

// Admin
export const FETCH_SCHOOLS_START = 'FETCH_SCHOOLS_START';
export const FETCH_SCHOOLS_SUCCESS = 'FETCH_SCHOOLS_SUCCESS';
export const FETCH_SCHOOLS_FAILURE = 'FETCH_SCHOOLS_FAILURE';


export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    axios
        .post('https://luncher-server.herokuapp.com/api/auth/login', creds)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.data }))
  };


export const logout = () => {
    return { type: LOGOUT };
  };


export const getSchools = () => dispatch => {
    dispatch({ type: FETCH_SCHOOLS_START });
    axios
        .get('https://luncher-server.herokuapp.com/admin/:id', {
            headers: { Authorization: localStorage.getItem('token') }
        })
        .then(res => res.data)
        .then(schools => {
            console.log("data", schools)
            dispatch({ type: FETCH_SCHOOLS_SUCCESS, payload: schools });
        })
        .catch(err => {
            dispatch({ type: FETCH_SCHOOLS_FAILURE, payload: err });
        })
}


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


