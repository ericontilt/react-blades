import React from 'react';
import cx from 'classnames';

import BladeActionShape from '../shapes/BladeActionShape';

const propTypes = BladeActionShape;
const defaultProps = {
  title: '',
  callback: () => {},
  iconClass: '',
  isEnabled: true,
  isToggled: false,
  badge: null,
  getTooltip: null,
};

const BladeActionButton = ({
  id,
  title,
  callback,
  iconClass,
  isEnabled,
  isToggled,
  badge,
  getTooltip,
}) => {
  const buttonClasses = {
    button: true,
    toggled: isToggled,
  };

  if (isEnabled) {
    buttonClasses.enabled = true;
  } else {
    buttonClasses.disabled = true;
  }

  let clickHandler = () => {};
  if (isEnabled) {
    clickHandler = (e) => {
      e.preventDefault();
      callback(e, { id });
    };
  }

  const tooltip = !isEnabled && typeof getTooltip === 'function'
    ? getTooltip()
    : null;

  return (
    <li className="BladeActionButton">
      <a
        className={cx(buttonClasses)}
        onClick={clickHandler}
        title={tooltip}
      >
        <div className={iconClass}>
          {badge !== undefined ? <span className="badge">{badge}</span> : null}
        </div>
        <div className="title">{title}</div>
      </a>
    </li>
  );
};

BladeActionButton.propTypes = propTypes;
BladeActionButton.defaultProps = defaultProps;

export default BladeActionButton;
