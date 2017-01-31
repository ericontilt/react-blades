import * as actionTypes from '../actions/actionTypes';

export default function coursesReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_COARSES_SUCCESS:
      return [
        ...action.courses
      ];

    case actionTypes.SAVE_COURSE_SUCCESS:
      if (action.course.isNew) {
        return [
          ...state,
          Object.assign({}, action.course, { isNew: false }),
        ];
      }
      return state.map(course => {
        if (course.id !== action.course.id) {
          return course;
        }
        return Object.assign({}, action.course);
      });

    default:
      return state;
  }
}
