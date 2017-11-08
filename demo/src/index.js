import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import { BladeManager, BladeProvider, BladePresenter, getBladeTheme } from '../../index';

import './index.css';
import configureStore from './store/configureStore';
import { loadCourses } from './actions/courseActions';
import CourseList from './components/CourseList';

const store = configureStore();
store.dispatch(loadCourses());

// $color1: rgba(202, 210, 197, 1);
// $color2: rgba(132, 169, 140, 1);
// $color3: rgba(82, 121, 111, 1);
// $color4: rgba(53, 79, 82, 1);
// $color5: rgba(47, 62, 70, 1);

const bladeTheme = getBladeTheme({
  bladeContainer: {
    backgroundColor: 'rgba(202, 210, 197, 1)',
  },
  bladeHeader: {
    titleBackgroundColor: 'rgba(47, 62, 70, 1)',
  },
  bladeToolbar: {
    backgroundColor: 'rgba(53, 79, 82, 1)',
  },
  bladeToolbarButton: {
    backgroundColor: 'rgba(53, 79, 82, 1)',
    iconColor: 'white',
    iconFontSize: '14px',
    textColor: 'white',
  },
});

const bladeManager = new BladeManager({
  orientation: 'horizontal',
});

bladeManager.add({
  id: 'item-overview',
  component: {
    type: CourseList,
  },
});

const render = (dialogOptions = {}) => {
  ReactDOM.render(
    <ReduxProvider store={store}>
      <MuiThemeProvider>
        <div style={{ width: '100%', height: '100%' }}>
          <BladeProvider bladeManager={bladeManager} bladeTheme={bladeTheme}>
            <BladePresenter />
          </BladeProvider>
          <Dialog
            title="UNSAVED CHANGES"
            actions={dialogOptions.actions || []}
            modal={true}
            open={dialogOptions.open || false}
            onRequestClose={dialogOptions.handleClose}
          >
            You have some unsaved changes.
        </Dialog>
        </div>
      </MuiThemeProvider>
    </ReduxProvider>,
    document.getElementById('root'));
};

bladeManager.on('navigationPrevented', ({ id, navigate }) => {
  const handleClose = discard => {
    render({ open: false });
    if (discard) {
      bladeManager.allowNavigation(id);
      navigate();
    }
  };
  render({
    open: true,
    actions: [
      <FlatButton
        label="Go to Changes"
        primary={true}
        keyboardFocused={true}
        onClick={() => handleClose(false)}
      />,
      <FlatButton
        label="Discard Changes"
        primary={true}
        onClick={() => handleClose(true)}
      />,
    ],
  });
})

render();
