#! /usr/bin/env node
import { argService } from '#src/service/arg';
import { NetKeyboardClient } from '#src/index';

new NetKeyboardClient(argService.host, argService.port)
  .connect();
