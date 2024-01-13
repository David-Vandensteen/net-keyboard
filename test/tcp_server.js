import { server as Server } from 'netcat';
import decode from '#src/lib/decode';

const { log } = console;

new Server()
  .port(8080)
  .listen()
  .on('data', (socket, data) => {
    decode(data).forEach((message) => {
      log('message', message);
    });
  });
