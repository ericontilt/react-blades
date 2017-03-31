export default class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  on(event, fn) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(fn);
    return () => {
      this.listeners[event].splice(this.listeners[event].indexOf(fn));
      // this.listeners = this.listeners[event].filter(l => l !== fn);
    };
  }

  trigger(event, ...args) {
    if (!this.listeners[event]) return;
    this.listeners[event].forEach((fn) => {
      fn(...args);
    });
  }
}
