import {DECREMENTED, INCREMENT} from '../actions/counterActions';

const initialState = {
  counter: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENTED:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}
