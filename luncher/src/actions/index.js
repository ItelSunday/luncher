import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

<<<<<<< HEAD
=======
export const LOGOUT = "LOGOUT";

>>>>>>> d3078d338a936303c717236db601f35199ba9cfe
// Public
export const FETCHING_SCHOOLS = "FETCHING_SCHOOLS";
export const FETCHING_SCHOOLS_SUCCESS = "FETCHING_SCHOOLS_SUCCESS";
export const FETCHING_SCHOOLS_FAILURE = "FETCHING_SCHOOLS_FAILURE";

// Admin
export const FETCH_SCHOOLS_START = 'FETCH_SCHOOLS_START';
export const FETCH_SCHOOLS_SUCCESS = 'FETCH_SCHOOLS_SUCCESS';
export const FETCH_SCHOOLS_FAILURE = 'FETCH_SCHOOLS_FAILURE';
<<<<<<< HEAD
=======
export const DELETE_SCHOOL_START = 'DELETE_SCHOOL_START';
export const DELETE_SCHOOL_SUCCESS = 'DELETE_SCHOOL_SUCCESS';
export const DELETE_SCHOOL_FAILURE = 'DELETE_SCHOOL_FAILURE';
>>>>>>> d3078d338a936303c717236db601f35199ba9cfe


export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    axios
        .post('https://luncher-server.herokuapp.com/api/auth/login', creds)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.data }))
  };

<<<<<<< HEAD
export const getSchools = () => dispatch => {
    dispatch({ type: FETCH_SCHOOLS_START });
    axios
        .get('https://luncher-server.herokuapp.com/api/schools', {
=======

export const logout = () => {
    return { type: LOGOUT };
  };


export const getSchools = id => dispatch => {
    dispatch({ type: FETCH_SCHOOLS_START });
    axios
        .get(`https://luncher-server.herokuapp.com/api/admin`, {
>>>>>>> d3078d338a936303c717236db601f35199ba9cfe
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

<<<<<<< HEAD
=======
export const deleteSchool = id => {
    const deletedSchool = axios
        .delete(`https://luncher-server.herokuapp.com/api/admin/${id}`, {
            headers: { Authorization: localStorage.getItem('token') } 
        });
    return dispatch => {
        dispatch({ type: DELETE_SCHOOL_START });
        deletedSchool
        .then(schools => {
            dispatch({ type: DELETE_SCHOOL_SUCCESS, payload: schools });
        })
        .catch(err => {
            dispatch({ type: DELETE_SCHOOL_FAILURE, payload: err });
        })
    }
}

>>>>>>> d3078d338a936303c717236db601f35199ba9cfe

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


