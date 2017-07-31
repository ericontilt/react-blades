import React from 'react';
import PropTypes from 'prop-types';
import BladeManager from './BladeManager';
import getBladeTheme from '../styles/getBladeTheme';

const propTypes = {
  bladeManager: PropTypes.instanceOf(BladeManager).isRequired,
  bladeTheme: PropTypes.object,
  children: PropTypes.any,
};
const defaultProps = {
  children: [],
  bladeTheme: getBladeTheme(),
};

const childContextTypes = {
  bladeManager: PropTypes.object,
  bladeTheme: PropTypes.object,
};

export default class BladeProvider extends React.Component {
  getChildContext() {
    return {
      bladeManager: this.props.bladeManager,
      bladeTheme: getBladeTheme(this.props.bladeTheme),
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
