import EventEmitter from '../utils/EventEmitter';

const blades = {};
const event = new EventEmitter();

export default class {
  addListener(fn) {
    return event.addListener(fn);
  }

  addBlade(blade) {
    if (!blade || blades[blade.id]) {
      return;
    }
    blades[blade.id] = blade;
    event.trigger();
  }

  removeBlade(id) {
    blades[id] = null;
    delete blades[id];
    event.trigger();
  }

  getAll() {
    // TODO: Return an immutable structure here
    return Object.keys(blades).map((id) => blades[id]);
  }
}
