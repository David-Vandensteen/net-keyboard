import arg from 'arg';
import {
  name,
  author,
  version,
  license,
} from '#src/lib/package';

const { log } = console;

const showHelp = () => {
  log('');
  log('');
  log(name, '[options]');
  log('');
  log('     Required options:');
  log('');
  log('   -h    --host');
  log('   -p    --port');
  log('');
  log('     Extra options:');
  log('');
  log('   --help                      -- show help');
  log('');
  log('version', version, author, license);
  process.exit(0);
};

class ArgService {
  constructor() {
    this.args = arg({
      '--host': String,
      '--port': Number,
      '--help': Boolean,

      // Aliases
      '-h': '--host',
      '-p': '--port',
    });
  }

  get host() { return this.args['--host']; }

  get port() { return this.args['--port']; }

  get help() { return this.args['--help']; }

  checkArgumentsAndHelp() {
    if (!this.host || !this.port) showHelp();
  }
}

const argService = new ArgService();

argService.get = () => {
  argService.checkArgumentsAndHelp();
  return {
    host: argService.host,
    port: argService.port,
  };
};

export default argService;
export { argService };
