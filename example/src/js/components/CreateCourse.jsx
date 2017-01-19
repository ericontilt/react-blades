import React from 'react';
import { Blade } from '../../../../index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../actions/courseActions';

const propTypes = {
  blades: React.PropTypes.object.isRequired
};

class CreateCourse extends React.Component {
  constructor(props) {
    super(props);

    this.handleCourseTitleChange = this.handleCourseTitleChange.bind(this);
    this.handleCourseLengthChange = this.handleCourseLengthChange.bind(this);
    this.handleCourseCategoryChange = this.handleCourseCategoryChange.bind(this);
  }

  handleCourseTitleChange(e) {
    this.props.actions.changeCourseTitle(e.target.value);
  }

  handleCourseLengthChange(e) {
    this.props.actions.changeCourseLength(e.target.value);
  }

  handleCourseCategoryChange(e) {
    this.props.actions.changeCourseCategory(e.target.value);
  }

  render() {
    const { blades, actions, course } = this.props;

    const bladeActions = [ {
      id: 'back',
      title: 'Back',
      iconClass: 'fa fa-arrow-left',
      callback: () => {
        blades.remove(this.props.id);
      },
    }, {
      id: 'save',
      title: 'Save',
      iconClass: 'fa fa-save',
      isEnabled: course.title.length > 0,
      callback: () => {
        actions.saveCourse(course);
      },
    }];

    return (
      <Blade
        title="New Course"
        actions={bladeActions}
      >
        <div>
          <label htmlFor="input-course-title">Title:</label>
          <input
            type="text"
            id="input-course-title"
            value={course.title}
            onChange={this.handleCourseTitleChange}
          />
        </div>

        <div>
          <label htmlFor="input-course-length">Length:</label>
          <input
            type="text"
            id="input-course-length"
            value={course.length}
            onChange={this.handleCourseLengthChange}
          />
        </div>

        <div>
          <label htmlFor="input-course-category">Category:</label>
          <input
            type="text"
            id="input-course-category"
            value={course.category}
            onChange={this.handleCourseCategoryChange}
          />
        </div>
      </Blade>
    );
  }
};

CreateCourse.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
  return {
    course: state.course,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCourse);
