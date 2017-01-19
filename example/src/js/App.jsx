import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BladeManager, BladeProvider, BladePresenter } from '../../../index';
import '../css/main.css';
import '../../../lib/css/_blades.css';
import configureStore from './store/configureStore';
import { loadCourses } from './actions/courseActions.js';
import CourseList from './components/CourseList';

const store = configureStore();
store.dispatch(loadCourses());

const bladeManager = new BladeManager();

bladeManager.add({
  id: 'item-overview',
  isVisible: true,
  component: {
    type: CourseList,
  },
});

ReactDOM.render(
  <ReduxProvider store={store}>
    <BladeProvider blades={bladeManager}>
      <BladePresenter />
    </BladeProvider>
  </ReduxProvider>,
  document.getElementById('app'));
