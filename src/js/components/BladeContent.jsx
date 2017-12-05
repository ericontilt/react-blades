import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  scroll: PropTypes.string,
  children: PropTypes.any,
};
const defaultProps = {
  scroll: 'y',
  children: [],
};

const styles = {
  root: {
    padding: 0,
    overflowY: 'auto',
    overflowX: 'hidden',
    flex: '1 0 auto',
    zIndex: 1,
    position: 'relative',
  },
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
};

const BladeContent = ({ scroll, children }) => {
  const getScrollStyle = (s) => {
    const scrollStyle = {
      overflowX: 'hidden',
      overflowY: 'hidden',
    };
    switch (s) {
      case 'y':
        scrollStyle.overflowY = 'auto';
        break;
      case 'x':
        scrollStyle.overflowX = 'auto';
        break;
      case 'xy':
        scrollStyle.overflowX = 'auto';
        scrollStyle.overflowY = 'auto';
        break;
      case 'hidden':
        break;
      default:
        scrollStyle.overflowY = 'auto';
        break;
    }
    return scrollStyle;
  };

  const rootStyle = {
    ...styles.root,
    top,
  };

  const containerStyle = {
    ...styles.container,
    ...getScrollStyle(scroll),
  };

  return (
    <div className="BladeContent" style={rootStyle}>
      <div className="BladeContent__container" style={containerStyle}>
        {children}
      </div>
    </div>
  );
};

export default BladeContent;

BladeContent.propTypes = propTypes;
BladeContent.defaultProps = defaultProps;
