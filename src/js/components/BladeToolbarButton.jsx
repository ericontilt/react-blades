import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import BladeToolbarButtonPropShape from '../shapes/BladeToolbarButtonPropShape';

const propTypes = BladeToolbarButtonPropShape;
const defaultProps = {
  title: '',
  onClick: () => { },
  iconClass: '',
  isEnabled: true,
  width: 65,
  height: 50,
  tooltip: null,
};

const style = {
  root: {
    float: 'left',
  },
  button: {
    display: 'block',
    fontSize: '11px',
    textAlign: 'center',
    textDecoration: 'none',
    padding: 0,
    margin: 0,
    lineHeight: '12px',
    border: 0,
  },
};

const contextTypes = {
  bladeTheme: PropTypes.object,
};

class BladeToolbarButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({ hovered: true });
  }

  handleMouseLeave() {
    this.setState({ hovered: false });
  }

  render() {
    const {
      isEnabled,
      onClick,
      id,
      title,
      width,
      height,
      tooltip,
      iconClass,
    } = this.props;

    const modifiersForButton = [];
    if (!isEnabled) modifiersForButton.push('disabled');
    if (this.state.hovered) modifiersForButton.push('hovered');

    let clickHandler = null;
    if (isEnabled) {
      clickHandler = (e) => {
        if (e) e.preventDefault();
        onClick(e, { id });
      };
    }

    const { bladeTheme } = this.context;
    const buttonStyle = {
      ...style.button,
      backgroundColor: bladeTheme.bladeToolbarButton[`${this.state.hovered ? 'hoveredB' : 'b'}ackgroundColor`],
      width,
      height,
      outline: 0,
    };
    const iconStyle = {
      color: bladeTheme.bladeToolbarButton[`${!isEnabled ? 'disabledColor' : 'iconColor'}`],
    };
    const titleStyle = {
      color: bladeTheme.bladeToolbarButton[`${!isEnabled ? 'disabledColor' : 'textColor'}`],
    };

    return (
      <li
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleMouseEnter}
        className="BladeToolbarButton"
        style={style.root}
      >
        <button
          className={cx({
            BladeToolbarButton__button: true,
          }, modifiersForButton.map(mod => `BladeToolbarButton__button--${mod}`))}
          onClick={clickHandler}
          title={tooltip}
          style={buttonStyle}
        >
          <i className={iconClass} style={iconStyle} />
          <div className="BladeToolbarButton_title" style={titleStyle}>{title}</div>
        </button>
      </li>
    );
  }
}

BladeToolbarButton.propTypes = propTypes;
BladeToolbarButton.defaultProps = defaultProps;
BladeToolbarButton.contextTypes = contextTypes;

export default BladeToolbarButton;
