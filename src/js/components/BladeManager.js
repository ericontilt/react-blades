/* eslint-disable no-underscore-dangle */
import EventEmitter from '../utils/EventEmitter';
import { isNumber } from '../utils/fn';

const defaultBladeProps = {
  isVisible: true,
  isActive: true,
  width: 300,
  depth: 0,
};

export default class BladeManager extends EventEmitter {
  constructor(options) {
    super();
    this.options = {
      ...options,
    };
    this.blades = [];
  }

  add(blade) {
    if (!blade || !blade.id) {
      throw new Error('A blade with an ID is mandatory.');
    }
    if (this._findById(blade.id)) {
      throw new Error(`Blade with ID=${blade.id} already exists.`);
    }
    if (blade.width && !isNumber(blade.width)) {
      throw new Error('Blade width must be a numerical value');
    }
    this._addToCollection(blade);
    this._activateById(blade.id);
    this.trigger('render');
  }

  remove(id) {
    if (!this._findById(id)) return;
    this._removeFromCollection(id);
    if (this.blades.length > 0) {
      this._activateById(this._last().id);
    }
    this.trigger('render');
  }

  activate(id) {
    this._activateById(id);
    this.trigger('render');
  }

  back(id) {
    if (id) {
      const end = Math.min(this.blades.findIndex(b => b.id === id) + 1, this.blades.length);
      this.blades = this.blades.slice(0, end);
    } else {
      this.blades = this.blades.slice(0, this.blades.length - 1);
    }
  }

  getVisible() {
    return this._getVisibleBlades();
  }

  _last() {
    return this.blades[this.blades.length - 1];
  }

  _findById(id) {
    return this.blades.find(b => b.id === id);
  }

  _addToCollection(blade) {
    const tmpBlade = Object.assign({}, defaultBladeProps, blade, {
      index: Object.keys(this.blades).length,
    });
    if (this.options.orientation === 'vertical') {
      tmpBlade.depth = 1;
      tmpBlade.width = '100%';
    }
    this.blades = this.blades.concat(tmpBlade);
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
}
