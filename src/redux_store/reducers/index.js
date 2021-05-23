import {combineReducers} from 'redux';
import indexReducer from './indexReducer';
import counterReducer from './counterReducer';

export default combineReducers({
  indexReducer,
  counterReducer,
});
