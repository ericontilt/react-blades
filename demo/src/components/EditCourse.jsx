import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField';

import { Blade, BladeHeader, BladeToolbar, BladeToolbarButton, BladeContent } from '../../../index';
import * as courseActions from '../actions/courseActions';

import AboutAuthor from './AboutAuthor';

const propTypes = {
  bladeId: PropTypes.string.isRequired,
  bladeManager: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

class EditCourse extends React.Component {
  constructor(props) {
    super(props);

    this.handleCourseTitleChange = this.handleCourseTitleChange.bind(this);
    this.handleCourseLengthChange = this.handleCourseLengthChange.bind(this);
    this.handleCourseCategoryChange = this.handleCourseCategoryChange.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleAboutAuthorClick = this.handleAboutAuthorClick.bind(this);

    this.allowNavigation = () => { };
  }

  componentWillReceiveProps(nextProps) {
    const { bladeManager, bladeId, course } = this.props;
    const nextCourse = nextProps.course;
    if (nextCourse.hasUnsavedChanges !== course.hasUnsavedChanges) {
      if (nextCourse.hasUnsavedChanges) {
        this.allowNavigation = bladeManager.preventNavigation(bladeId);
      } else {
        this.allowNavigation();
      }
    }
  }

  componentWillUnmount() {
    this.allowNavigation();
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

  handleBackClick() {
    this.props.bladeManager.remove(this.props.bladeId);
  }

  handleSaveClick(course) {
    this.props.actions.saveCourse(course);
  }

  handleAboutAuthorClick() {
    this.props.bladeManager.add({
      id: 'about-course-author',
      depth: 1,
      component: {
        type: AboutAuthor,
      },
    });
  }

  render() {
    const { course } = this.props;

    return (
      <Blade>
        <BladeHeader title="Edit Course" />

        <BladeToolbar>
          <BladeToolbarButton
            id="back"
            title="Back"
            iconClass="fa fa-arrow-left"
            onClick={this.handleBackClick}
          />
          <BladeToolbarButton
            id="save"
            title="Save"
            iconClass="fa fa-save"
            isEnabled={course.title.length > 0 && course.hasUnsavedChanges}
            onClick={this.handleSaveClick}
          />
          <BladeToolbarButton
            id="about-author"
            title="About Author"
            iconClass="fa fa-info"
            onClick={this.handleAboutAuthorClick}
          />
        </BladeToolbar>

        <BladeContent>
          <div style={{ padding: '0 10px' }}>
            <TextField
              floatingLabelText="Title"
              value={course.title}
              onChange={this.handleCourseTitleChange}
            />

            <TextField
              floatingLabelText="Length"
              value={course.length}
              onChange={this.handleCourseLengthChange}
            />

            <TextField
              floatingLabelText="Category"
              value={course.category}
              onChange={this.handleCourseCategoryChange}
            />
          </div>
        </BladeContent>
      </Blade>
    );
  }
}

EditCourse.propTypes = propTypes;

const mapStateToProps = state => ({
  course: state.course,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(courseActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCourse);
