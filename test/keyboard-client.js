import { ClientService } from '#src/index';

new ClientService('127.0.0.1', 8080)
  .connect();
