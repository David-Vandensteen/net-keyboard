import { EventEmitter } from 'events';
import { server as Server } from 'netcat';
import decode from '#src/lib/decode';

const { log } = console;

export default class ServerService extends EventEmitter {
  #port;

  constructor(port) {
    super();
    if (port === undefined) throw new Error('port is undefined');
    this.#port = port;
  }

  serve() {
    new Server()
      .port(this.#port)
      .listen()
      .on('data', (socket, data) => {
        decode(data)
          .forEach((message) => {
            this.emit('message', message);
          });
      });
    log('serve from port', this.#port);
  }
}

export { ServerService };
