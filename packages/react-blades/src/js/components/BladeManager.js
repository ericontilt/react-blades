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
    if (!blade) {
      return;
    }
    if (!blade.id) {
      throw new Error('A blade id is mandatory.');
    }
    this.blades[blade.id] = Object.assign({}, defaultBladeProps, blade);
    this._recalculateDimensions();
    this.trigger('render');
  }

  remove(id) {
    this.blades[id] = null;
    delete this.blades[id];
    this._recalculateDimensions();
    this.trigger('render');
  }

  activate(id) {
    Object.keys(this.blades).forEach(key => (this.blades[key].isActive = false));
    this.blades[id].isActive = true;
    this.trigger('render');
  }

  getVisible() {
    // TODO: Return an immutable structure here
    return this._getVisibleBlades();
  }

  _getAllBlades() {
    return Object.keys(this.blades).map(id => this.blades[id]);
  }

  _getVisibleBlades() {
    const explicitVisible = this._getAllBlades().filter(blade => blade.isVisible);
    let i = -1;
    for (i = explicitVisible.length - 1; i >= 0; i -= 1) {
      if (explicitVisible[i].depth > 0) {
        break;
      }
    }
    if (i > -1) {
      return explicitVisible.slice(i, explicitVisible.length);
    }
    return explicitVisible;
  }

  _recalculateDimensions() {
    const visibleBlades = this._getVisibleBlades();
    let left = 0;
    for (let i = 0; i < visibleBlades.length; i += 1) {
      visibleBlades[i].left = left;
      left += visibleBlades[i].width;
    }
  }
}
