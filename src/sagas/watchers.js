import { takeLatest } from 'redux-saga/effects';
import { profilSaga, loginSaga } from './authenticationSaga';

import * as types from '../actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.PROFIL_USER, profilSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
}