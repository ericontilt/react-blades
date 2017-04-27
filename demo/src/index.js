import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { BladeManager, BladeProvider, BladePresenter } from '../../index';

import './index.css';
import configureStore from './store/configureStore';
import { loadCourses } from './actions/courseActions';
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
    <BladeProvider bladeManager={bladeManager}>
      <BladePresenter />
    </BladeProvider>
  </ReduxProvider>,
  document.getElementById('root'));
