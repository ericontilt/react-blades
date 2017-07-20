import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
// import attachClickHandler from '../utils/attachClickHandler';
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
  isVisible: PropTypes.bool,
  bladeTheme: PropTypes.object.isRequired,
};
const defaultProps = {
  isActive: false,
  isVisible: true,
};

const defaultZIndex = 1;

const styles = {
  root: {
    height: '100%',
    float: 'left',
    whiteSpace: 'normal',
  },
};

export default class BladeContainer extends React.Component {
  componentDidMount() {
    // this.bladeClickListener = attachClickHandler(this.blade,
    //   () => this.props.bladeManager.activate(this.props.id),
    // );
    // this.props.bladeManager.activate(this.props.id);
    // window.scrollTo(this.props.left, 0);
  }

  componentWillUnmount() {
    // this.bladeClickListener.remove();
  }

  render() {
    const { bladeTheme } = this.props;
    const bladeContainerStyle = {
      ...styles.root,
      backgroundColor: bladeTheme.bladeContainer.backgroundColor,
      borderRight: `1px solid ${bladeTheme.bladeContainer.borderColor}`,
      fontSize: bladeTheme.bladeContainer.fontSize,
      zIndex: defaultZIndex + this.props.index,
    };
    if (isNumber(this.props.width)) {
      bladeContainerStyle.width = this.props.width;
    } else {
      // handles width = 'auto' in case of vertical orientation
      bladeContainerStyle.width = '100%';
    }
    if (!this.props.isVisible) {
      bladeContainerStyle.display = 'none';
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
      <section ref={(c) => { this.blade = c; }} className={cx(bladeClasses)} style={bladeContainerStyle}>
        {child}
      </section>
    );
  }
}

BladeContainer.propTypes = propTypes;
BladeContainer.defaultProps = defaultProps;
