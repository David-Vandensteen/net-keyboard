import { client as Client } from 'netcat';

const client = new Client()
  .port(8080)
  .connect()
  .send('hello')
  .send('hellu');

setTimeout(() => {
  client.send('helli');
}, 5000);
