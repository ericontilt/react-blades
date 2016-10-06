import React from 'react';
import { Blade } from 'react-blades';
import ItemDetails from './ItemDetails';

const ItemOverview = ({ blades }) => {
  const actions = [{
    key: 'new-item',
    title: 'New',
    iconClass: 'fa fa-plus',
    callback: () => {
      blades.addBlade({
        id: 'item-details',
        visibility: 'visible',
        width: 500,
        component: ItemDetails,
      })
    },
  }, {
    key: 'refresh-items',
    title: 'Refresh',
    iconClass: 'fa fa-refresh',
    callback: () => {},
  }]

  const overlays = [{
    show: false,
    content: <p>Presenting overlay</p>,
  }]

  return (
    <Blade
      title="Items"
      actions={actions}
      customOverlays={overlays}
    >
      <ul>
        <li>Item1
        </li>
        <li>Item2
        </li>
        <li>Item3
        </li>
        <li>Item4
        </li>
        <li>Item5
        </li>
      </ul>
    </Blade>
  );
};

export default ItemOverview;
