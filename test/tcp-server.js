import Netcat from 'netcat';

const NetcatServer = Netcat.server;

new NetcatServer()
  .port(8080)
  .listen()
  .on('data', (socket, data) => { console.log(data.toString()); });
