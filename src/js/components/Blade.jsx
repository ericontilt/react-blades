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

const styles = {
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
};

const Blade = ({ children, className }) => (
  <div className={`Blade ${className}`} style={styles.root}>
    {children}
  </div>
);

export default Blade;

Blade.propTypes = propTypes;
Blade.defaultProps = defaultProps;
