import {DECREMENT, decremented} from '../actions/counterActions';
import {ofType} from 'redux-observable';
import {debounceTime, map} from 'rxjs/operators';

export const Decrement = (actions$, state$) => {
  return actions$.pipe(
    ofType(DECREMENT),
    debounceTime(500),
    // delay(2000),
    map(action$ => decremented()),
  );
};
