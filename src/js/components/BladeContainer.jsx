import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import attachClickHandler from '../utils/attachClickHandler';
import { isNumber } from '../utils/fn';

const propTypes = {
  bladeManager: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  component: PropTypes.shape({
    type: PropTypes.func.isRequired,
    props: PropTypes.object,
  }).isRequired,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  isActive: PropTypes.bool,
  left: PropTypes.number.isRequired,
  isVisible: PropTypes.bool,
};
const defaultProps = {
  isActive: false,
  isVisible: true,
};

const defaultZIndex = 1;

export default class BladeContainer extends React.Component {
  componentDidMount() {
    this.bladeClickListener = attachClickHandler(this.blade,
      () => this.props.bladeManager.activate(this.props.id),
    );
    this.props.bladeManager.activate(this.props.id);
    window.scrollTo(this.props.left, 0);
  }

  componentWillUnmount() {
    this.bladeClickListener.remove();
  }

  render() {
    const bladeStyle = {
      left: this.props.left,
      zIndex: defaultZIndex + this.props.index,
    };
    if (isNumber(this.props.width)) {
      bladeStyle.width = this.props.width;
    } else {
      // handles width = 'auto' in case of vertical orientation
      bladeStyle.right = 0;
    }
    if (!this.props.isVisible) {
      bladeStyle.display = 'none';
    }

    const bladeClasses = {
      BladeContainer: true,
      active: this.props.isActive,
    };

    const child = React.createElement(
      this.props.component.type, {
        bladeManager: this.props.bladeManager,
        bladeId: this.props.id,
        ...this.props.component.props,
      });

    return (
      <section ref={(c) => { this.blade = c; }} className={cx(bladeClasses)} style={bladeStyle}>
        {child}
      </section>
    );
  }
}

BladeContainer.propTypes = propTypes;
BladeContainer.defaultProps = defaultProps;
