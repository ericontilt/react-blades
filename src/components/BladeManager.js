import EventEmitter from '../utils/EventEmitter';

const blades = {};
const eventEmitter = new EventEmitter();

export default class {
  addListener(event, fn) {
    return eventEmitter.addListener(event, fn);
  }

  addBlade(blade) {
    if (!blade || blades[blade.id]) {
      return;
    }
    blades[blade.id] = blade;
    eventEmitter.trigger('render');
  }

  removeBlade(id) {
    blades[id] = null;
    delete blades[id];
    eventEmitter.trigger('render');
  }

  getAll() {
    // TODO: Return an immutable structure here
    return Object.keys(blades).map((id) => blades[id]);
  }
}
