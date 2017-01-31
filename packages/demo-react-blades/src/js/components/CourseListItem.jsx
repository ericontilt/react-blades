import React, { PropTypes } from 'react';

const propTypes = {
  course: PropTypes.object.isRequired,
  onCourseClick: PropTypes.func,
};

const CourseListItem = ({ course, onCourseClick }) => {
  const handleCourseClick = (e) => {
    e.preventDefault();
    onCourseClick(course);
  };
  return (
    <li className="course-list-item" onClick={handleCourseClick}>
      <div className="title">{course.title}</div>
      <div className="length">Length: {course.length}</div>
      <div className="category">{course.category}</div>
    </li>
  );
};

export default CourseListItem;

CourseListItem.propTypes = propTypes;
