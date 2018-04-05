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
  },
  flexWrapper: {
    height: '100%',
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

  const scrollTo = blade => blade.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="BladePresenter" style={bladePresenterStyle}>
      <div style={styles.flexWrapper}>
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
    </div>
  );
};

export default BladePresenter;

BladePresenter.contextTypes = contextTypes;
