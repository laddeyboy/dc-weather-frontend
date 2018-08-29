import axios from 'axios';

const backend = process.env.REACT_APP_BACKEND_URL;

export function setTemp (data) {
  return {
    type: 'SET_TEMP',
    data: data
  };
}

export function showError (msg) {
  return {
    type: 'SHOW_ERROR',
    msg: msg
  };
}

export function setTempAsync(zip) {
  return dispatch => {
    axios
      .get(backend + '/?zip=' + zip)
      .then((result) => {
        dispatch(setTemp(result.data.temp));
      })
      .catch((e) => {
        alert(e);
        //dispatch(showError('Weather lookup failed!!!!'));
      });
  };
}
