import {combineEpics} from 'redux-observable';
import {Decrement} from './counterEpic';

export default combineEpics(Decrement);
