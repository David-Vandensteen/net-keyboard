import { emitKeypressEvents } from 'readline';
import { EventEmitter } from 'events';
import { log } from 'custom-console-log';

export default class Keyboard extends EventEmitter {
  constructor() {
    super();
    this.stdin = process.stdin;
    this.ctrlCKey = 'c';
  }

  start() {
    emitKeypressEvents(this.stdin);
    if (this.stdin.setRawMode) this.stdin.setRawMode(this.true);
    this.stdin.on('keypress', this.handleKeyPress.bind(this));
  }

  stop() {
    this.stdin.removeListener('keypress', this.handleKeyPress);
    process.exit(0);
  }

  handleKeyPress(str, keypressing) {
    log.dev(keypressing);
    this.emit('keypress', keypressing);
    if (keypressing.ctrl && keypressing.name === this.ctrlCKey) this.stop();
  }
}

export { Keyboard };
