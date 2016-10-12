import React from 'react';
import { Blade } from 'react-blades';
import CourseListItem from './CourseListItem';
import CreateCourse from './CreateCourse';
import * as courseActions from '../actions/courseActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CourseList extends React.Component {
  courseRow(course, index) {
    return <CourseListItem course={course} key={course.id} />;
  }

  render() {
    const { blades, actions, courses } = this.props;

    const bladeActions = [{
      key: 'new-course',
      title: 'New',
      iconClass: 'fa fa-plus',
      callback: () => {
        actions.initNewCourse();
        blades.add({
          id: 'course-details',
          isVisible: true,
          width: 500,
          component: {
            type: CreateCourse,
          },
        })
      },
    }, {
      key: 'refresh-courses',
      title: 'Refresh',
      iconClass: 'fa fa-refresh',
      callback: () => {},
    }]

    return (
      <Blade
        title="Courses"
        actions={bladeActions}
      >
        <ul className="course-list">
          {courses.map(this.courseRow)}
        </ul>
      </Blade>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courses,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
