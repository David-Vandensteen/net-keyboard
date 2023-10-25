/* eslint-disable lines-between-class-members */
import { client as Client } from 'netcat';
import { Keyboard } from '#src/lib/keyboard';
import encode from '#src/lib/encode';

const { log } = console;

export default class ClientService {
  #host;
  #port;
  #netcatClient;

  constructor(host, port) {
    if (host === undefined) throw new Error('host is undefined');
    if (port === undefined) throw new Error('port is undefined');
    this.#host = host;
    this.#port = port;
  }

  connect() {
    this.#netcatClient = new Client()
      .addr(this.#host)
      .port(this.#port)
      .connect();

    log('connect to', this.#host, this.#port);
    new Keyboard()
      .on('keypress', (key) => {
        const encoded = encode(Buffer.from(JSON.stringify(key)));
        this.#netcatClient.send(encoded);
      })
      .start();
    return this;
  }
}

export { ClientService };
