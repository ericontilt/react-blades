import * as actionTypes from './actionTypes';
import CourseApi from '../api/mockCourseApi';

export function initNewCourse() {
  return { type: actionTypes.INIT_NEW_COURSE };
}

const saveCourseSuccess = course => ({
  type: actionTypes.SAVE_COURSE_SUCCESS,
  course,
});

export function saveCourse(course) {
  return dispatch => {
    return CourseApi.saveCourse(course).then((savedCourse) => {
      dispatch(saveCourseSuccess(savedCourse));
      if (course.isNew) {
        dispatch(initNewCourse());
      }
    }).catch(error => {
      throw error;
    });
  };
}

export function editCourse(course) {
  return { type: actionTypes.EDIT_COURSE, course };
}

export function resetChanges() {
  return { type: actionTypes.RESET_COURSE_CHANGES };
}

export function changeCourseTitle(title) {
  return { type: actionTypes.CHANGE_COURSE_TITLE, title };
}

export function changeCourseLength(length) {
  return { type: actionTypes.CHANGE_COURSE_LENGTH, length };
}

export function changeCourseCategory(category) {
  return { type: actionTypes.CHANGE_COURSE_CATEGORY, category };
}

const loadCoursesSuccess = courses => ({
  type: actionTypes.LOAD_COARSES_SUCCESS,
  courses,
});

export function loadCourses() {
  return dispatch => {
    return CourseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses))
    }).catch(error => {
      throw error;
    });
  };
}
