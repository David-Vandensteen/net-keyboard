import { NetKeyboardServer } from '#src/index';

const { log } = console;

new NetKeyboardServer(8080)
  .on('message', (message) => {
    log('message', message);
  })
  .serve();
