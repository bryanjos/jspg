#!/usr/bin/env node

var program = require('commander');
var jsp = require('../src/index');

program
  .version('1.0.0')
  .arguments('<app_name>')
  .option('-w, --web', 'Scaffolds frontend project')
  .action(function (app_name) {
      jsp.create(app_name, program.web != null);
   })
  .parse(process.argv);
