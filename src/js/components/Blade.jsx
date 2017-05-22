import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

const defaultProps = {
  children: [],
  className: '',
};

const Blade = ({ children, className }) => (
  <div className={`Blade ${className}`}>
    {children}
  </div>
);

export default Blade;

Blade.propTypes = propTypes;
Blade.defaultProps = defaultProps;
