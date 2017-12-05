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
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
    width: '100%',
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
