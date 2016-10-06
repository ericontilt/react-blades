export default class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  addListener(event, fn) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(fn);
    return () => {
      this.listeners = this.listeners[event].filter((l) => l !== fn);
    };
  }

  trigger(event, ...args) {
    if (!this.listeners[event]) return;
    this.listeners[event].forEach((fn) => {
      fn(...args);
    });
  }
}
