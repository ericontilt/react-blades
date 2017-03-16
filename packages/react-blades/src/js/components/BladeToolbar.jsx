import React from 'react';

const propTypes = {
  children: React.PropTypes.any,
};
const defaultProps = {
  children: [],
};

const BladeToolbar = ({ children }) => (
  <div className="BladeToolbar">
    <ul>
      {children}
    </ul>
  </div>
);

export default BladeToolbar;

BladeToolbar.propTypes = propTypes;
BladeToolbar.defaultProps = defaultProps;
