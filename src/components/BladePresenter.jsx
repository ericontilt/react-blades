import React, { PropTypes } from 'react';
import BladeContainer from './BladeContainer';

const contextTypes = {
  blades: PropTypes.object.isRequired,
};

export default class BladePresenter extends React.Component {
  render() {
    let left = 0;
    const blades = this.context.blades.getAll().map((blade, i) => {
      const hidden = blade.visibility === 'hidden';
      const bladeWidth = blade.width || 300;
      const bladeComp = (
        <BladeContainer
          blades={this.context.blades}
          id={blade.id}
          component={blade.component}
          width={bladeWidth}
          left={left}
          hidden={hidden}
          isActive={blade.isActive}
          index={i}
          key={blade.id}
        />
      );
      if (!hidden) {
        left += bladeWidth;
      }
      return bladeComp;
    });

    return (
      <div className="blade-presenter">
        {blades}
      </div>
    );
  }
}

BladePresenter.contextTypes = contextTypes;
