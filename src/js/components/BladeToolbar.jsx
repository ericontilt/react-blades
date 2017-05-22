import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  height: PropTypes.number,
  children: PropTypes.any,
};
const defaultProps = {
  height: 50,
  children: [],
};

const BladeToolbar = ({ height, children }) => (
  <div className="BladeToolbar" style={{ height, lineHeight: `${height}px` }}>
    <ul>
      {children}
    </ul>
  </div>
);

export default BladeToolbar;

BladeToolbar.propTypes = propTypes;
BladeToolbar.defaultProps = defaultProps;
