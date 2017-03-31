import { combineReducers } from 'redux';
import courses from './coursesReducer';
import course from './courseReducer';

const rootReducer = combineReducers({
  courses,
  course,
});

export default rootReducer;
