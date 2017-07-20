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
    this.bladesPreventingNavigation = [];
    this.navigationPreventedHandlers = [];
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
    this._resetBladeVisibility();
    this._activateById(blade.id);
    this.trigger('render');
  }

  /**
   * Removes all blades following and including the provided ID.
   * @param {*string} id The Blade ID.
   */
  remove(id) {
    if (!this._findById(id)) return;
    if (this._shouldPreventNavigation()) {
      this._notifyNavigationPrevented(this.bladesPreventingNavigation[0],
        () => this.remove(id),
      );
      return;
    }
    this._removeFromCollection(id);
    if (this.blades.length > 0) {
      this._resetBladeVisibility();
      this._activateById(this._last().id);
    }
    this.trigger('render');
  }

  back(id) {
    if (this._shouldPreventNavigation()) {
      const bladeIdToBeRemoved = this.bladesPreventingNavigation[0];
      this._notifyNavigationPrevented(bladeIdToBeRemoved,
        () => this.back(id),
      );
      return;
    }
    if (id) {
      const end = Math.min(this.blades.findIndex(b => b.id === id) + 1, this.blades.length);
      this.blades = this.blades.slice(0, end);
    } else {
      this.blades = this.blades.slice(0, this.blades.length - 1);
    }
    this._resetBladeVisibility();
    this._activateById(id);
    this.trigger('render');
  }

  preventNavigation(id) {
    if (this.bladesPreventingNavigation.indexOf(id) <= 0) {
      this.bladesPreventingNavigation.splice(0, 0, id);
    }
    return () => this.bladesPreventingNavigation.splice(this.bladesPreventingNavigation.indexOf(id), 1);
  }

  subscribeNavigationPrevented(fn) {
    this.navigationPreventedHandlers.push(fn);
    return () => this.navigationPreventedHandlers.splice(this.navigationPreventedHandlers.indexOf(fn), 1);
  }

  getAll() {
    return this.blades.slice(0);
  }

  getVisible() {
    return this.blades.filter(x => x.isVisible);
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

  _resetBladeVisibility() {
    const bladeWithDepth = [].concat(this.blades).reverse().find(b => b.depth > 0);
    if (bladeWithDepth) {
      this.blades.forEach(b => b.isVisible = false); //eslint-disable-line
      this.blades.slice(this.blades.indexOf(bladeWithDepth)).forEach(b => b.isVisible = true); //eslint-disable-line
    } else {
      this.blades.forEach(b => b.isVisible = true); //eslint-disable-line
    }
  }

  _shouldPreventNavigation() {
    return this.bladesPreventingNavigation.length > 0;
  }

  _notifyNavigationPrevented(id, originalFn) {
    this.navigationPreventedHandlers.forEach(h => h(id, originalFn));
  }
}
