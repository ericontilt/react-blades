import React, { PropTypes } from 'react';

const propTypes = {
  course: PropTypes.object.isRequired,
  onCourseClick: PropTypes.func,
};
const defaultProps = {
  onCourseClick: () => {},
};

export default function CourseListItem({ course, onCourseClick }) {
  const handleCourseClick = (e) => {
    if (e) e.preventDefault();
    onCourseClick(course);
  };
  return (
    <li className="course-list-item" onClick={handleCourseClick}>
      <div className="title">{course.title}</div>
      <div className="length">Length: {course.length}</div>
      <div className="category">{course.category}</div>
    </li>
  );
}

CourseListItem.propTypes = propTypes;
CourseListItem.defaultProps = defaultProps;
