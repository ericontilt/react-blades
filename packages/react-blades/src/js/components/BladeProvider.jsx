import React, { PropTypes } from 'react';
import BladeManager from './BladeManager';

const propTypes = {
  bladeManager: PropTypes.instanceOf(BladeManager).isRequired,
  children: PropTypes.any,
};
const defaultProps = {
  children: [],
};

const childContextTypes = {
  bladeManager: PropTypes.object,
};

export default class BladeProvider extends React.Component {
  getChildContext() {
    return {
      bladeManager: this.props.bladeManager,
    };
  }

  componentWillMount() {
    this.unsubscribeListener = this.props.bladeManager.on('render', () => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribeListener();
  }

  render() {
    return this.props.children;
  }
}

BladeProvider.propTypes = propTypes;
BladeProvider.defaultProps = defaultProps;
BladeProvider.childContextTypes = childContextTypes;
