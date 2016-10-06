import React, { PropTypes } from 'react';
import cx from 'classnames';
import attachClickHandler from '../utils/attachClickHandler';

const propTypes = {
  blades: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  component: PropTypes.func.isRequired,   // TODO: Define shape of component
  width: PropTypes.number,
  isActive: PropTypes.bool,
  left: PropTypes.number.isRequired,
  hidden: PropTypes.bool,
  onActivate: PropTypes.func,
};

const defaultProps = {
  hidden: false,
  width: 300,
  onActivate() {},
};

const defaultZIndex = 1;

export default class BladeContainer extends React.Component {
  componentDidMount() {
    this.bladeClickListener = attachClickHandler(this.blade,
      (e) => this.props.onActivate(this.props.id, e)
    );
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
    if (this.props.hidden) {
      bladeStyle.display = 'none';
    }

    const bladeClasses = {
      'blade-container': true,
      active: this.props.isActive,
    };

    const child = React.createElement(this.props.component, {
      blades: this.props.blades,
      id: this.props.id,
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
