import EventEmitter from '../utils/EventEmitter';

const defaultBladeProps = {
  isVisible: true,
  width: 300,
  isActive: true,
};

const blades = {};
const eventEmitter = new EventEmitter();

const getAllBlades = () =>
  Object.keys(blades)
    .map(id => blades[id]);

const getVisibleBlades = () =>
  getAllBlades()
    .filter(blade => blade.isVisible);

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
    if (!blade || blades[blade.id]) {
      return;
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

  getAll() {
    // TODO: Return an immutable structure here
    return getAllBlades();
  }
}
