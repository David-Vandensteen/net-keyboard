import { NetKeyboardServer } from '#src/index';

const { log } = console;

new NetKeyboardServer({ port: 8080 })
  .on('data', (message) => {
    log('data', message);
  })
  .serve();
