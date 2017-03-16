import React, { PropTypes } from 'react';

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
const defaultProps = {
  title: null,
  children: null,
};

const BladeHeader = ({ title, children }) => (
  <header className="BladeHeader">
    {
      children || <h1 className="BladeHeader__title">{title}</h1>
    }
  </header>
);

export default BladeHeader;

BladeHeader.propTypes = propTypes;
BladeHeader.defaultProps = defaultProps;
