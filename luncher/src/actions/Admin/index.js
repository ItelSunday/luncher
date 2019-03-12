import axios from 'axios';

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

