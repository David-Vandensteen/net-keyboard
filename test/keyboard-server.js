import { ServerService } from '#src/index';

new ServerService(8080)
  .on('message', (message) => {
    console.log('message', message);
  })
  .serve();
