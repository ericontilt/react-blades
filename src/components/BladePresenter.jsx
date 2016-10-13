import React, { PropTypes } from 'react';
import BladeContainer from './BladeContainer';

const contextTypes = {
  blades: PropTypes.object.isRequired,
};

const BladePresenter = (_, { blades }) => (
  <div className="blade-presenter">
    {blades.getVisible().map((blade, i) => (
      <BladeContainer
        blades={blades}
        index={i}
        key={blade.id}
        {...blade}
      />
    ))}
  </div>
);

export default BladePresenter;

BladePresenter.contextTypes = contextTypes;
