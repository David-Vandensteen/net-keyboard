import { emitKeypressEvents } from 'readline';
import { EventEmitter } from 'events';

export default class Keyboard extends EventEmitter {
  constructor() {
    super();
    this.stdin = process.stdin;
    this.ctrlCKey = 'c';
    this.rawMode = true;
  }

  start() {
    emitKeypressEvents(this.stdin);
    this.stdin.setRawMode(this.rawMode);
    this.stdin.on('keypress', this.handleKeyPress.bind(this));
  }

  stop() {
    this.stdin.removeListener('keypress', this.handleKeyPress);
    process.exit(0);
  }

  handleKeyPress(str, keypressing) {
    this.emit('keypress', keypressing);
    if (keypressing.ctrl && keypressing.name === this.ctrlCKey) this.stop();
  }
}

export { Keyboard };
