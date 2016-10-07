import { combineReducers } from 'redux';
import courses from './courseReducer';
import newCourse from './newCourseReducer';

const rootReducer = combineReducers({
  courses,
  newCourse
});

export default rootReducer;
