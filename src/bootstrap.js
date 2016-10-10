"use strict";

const express = require('express');
const app = express();
const gpioFactory = require('./gpio/factory');
const bodyParser = require('body-parser');

module.exports = function bootstrap(config) {

  let gpio = gpioFactory(config);

  app.use(bodyParser.json());

  app.get('/api/gpio/:pin', require('./express/get'));
  app.put('/api/gpio/:pin', require('./express/put'));
  app.patch('/api/gpio/:pin', require('./express/patch'));

  app.param('pin', require('./express/validate-pin'));

  app.locals.config = config;
  app.locals.gpio = gpio;
  app.listen(config.port);
  return app;
}