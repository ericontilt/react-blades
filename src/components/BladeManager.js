import EventEmitter from '../utils/EventEmitter';

const defaultBladeProps = {
  isVisible: true,
  isActive: true,
  width: 300,
  depth: 0,
};

const blades = {};
const eventEmitter = new EventEmitter();

const getAllBlades = () =>
  Object.keys(blades)
    .map(id => blades[id]);

const getVisibleBlades = () => {
  const explicitVisible = getAllBlades().filter(blade => blade.isVisible);
  let i = -1;
  for (i = explicitVisible.length - 1; i >= 0; i--) {
    if (explicitVisible[i].depth > 0) {
      break;
    }
  }
  if (i > -1) {
    return explicitVisible.slice(i, explicitVisible.length);
  }
  return explicitVisible;
};

const recalculateDimensions = () => {
  const visibleBlades = getVisibleBlades();
  let left = 0;
  for (let i = 0; i < visibleBlades.length; i++) {
    visibleBlades[i].left = left;
    left += visibleBlades[i].width;
  }
};

export default class {
  on(event, fn) {
    return eventEmitter.addListener(event, fn);
  }

  add(blade) {
    if (!blade) {
      return;
    }
    if (!blade.id) {
      throw new Error('A blade id is mandatory.');
    }
    blades[blade.id] = Object.assign({}, defaultBladeProps, blade);
    recalculateDimensions();
    eventEmitter.trigger('render');
  }

  remove(id) {
    blades[id] = null;
    delete blades[id];
    recalculateDimensions();
    eventEmitter.trigger('render');
  }

  activate(id) {
    Object.keys(blades).forEach(key => (blades[key].isActive = false));
    blades[id].isActive = true;
    eventEmitter.trigger('render');
  }

  getVisible() {
    // TODO: Return an immutable structure here
    return getVisibleBlades();
  }
}
