import { EventEmitter } from 'events';
import { Keyboard } from '#src/lib/keyboard';
import { server as Server } from 'netcat';
import decode from '#src/lib/decode';

const { log } = console;

export default class ServerService extends EventEmitter {
  #port;

  constructor({ port } = {}) {
    super();
    this.#port = port;
  }

  #localServe() {
    log('net-keyboard local mode');

    new Keyboard()
      .on('keypress', (key) => {
        this.emit('data', key);
      })
      .start();

    return this;
  }

  #networkServe() {
    new Server()
      .port(this.#port)
      .listen()
      .on('data', (socket, data) => {
        decode(data)
          .forEach((message) => {
            this.emit('data', message);
          });
      });

    log('net-keyboard serve from port', this.#port);
    return this;
  }

  serve() {
    if (this.#port) this.#networkServe();
    else this.#localServe();
  }
}

export { ServerService };
