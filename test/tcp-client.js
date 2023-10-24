import Netcat from 'netcat';

const NetcatClient = Netcat.client;

new NetcatClient()
  .port(8080)
  .connect()
  .send('hello');
