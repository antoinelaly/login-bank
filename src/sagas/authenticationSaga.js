import { put, call } from 'redux-saga/effects';
import { profilUserService, loginUserService } from '../services/authenticationService';

import * as types from '../actions'

export function* profilSaga(payload) {
  try {
    const response = yield call(profilUserService, payload);
    yield [
      put({ type: types.PROFIL_USER_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.PROFIL_USER_ERROR, error });
  }
}

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    yield [
      put({ type: types.LOGIN_USER_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, error })
  }
}

