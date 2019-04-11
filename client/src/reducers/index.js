import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authreducer from './authreducer';

export default combineReducers({
  auth: authreducer,
  form: formReducer
});
