import { ServerService } from '#src/index';

const { log } = console;
new ServerService(8080)
  .on('message', (message) => {
    log('message', message);
  })
  .serve();
