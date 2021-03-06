import * as types from '../actions';

export default function(state = [], action) {
  let response = action.response;

  switch(action.type) {
    case types.PROFIL_USER_SUCCESS:
      return { ...state, response };
    case types.PROFIL_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}