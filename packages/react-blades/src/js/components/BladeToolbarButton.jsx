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

const BladeToolbarButton = ({
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
    <li className="BladeToolbarButton">
      <button
        className={cx({
          BladeToolbarButton__button: true,
        }, modifiersForButton.map(mod => `BladeToolbarButton__button--${mod}`))}
        onClick={clickHandler}
        title={tooltip}
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
