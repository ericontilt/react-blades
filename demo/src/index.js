import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { BladeManager, BladeProvider, BladePresenter, getBladeTheme } from '../../index';

import './index.css';
import configureStore from './store/configureStore';
import { loadCourses } from './actions/courseActions';
import CourseList from './components/CourseList';

const store = configureStore();
store.dispatch(loadCourses());

const bladeTheme = getBladeTheme({
  bladeHeader: {
    titleBackgroundColor: 'blue',
  },
  bladeToolbar: {
    backgroundColor: 'lightblue',
  },
  bladeToolbarButton: {
    iconColor: 'red',
    textColor: 'pink',
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

ReactDOM.render(
  <ReduxProvider store={store}>
    <BladeProvider bladeManager={bladeManager} bladeTheme={bladeTheme}>
      <BladePresenter />
    </BladeProvider>
  </ReduxProvider>,
  document.getElementById('root'));
