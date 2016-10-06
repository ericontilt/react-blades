import React, { PropTypes } from 'react';
import cx from 'classnames';

import BladeBackButton from './BladeBackButton';
import BladeActionButton from './BladeActionButton';

const propTypes = {
  title: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.object),
  customOverlays: PropTypes.arrayOf(PropTypes.shape({
    show: PropTypes.bool,
    content: PropTypes.any,
  })),
  isLoading: PropTypes.bool,
  hasPendingChanges: PropTypes.bool,
  bladeKey: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  scroll: PropTypes.oneOf(['x', 'y', 'xy', 'hidden']),
  spinner: PropTypes.object,   // the loading spinner
};

const defaultProps = {
  scroll: 'y',
};

const getScrollStyle = scroll => {
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

const getNewState = (newOverlayCount) => {
  const state = { overlayHasContent: false };

  if (newOverlayCount > 0) {
    state.overlayHasContent = true;
  } else {
    state.overlayHasContent = false;
  }

  return state;
};

const getOverlayCountFromProps = (props) => {
  let overlayCount = 0;
  if (props.isLoading === true) {
    overlayCount++;
  }
  if (props.customOverlays && props.customOverlays.length > 0) {
    overlayCount += props.customOverlays.filter((o) => o.show).length;
  }
  return overlayCount;
};

export default class Blade extends React.Component {
  constructor(props) {
    super(props);

    const calculatedState = getNewState(getOverlayCountFromProps(this.props));
    this.state = {
      overlayHasContent: calculatedState.overlayHasContent,
      // shouldShowBackButton: BladeStore.shouldShowBackButton(this.props.bladeKey),
    };

    this.onStoreChanged = this.onStoreChanged.bind(this);
    // this.onOverlayLeft = this.onOverlayLeft.bind(this);
    this.onBackButtonClicked = this.onBackButtonClicked.bind(this);
  }

  componentDidMount() {
    // BladeStore.addChangeListener(this.onStoreChanged);
  }

  componentWillReceiveProps(nextProps) {
    const newOverlayCount = getOverlayCountFromProps(nextProps);
    this.setState(getNewState(newOverlayCount));
  }

  componentWillUnmount() {
    // BladeStore.removeChangeListener(this.onStoreChanged);
  }

  onStoreChanged() {
    this.setState({
      overlayHasContent: getOverlayCountFromProps(this.props) > 0,
      // shouldShowBackButton: BladeStore.shouldShowBackButton(this.props.bladeKey),
    });
  }

  onBackButtonClicked() {
    // BladeActions.back(this.props.bladeKey);
  }

  renderBackButton() {
    if (this.props.bladeKey && this.state.shouldShowBackButton) {
      return <BladeBackButton onBackClick={this.onBackButtonClicked} />;
    }
    return null;
  }

  renderTitle() {
    const title = this.props.hasPendingChanges ? `${this.props.title}*` : this.props.title;
    return (
      <h1>{title}</h1>
    );
  }

  renderActions() {
    let renderedActions = null;
    const { actions } = this.props;
    if (actions && actions.length > 0) {
      renderedActions = actions.map((action, i) => <BladeActionButton key={i} action={action} />);
    }
    return renderedActions;
  }

  renderOverlays() {
    const overlays = [];

    if (this.props.isLoading === true) {
      overlays.push(
        <div className="blade-overlay-loading" key="overlay-loading">
          {this.props.spinner}
        </div>
      );
    }

    if (this.props.customOverlays && this.props.customOverlays.length > 0) {
      this.props.customOverlays.forEach((overlay, i) => {
        if (overlay && overlay.show) {
          overlays.push(<div key={i}>{overlay.content}</div>);
        }
      });
    }

    if (overlays.length > 0) {
      const backdropClasses = {
        'blade-overlay-backdrop': true,
        'blade-overlay-backdrop-cover-actions': true,
      };
      overlays.push(<div className={cx(backdropClasses)} key="overlay-backdrop" />);
    }

    return overlays;
  }

  render() {
    const overlayContainerClasses = {
      'blade-overlay-container': true,
      'has-content': this.state.overlayHasContent,
    };

    const bladeStyle = Object.assign({}, getScrollStyle(this.props.scroll));

    return (
      <div className="blade" style={{ position: 'relative', width: '100%', height: '100%' }}>
        <header className="blade-header">
          {this.renderBackButton()}
          {this.renderTitle()}
          <ul className="blade-actions">
            {this.renderActions()}
          </ul>
        </header>
        <div className={cx(overlayContainerClasses)}>
          {this.renderOverlays()}
        </div>
        <div className="blade-content" style={bladeStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Blade.propTypes = propTypes;
Blade.defaultProps = defaultProps;
