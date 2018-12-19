const axios = require('axios');
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const CLEAR_USER_INFO = 'CLEAR_USER_INFO';


const initialState = {
  username: '',
  profile: '',
  userID: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case `${UPDATE_USER_INFO}_FULFILLED`:
      return { ...state, username: action.payload };
    case `${CLEAR_USER_INFO}_FULFILLED`:
      return { ...state, username: '', profile: '', userID: 0 };

    default:
      return state;
  }
}

export function updateUserInfo() {
  return {
    type: UPDATE_USER_INFO,
    payload: axios.get('/api/getuserinfo').then(response => {
      return response.data;
    })
  };
}
export function clearUserInfo() {
  return {
    type: CLEAR_USER_INFO,
    payload: axios.get('/api/getuserinfo').then(response => {
      return response.data;
    })
  };
}


export default reducer;
