import { combineReducers } from 'redux';
import profil from './profilReducer';
import login from './loginReducer';

const rootReducer = combineReducers({
  profil, login
});

export default rootReducer;