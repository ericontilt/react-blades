import React from 'react';
import cx from 'classnames';

import BladeActionShape from '../shapes/BladeActionShape';

const propTypes = BladeActionShape;
const defaultProps = {
  title: '',
  onClick: () => {},
  iconClass: '',
  isEnabled: true,
  isToggled: false,
  tooltip: null,
};

const BladeActionButton = ({
  id,
  title,
  onClick,
  iconClass,
  isEnabled,
  isToggled,
  tooltip,
}) => {
  const modifiersForButton = [];
  if (isToggled) modifiersForButton.push('toggled');
  if (!isEnabled) modifiersForButton.push('disabled');

  let clickHandler = () => {};
  if (isEnabled) {
    clickHandler = (e) => {
      if (e) e.preventDefault();
      onClick(e, { id });
    };
  }

  return (
    <li className="BladeActionButton">
      <button
        className={cx({
          BladeActionButton__button: true,
        }, modifiersForButton.map(mod => `BladeActionButton__button--${mod}`))}
        onClick={clickHandler}
        title={tooltip}
      >
        <i className={iconClass} />
        <div className="BladeActionButton_title">{title}</div>
      </button>
    </li>
  );
};

BladeActionButton.propTypes = propTypes;
BladeActionButton.defaultProps = defaultProps;

export default BladeActionButton;
