import React from 'react';
import cx from 'classnames';

import BladeToolbarButtonPropShape from '../shapes/BladeToolbarButtonPropShape';

const propTypes = BladeToolbarButtonPropShape;
const defaultProps = {
  title: '',
  onClick: () => {},
  iconClass: '',
  isEnabled: true,
  width: 65,
  height: 50,
  tooltip: null,
};

const BladeToolbarButton = ({
  id,
  title,
  onClick,
  iconClass,
  isEnabled,
  width,
  height,
  tooltip,
}) => {
  const modifiersForButton = [];
  if (!isEnabled) modifiersForButton.push('disabled');

  let clickHandler = null;
  if (isEnabled) {
    clickHandler = (e) => {
      if (e) e.preventDefault();
      onClick(e, { id });
    };
  }

  return (
    <li className="BladeToolbarButton">
      <button
        className={cx({
          BladeToolbarButton__button: true,
        }, modifiersForButton.map(mod => `BladeToolbarButton__button--${mod}`))}
        onClick={clickHandler}
        title={tooltip}
        style={{ width, height }}
      >
        <i className={iconClass} />
        <div className="BladeToolbarButton_title">{title}</div>
      </button>
    </li>
  );
};

BladeToolbarButton.propTypes = propTypes;
BladeToolbarButton.defaultProps = defaultProps;

export default BladeToolbarButton;
