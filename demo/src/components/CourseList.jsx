import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Blade, BladeHeader, BladeToolbar, BladeToolbarButton, BladeContent } from '../../../index';

import CourseListItem from './CourseListItem';
import CreateCourse from './CreateCourse';
import EditCourse from './EditCourse';
import * as courseActions from '../actions/courseActions';

const propTypes = {
  bladeManager: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  bladeId: PropTypes.string.isRequired,
  courses: PropTypes.array,
};

const defaultProps = {
  courses: [],
};

class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.handleCourseClick = this.handleCourseClick.bind(this);
    this.handleCreateClick = this.handleCreateClick.bind(this);
  }

  handleCourseClick(course) {
    const { bladeManager, actions, bladeId } = this.props;
    bladeManager.back(bladeId);
    actions.editCourse(course);
    bladeManager.add({
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

  handleCreateClick() {
    const { bladeManager, actions, bladeId } = this.props;
    bladeManager.back(bladeId);
    actions.initNewCourse();
    bladeManager.add({
      id: 'course-details',
      isVisible: true,
      width: 500,
      component: {
        type: CreateCourse,
      },
    });
  }

  render() {
    const { courses } = this.props;
    return (
      <Blade>
        <BladeHeader title="Courses" />

        <BladeToolbar>
          <BladeToolbarButton
            id="new-course"
            title="New"
            iconClass="fa fa-plus"
            onClick={this.handleCreateClick}
          />
        </BladeToolbar>

        <BladeContent>
          <ul className="course-list">
            {courses.map(c => this.courseRow(c))}
          </ul>
        </BladeContent>
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
