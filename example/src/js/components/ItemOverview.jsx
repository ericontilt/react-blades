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

  const items = [];
  for(let i = 1; i <= 10; i++) {
    items.push(<li className="item" key={i}>{`Item ${i}`}</li>);
  }

  return (
    <Blade
      title="Items"
      actions={actions}
      customOverlays={overlays}
    >
      <ul className="items-list">
        {items}
      </ul>
    </Blade>
  );
};

export default ItemOverview;
