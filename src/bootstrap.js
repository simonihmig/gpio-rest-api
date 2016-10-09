"use strict";

const express = require('express');
const app = express();

module.exports = function bootstrap(config) {
  app.get('/api/gpio/:pin', require('./express/get'));

  app.param('pin', require('./express/validate-pin'));

  app.locals.config = config;
  app.listen(config.port);
  return app;
}