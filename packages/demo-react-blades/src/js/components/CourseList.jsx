import React, { PropTypes } from 'react';
import { Blade } from 'react-blades';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CourseListItem from './CourseListItem';
import CreateCourse from './CreateCourse';
import EditCourse from './EditCourse';
import * as courseActions from '../actions/courseActions';

const propTypes = {
  blades: PropTypes.object.isRequired,
  actions: PropTypes.array,
  courses: PropTypes.array,
};

const defaultProps = {
  actions: [],
  courses: [],
};

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

  courseRow(course) {
    return (
      <CourseListItem
        course={course}
        key={course.id}
        onCourseClick={this.handleCourseClick}
      />
    );
  }

  render() {
    const { blades, actions, courses } = this.props;

    const bladeActions = [{
      id: 'new-course',
      title: 'New',
      iconClass: 'fa fa-plus',
      onClick: () => {
        actions.initNewCourse();
        blades.add({
          id: 'course-details',
          isVisible: true,
          width: 500,
          component: {
            type: CreateCourse,
          },
        });
      },
    }];

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
}

CourseList.propTypes = propTypes;
CourseList.defaultProps = defaultProps;

const mapStateToProps = state => ({
  courses: state.courses,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(courseActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
