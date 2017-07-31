import React from 'react';
import PropTypes from 'prop-types';

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

const contextTypes = {
  bladeTheme: PropTypes.object.isRequired,
};

const styles = {
  root: {
    position: 'relative',
  },
  title: {
    padding: '0 10px',
    margin: 0,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
};

const BladeHeader = ({ title, height, children }, { bladeTheme }) => {
  const { bladeHeader } = bladeTheme;
  const rootStyle = {
    ...styles.root,
    backgroundColor: bladeHeader.backgroundColor,
    color: bladeHeader.textColor,
    height,
    verticalAlign: 'middle',
    lineHeight: `${height}px`,
  };
  const titleStyle = {
    ...styles.title,
    lineHeight: `${height}px`,
    backgroundColor: bladeHeader.titleBackgroundColor,
  };
  return (
    <header className="BladeHeader" style={rootStyle}>
      {
        children || <h1 className="BladeHeader__title" style={titleStyle}>{title}</h1>
      }
    </header>
  );
};

export default BladeHeader;

BladeHeader.propTypes = propTypes;
BladeHeader.defaultProps = defaultProps;
BladeHeader.contextTypes = contextTypes;
