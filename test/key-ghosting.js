import readline from 'readline';

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  process.stdout.write(str);

  if (key.ctrl && key.name === 'c') {
    process.exit(0);
  }
});
