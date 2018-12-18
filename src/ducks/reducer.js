const axios = require('axios');
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const CLEAR_USER_INFO = 'CLEAR_USER_INFO';
// const SET_USER = 'SET_USER';
// const PPL_YOU_FOLLOW = 'PPL_YOU_FOLLOW';
// const FOLLOWING_YOU = 'FOLLOWING_YOU';
// const DAILY_PROPHET = 'DAILY_PROPHET';
// const MENTIONS = 'MENTIONS';

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

// export function setUser() {
//   return {
//     type: SET_USER,
//     payload: axios.get('/api/user').then(response => {
//       return response.data;
//     })
//   };
// }
// export function peopleYouFollow(id) {
//   return {
//     type: PPL_YOU_FOLLOW,
//     payload: axios.get(`/api/followernumber/${id}`).then(response => {
//       return response.data[0];
//     })
//   };
// }
// export function peopleFollowingYou(id) {
//   return {
//     type: FOLLOWING_YOU,
//     payload: axios.get(`/api/followingnumber/${id}`).then(response => {
//       return response.data[0];
//     })
//   };
// }
// export function dailyProphet(id) {
//   return {
//     type: DAILY_PROPHET,
//     payload: axios.get(`/api/news/${id}`).then(response => {
//       return response.data;
//     })
//   };
// }
// export function getMessages(id) {
//   return {
//     type: MENTIONS,
//     payload: axios.get(`/api/news/${id}`).then(response => {
//       return response.data;
//     })
//   };
// }

export default reducer;
