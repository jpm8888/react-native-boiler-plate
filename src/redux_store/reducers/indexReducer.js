import {DUMMY_ACTION} from '../actions/indexActions';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case DUMMY_ACTION:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
}
