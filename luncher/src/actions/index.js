import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT = "LOGOUT";

// Public
export const FETCHING_SCHOOLS = "FETCHING_SCHOOLS";
export const FETCHING_SCHOOLS_SUCCESS = "FETCHING_SCHOOLS_SUCCESS";
export const FETCHING_SCHOOLS_FAILURE = "FETCHING_SCHOOLS_FAILURE";

// Admin
export const FETCH_SCHOOLS_START = "FETCH_SCHOOLS_START";
export const FETCH_SCHOOLS_SUCCESS = "FETCH_SCHOOLS_SUCCESS";
export const FETCH_SCHOOLS_FAILURE = "FETCH_SCHOOLS_FAILURE";

export const GET_SINGLESCHOOL_START = "GET_SINGLESCHOOL_START";
export const GET_SINGLESCHOOL_SUCCESS = "GET_SINGLESCHOOL_SUCCESS";
export const GET_SINGLESCHOOL_FAILURE = "GET_SINGLESCHOOL_FAILURE";

export const DELETE_SCHOOL_START = "DELETE_SCHOOL_START";
export const DELETE_SCHOOL_SUCCESS = "DELETE_SCHOOL_SUCCESS";
export const DELETE_SCHOOL_FAILURE = "DELETE_SCHOOL_FAILURE";

export const ADD_SCHOOL_START = "ADD_SCHOOL_START";
export const ADD_SCHOOL_SUCCESS = "ADD_SCHOOL_SUCCESS";
export const ADD_SCHOOL_FAILURE = "ADD_SCHOOL_FAILURE";

export const UPDATE_SCHOOL_START = "UPDATE_SCHOOL_START";
export const UPDATE_SCHOOL_SUCCESS = "UPDATE_SCHOOL_SUCCESS";
export const UPDATE_SCHOOL_FAILURE = "UPDATE_SCHOOL_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post("https://luncher-server.herokuapp.com/api/auth/login", creds)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.data }));
};

export const logout = () => {
  return { type: LOGOUT };
};

export const getSchools = id => dispatch => {
  dispatch({ type: FETCH_SCHOOLS_START });
  axios
    .get(`https://luncher-server.herokuapp.com/api/admin`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => res.data)
    .then(schools => {
      console.log("data", schools);
      dispatch({ type: FETCH_SCHOOLS_SUCCESS, payload: schools });
    })
    .catch(err => {
      dispatch({ type: FETCH_SCHOOLS_FAILURE, payload: err });
    });
};

export const getSingleSchool = id => dispatch => {
  dispatch({ type: GET_SINGLESCHOOL_START });
  axios
    .get(`https://luncher-server.herokuapp.com/api/admin/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => res.data)
    .then(school => {
      dispatch({ type: GET_SINGLESCHOOL_SUCCESS, payload: school });
    })
    .catch(err => {
      dispatch({ type: GET_SINGLESCHOOL_FAILURE, payload: err });
    });
};

export const deleteSchool = id => {
  const deletedSchool = axios.delete(
    `https://luncher-server.herokuapp.com/api/admin/${id}`,
    {
      headers: { Authorization: localStorage.getItem("token") }
    }
  );
  return dispatch => {
    dispatch({ type: DELETE_SCHOOL_START });
    deletedSchool
      .then(schools => {
        dispatch({ type: DELETE_SCHOOL_SUCCESS, payload: schools });
      })
      .catch(err => {
        dispatch({ type: DELETE_SCHOOL_FAILURE, payload: err });
      });
  };
};

export const addSchool = newSchool => dispatch => {
  dispatch({ type: ADD_SCHOOL_START });
  axios
    .post("https://luncher-server.herokuapp.com/api/admin", newSchool, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => res.data)
    .then(schools => {
      dispatch({ type: ADD_SCHOOL_SUCCESS, payload: schools });
    })
    .catch(err => dispatch({ type: ADD_SCHOOL_FAILURE, payload: err }));
};

export const updateSchool = (id, newSchool) => dispatch => {
  dispatch({ type: UPDATE_SCHOOL_START });

  axios
    .put(`https://luncher-server.herokuapp.com/api/admin/${id}`, newSchool, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => res.data)
    .then(school => {
      console.log("SCHOOL", school);
      dispatch({ type: UPDATE_SCHOOL_SUCCESS, payload: { id, ...school } });
    })
    .catch(err => {
      dispatch({ type: UPDATE_SCHOOL_FAILURE, payload: err });
    });
};

export const publicReducer = () => dispatch => {
  dispatch({ type: FETCHING_SCHOOLS });
  console.log(publicReducer);
  axios
    .get("https://luncher-server.herokuapp.com/api/schools")
    .then(res => res.data)
    .then(schools =>
      dispatch({
        type: FETCHING_SCHOOLS_SUCCESS,
        payload: schools
      })
    )
    .catch(err =>
      dispatch({
        type: FETCHING_SCHOOLS_FAILURE,
        payload: err.res
      })
    );
};
