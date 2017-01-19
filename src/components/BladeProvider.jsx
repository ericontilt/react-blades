import React, { PropTypes } from 'react';
import BladeManager from './BladeManager';

const propTypes = {
  blades: PropTypes.instanceOf(BladeManager).isRequired,
  children: PropTypes.any,
};
const defaultProps = {
  children: [],
};

const childContextTypes = {
  blades: PropTypes.object,
};

export default class BladeProvider extends React.Component {
  getChildContext() {
    return {
      blades: this.props.blades,
    };
  }

  componentWillMount() {
    this.unsubscribeListener = this.props.blades.on('render', () => {
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
