# net-keyboard

## Install
```cmd
npm i git@github.com:David-Vandensteen/net-keyboard.git#release/2.0.0
```

## Examples

### Server
```javascript
import { NetKeyboardServer } from 'net-keyboard';

const { log } = console;

new NetKeyboardServer({ port: 8080 })
  .on('data', (message) => {
    log('data', message);
  })
  .serve();
```

### Client
```javascript
import { NetKeyboardClient } from 'net-keyboard';

new NetKeyboardClient('127.0.0.1', 8080)
  .connect();
```

### Local mode

```javascript
import { NetKeyboardServer } from 'net-keyboard';

const { log } = console;

new NetKeyboardServer()
  .on('data', (message) => {
    log('data', message);
  })
  .serve();
```
