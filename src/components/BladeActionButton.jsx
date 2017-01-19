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
  const modifiersForButton = [];
  if (isToggled) modifiersForButton.push('toggled');
  if (!isEnabled) modifiersForButton.push('disabled');

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
      <button
        className={cx({
          BladeActionButton__button: true,
        }, modifiersForButton.map(mod => `BladeActionButton__button--${mod}`))}
        onClick={clickHandler}
        title={tooltip}
      >
        <i className={iconClass}>
          {badge !== undefined ? <span className="badge">{badge}</span> : null}
        </i>
        <div className="BladeActionButton_title">{title}</div>
      </button>
    </li>
  );
};

BladeActionButton.propTypes = propTypes;
BladeActionButton.defaultProps = defaultProps;

export default BladeActionButton;
