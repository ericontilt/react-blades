import React, { PropTypes } from 'react';

import BladeActionButton from './BladeActionButton';

const propTypes = {
  title: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  scroll: PropTypes.oneOf(['x', 'y', 'xy', 'hidden']),
};

const defaultProps = {
  title: '',
  actions: [],
  children: [],
  scroll: 'y',
  className: '',
};

const getScrollStyle = (scroll) => {
  const style = {
    overflowX: 'hidden',
    overflowY: 'hidden',
  };
  switch (scroll) {
    case 'y':
      style.overflowY = 'auto';
      break;
    case 'x':
      style.overflowX = 'auto';
      break;
    case 'xy':
      style.overflowX = 'auto';
      style.overflowY = 'auto';
      break;
    case 'hidden':
      break;
    default:
      style.overflowY = 'auto';
      break;
  }
  return style;
};

export default class Blade extends React.Component {
  renderActions() {
    return this.props.actions.map(action => <BladeActionButton key={action.id} {...action} />);
  }

  render() {
    const bladeStyle = Object.assign({}, getScrollStyle(this.props.scroll));

    return (
      <div className={`Blade ${this.props.className}`} style={{ position: 'relative', width: '100%', height: '100%' }}>
        <header className="Blade__header">
          <h1>{this.props.title}</h1>
        </header>
        <div className="Blade__actions">
          <ul>
            {this.renderActions()}
          </ul>
        </div>
        <div className="Blade__content">
          <div className="Blade__contentContainer" style={bladeStyle}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Blade.propTypes = propTypes;
Blade.defaultProps = defaultProps;
