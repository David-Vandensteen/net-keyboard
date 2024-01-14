#! /usr/bin/env node
import { argService } from '#src/service/arg';
import { NetKeyboardClient } from '#src/index';

const { host, port } = argService.get();

new NetKeyboardClient(host, port)
  .connect();
