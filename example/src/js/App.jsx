import React from 'react';
import ReactDOM from 'react-dom';
import { BladeManager, BladeProvider, BladePresenter } from 'react-blades';
import 'react-blades/lib/css/_blades.css';

import ItemOverview from './components/ItemOverview';

const bladeManager = new BladeManager();

bladeManager.addBlade({
  id: 'item-overview',
  visibility: 'visible',
  component: ItemOverview,
});

ReactDOM.render(
  <BladeProvider blades={bladeManager}>
    <BladePresenter />
  </BladeProvider>,
  document.getElementById('app'));
