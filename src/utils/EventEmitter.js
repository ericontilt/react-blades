export default class EventEmitter {
  constructor() {
    this.listeners = [];
  }

  addListener(fn) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== fn);
    };
  }

  trigger(...args) {
    this.listeners.forEach((fn) => {
      fn(...args);
    });
  }
}
