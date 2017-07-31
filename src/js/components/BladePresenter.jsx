import React from 'react';
import PropTypes from 'prop-types';
import BladeContainer from './BladeContainer';

const contextTypes = {
  bladeManager: PropTypes.object.isRequired,
  bladeTheme: PropTypes.object.isRequired,
};

const styles = {
  root: {
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
};

const BladePresenter = (_, { bladeManager, bladeTheme }) => {
  const bladePresenterStyle = {
    ...styles.root,
    fontFamily: bladeTheme.bladePresenter.fontFamily,
  };

  return (
    <div className="BladePresenter" style={bladePresenterStyle}>
      {bladeManager.getAll().map((blade, i) => (
        <BladeContainer
          bladeManager={bladeManager}
          index={i}
          key={blade.id}
          bladeTheme={bladeTheme}
          {...blade}
        />
      ))}
    </div>
  );
};

export default BladePresenter;

BladePresenter.contextTypes = contextTypes;
