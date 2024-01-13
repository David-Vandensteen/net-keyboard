import { NetKeyboardServer } from '#src/index';

const { log } = console;

new NetKeyboardServer()
  .on('data', (message) => {
    log('data', message);
  })
  .serve();
