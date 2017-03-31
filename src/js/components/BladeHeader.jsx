import React, { PropTypes } from 'react';

const propTypes = {
  title: PropTypes.string,
  height: PropTypes.number,
  children: PropTypes.any,
};
const defaultProps = {
  title: null,
  height: 40,
  children: null,
};

const BladeHeader = ({ title, height, children }) => (
  <header className="BladeHeader" style={{ height, lineHeight: `${height}px` }}>
    {
      children || <h1 className="BladeHeader__title">{title}</h1>
    }
  </header>
);

export default BladeHeader;

BladeHeader.propTypes = propTypes;
BladeHeader.defaultProps = defaultProps;
