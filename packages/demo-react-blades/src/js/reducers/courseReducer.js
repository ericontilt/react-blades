import * as actionTypes from '../actions/actionTypes';

export default function courseReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.INIT_NEW_COURSE:
      return {
        title: '',
        length: '',
        category: '',
        isNew: true,
      };

    case actionTypes.EDIT_COURSE:
      return Object.assign({}, {
        isNew: false,
      }, action.course);

    case actionTypes.CHANGE_COURSE_TITLE:
      return Object.assign({}, state, {
        title: action.title,
      });

    case actionTypes.CHANGE_COURSE_LENGTH:
      return Object.assign({}, state, {
        length: action.length,
      });

    case actionTypes.CHANGE_COURSE_CATEGORY:
      return Object.assign({}, state, {
        category: action.category,
      });

    default:
      return state;
  }
}
