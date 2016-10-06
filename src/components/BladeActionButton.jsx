import React, { PropTypes } from 'react';
import cx from 'classnames';

const propTypes = {
  action: PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
    iconClass: PropTypes.string,
    isEnabled: PropTypes.bool,
    isToggled: PropTypes.bool,
    badge: PropTypes.number,
    getTooltip: PropTypes.func,
  }),
};

const BladeActionButton = ({ action }) => {
  const isEnabled = action.isEnabled !== undefined ? action.isEnabled : true;
  const isToggled = action.isToggled !== undefined ? action.isToggles : false;

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
      action.callback(e);
    };
  }

  const title = !isEnabled && typeof action.getTooltip === 'function'
    ? action.getTooltip()
    : null;

  return (
    <li>
      <a
        className={cx(buttonClasses)}
        onClick={clickHandler}
        title={title}
      >
        <div className={action.iconClass}>
          {action.badge !== undefined ? <span className="badge">{action.badge}</span> : null}
        </div>
        <div className="title">{action.title}</div>
      </a>
    </li>
  );
};

BladeActionButton.propTypes = propTypes;

export default BladeActionButton;
