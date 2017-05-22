import React from 'react';
import PropTypes from 'prop-types';
import BladeContainer from './BladeContainer';

const contextTypes = {
  bladeManager: PropTypes.object.isRequired,
};

const BladePresenter = (_, { bladeManager }) => (
  <div className="BladePresenter">
    {bladeManager.getVisible().map((blade, i) => (
      <BladeContainer
        bladeManager={bladeManager}
        index={i}
        key={blade.id}
        {...blade}
      />
    ))}
  </div>
);

export default BladePresenter;

BladePresenter.contextTypes = contextTypes;
