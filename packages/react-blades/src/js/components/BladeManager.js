/* eslint-disable no-underscore-dangle */
import EventEmitter from '../utils/EventEmitter';

const defaultBladeProps = {
  isVisible: true,
  isActive: true,
  width: 300,
  depth: 0,
};

export default class BladeManager extends EventEmitter {
  constructor() {
    super();
    this.blades = [];
  }

  add(blade) {
    if (!blade || !blade.id) {
      throw new Error('A blade id is mandatory.');
    }
    this._addToCollection(blade);
    this._recalculateDimensions();
    this._activateById(blade.id);
    this.trigger('render');
  }

  remove(id) {
    this._removeFromCollection(id);
    this._recalculateDimensions();
    this.trigger('render');
  }

  activate(id) {
    this._activateById(id);
    this.trigger('render');
  }

  getVisible() {
    return this._getVisibleBlades();
  }

  _addToCollection(blade) {
    this.blades = this.blades.concat(Object.assign({}, defaultBladeProps, blade, {
      index: Object.keys(this.blades).length,
    }));
  }

  _removeFromCollection(id) {
    this.blades = this.blades.slice(0, this.blades.findIndex(b => b.id === id));
  }

  _activateById(id) {
    this.blades = this.blades.map(b => Object.assign({}, b, {
      isActive: b.id === id,
    }));
  }

  _getVisibleBlades() {
    const visible = this.blades.filter(b => b.isVisible);
    const bladeWithDepth = [].concat(visible).reverse().find(b => b.depth > 0);
    if (bladeWithDepth) {
      return visible.slice(visible.indexOf(bladeWithDepth), visible.length);
    }
    return visible;
  }

  _recalculateDimensions() {
    let left = 0;
    const visibleBlades = this._getVisibleBlades();
    for (let i = 0; i < visibleBlades.length; i += 1) {
      visibleBlades[i].left = left;
      left += visibleBlades[i].width;
    }
  }
}
