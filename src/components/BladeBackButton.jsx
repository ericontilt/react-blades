import React, { PropTypes } from 'react';

const propTypes = {
  onBackClick: PropTypes.func,
};

const defaultProps = {
  onBackClick() {},
};

const BladeBackButton = ({ onBackClick }) => (
  <a className="blade-back-button" onClick={onBackClick}>
    <i className="bordered-icon ion-android-arrow-back" />
  </a>
);

BladeBackButton.propTypes = propTypes;
BladeBackButton.defaultProps = defaultProps;

export default BladeBackButton;
