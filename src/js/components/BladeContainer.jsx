import React, { PropTypes } from 'react';
import cx from 'classnames';
import attachClickHandler from '../utils/attachClickHandler';

const propTypes = {
  bladeManager: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  component: PropTypes.shape({
    type: PropTypes.func.isRequired,
    props: PropTypes.object,
  }).isRequired,
  width: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
  left: PropTypes.number.isRequired,
  isVisible: PropTypes.bool,
};
const defaultProps = {
  isActive: false,
  isVisible: true,
  hidesBlade: false,
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
      width: this.props.width,
    };
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
