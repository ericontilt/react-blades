import * as actionTypes from '../actions/actionTypes';

export default function newCourseReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.INIT_NEW_COURSE:
      return {
        title: '',
        length: '',
        category: '',
      };

    case actionTypes.CHANGE_NEW_COURSE_TITLE:
      return Object.assign({}, state, {
        title: action.title,
      });

    case actionTypes.CHANGE_NEW_COURSE_LENGTH:
      return Object.assign({}, state, {
        length: action.length,
      });

    case actionTypes.CHANGE_NEW_COURSE_CATEGORY:
      return Object.assign({}, state, {
        category: action.category,
      });

    default:
      return state;
  }
}
