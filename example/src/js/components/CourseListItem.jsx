import React from 'react';

const CourseListItem = ({ course }) => {
  return (
    <li className="course-list-item">
      <div className="title">{course.title}</div>
      <div className="length">Length: {course.length}</div>
      <div className="category">{course.category}</div>
    </li>
  );
};

export default CourseListItem;
