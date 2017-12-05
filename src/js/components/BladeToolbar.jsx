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
const contextTypes = {
  bladeTheme: PropTypes.object.isRequired,
};

const styles = {
  root: {
    position: 'relative',
    flex: '0 0 auto',
  },
  list: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'none',
    wordWrap: 'break-word',
  },
};

const BladeToolbar = ({ height, children }, { bladeTheme }) => {
  const rootStyle = {
    ...styles.root,
    backgroundColor: bladeTheme.bladeToolbar.backgroundColor,
    height,
  };
  return (
    <div className="BladeToolbar" style={rootStyle}>
      <ul style={styles.list}>
        {children}
      </ul>
    </div>
  );
};

export default BladeToolbar;

BladeToolbar.propTypes = propTypes;
BladeToolbar.defaultProps = defaultProps;
BladeToolbar.contextTypes = contextTypes;
