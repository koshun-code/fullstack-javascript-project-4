#!/usr/bin/env node

import { program } from 'commander';
import loader from '../index.js';

program
  .version('1.0')
  .description('Page loader utility.')
  .option('-o, --output [dir]', 'output', process.cwd())
  .arguments('<url>')
  .action((url, options) => {
    loader(url, options.output);
  })
  .parse(process.argv);
