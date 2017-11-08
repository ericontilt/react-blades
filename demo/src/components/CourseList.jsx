import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  List,
  ListItem,
} from 'material-ui/List';

import { Blade, BladeHeader, BladeToolbar, BladeToolbarButton, BladeContent } from '../../../index';

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
    bladeManager.back(bladeId, () => {
      actions.editCourse(course);
      bladeManager.add({
        id: 'edit-course',
        width: 500,
        component: {
          type: EditCourse,
        },
      });
    });
  }

  handleCreateClick() {
    const { bladeManager, actions, bladeId } = this.props;
    bladeManager.back(bladeId, () => {
      actions.initNewCourse();
      bladeManager.add({
        id: 'course-details',
        width: 500,
        component: {
          type: CreateCourse,
        },
      });
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
            title="Mark Assets"
            iconClass="fa fa-plus"
            onClick={this.handleCreateClick}
          />
        </BladeToolbar>

        <BladeContent>
          <List>
            {courses.map(course => (
              <ListItem
                key={course.title}
                primaryText={course.title}
                secondaryText={`${course.category}, Length: ${course.length}`}
                onClick={() => this.handleCourseClick(course)}>
              </ListItem>
            ))}
          </List>
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
