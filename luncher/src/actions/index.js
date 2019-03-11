import axios from 'axios';


export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios.post('http://localhost:3000/api/login', creds).then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    });
  };

export const actionCreator = () => dispatch => {
    dispatch({ type: VARIABLE_NAMES_START });
    axios
        .get('')
        .then(res => {
            dispatch({ type: VARIABLE_NAMES_SUCCESS, payload: res });
        })
        .catch(err => {
            dispatch({ type: VARIABLE_NAMES_ERROR, payload: err });
        })
}

