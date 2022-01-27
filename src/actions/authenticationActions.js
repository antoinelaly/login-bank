import * as types from './index';

export const profilUserAction = (user) => {
  return {
    type: types.PROFIL_USER,
    user
  }
};

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user
  }
};
