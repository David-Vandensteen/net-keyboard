#! /usr/bin/env node
import { argService } from '#src/service/arg';
import { ClientService } from '#src/index';

new ClientService(argService.host, argService.port)
  .connect();
