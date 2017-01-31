import React from 'react';
import { Blade } from 'react-blades';
import CourseListItem from './CourseListItem';
import CreateCourse from './CreateCourse';
import EditCourse from './EditCourse';
import * as courseActions from '../actions/courseActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.handleCourseClick = this.handleCourseClick.bind(this);
  }

  handleCourseClick(course) {
    const { blades, actions } = this.props;
    actions.editCourse(course);
    blades.add({
      id: 'edit-course',
      width: 500,
      component: {
        type: EditCourse,
      },
    });
  }

  courseRow(course, index) {
    return <CourseListItem course={course} key={course.id} onCourseClick={this.handleCourseClick} />;
  }

  render() {
    const { blades, actions, courses } = this.props;

    const bladeActions = [{
      id: 'new-course',
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
    }]

    return (
      <Blade
        title="Courses"
        actions={bladeActions}
      >
        <ul className="course-list">
          {courses.map(c => this.courseRow(c))}
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
