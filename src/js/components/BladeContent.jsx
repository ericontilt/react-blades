import React, { PropTypes } from 'react';

const propTypes = {
  top: PropTypes.number,
  scroll: PropTypes.string,
  children: PropTypes.any,
};
const defaultProps = {
  top: 90,
  scroll: 'y',
  children: [],
};

const BladeContent = ({ top, scroll, children }) => {
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

  return (
    <div className="BladeContent" style={{ top }}>
      <div className="BladeContent__container" style={{ ...getScrollStyle(scroll) }}>
        {children}
      </div>
    </div>
  );
};

export default BladeContent;

BladeContent.propTypes = propTypes;
BladeContent.defaultProps = defaultProps;
