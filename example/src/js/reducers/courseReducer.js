import * as actionTypes from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_COARSES_SUCCESS:
      return [
        ...action.courses
      ];

    case actionTypes.SAVE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course),
      ];

    default:
      return state;
  }
}
