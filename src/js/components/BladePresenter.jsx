import React from 'react';
import PropTypes from 'prop-types';
import BladeContainer from './BladeContainer';

const contextTypes = {
  bladeManager: PropTypes.object.isRequired,
  bladeTheme: PropTypes.object.isRequired,
};

const styles = {
  root: {
    height: '100%',
    width: '100%',
    overflowX: 'auto',
    overflowY: 'hidden',
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'row',
  },
};

const BladePresenter = (_, { bladeManager, bladeTheme }) => {
  const bladePresenterStyle = {
    ...styles.root,
    fontFamily: bladeTheme.bladePresenter.fontFamily,
  };

  const scrollTo = x => document.getElementsByClassName('BladePresenter')[0].scrollTo(x, 0);

  return (
    <div className="BladePresenter" style={bladePresenterStyle}>
      {bladeManager.getAll().map((blade, i) => (
        <BladeContainer
          bladeManager={bladeManager}
          index={i}
          key={blade.id}
          bladeTheme={bladeTheme}
          scroll={scrollTo}
          {...blade}
        />
      ))}
    </div>
  );
};

export default BladePresenter;

BladePresenter.contextTypes = contextTypes;
