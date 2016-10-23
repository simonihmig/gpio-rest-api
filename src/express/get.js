"use strict";

const serialize = require('../serializers/json');
const getPinValue = require('../utils/inverted-pin').getPinValue;

module.exports = function get(req, res) {
  let pin = req.pin;
  let gpio = req.app.locals.gpio;

  let status = getPinValue(pin, gpio.read(pin), req.app.locals.config);
  
  let result = serialize(pin, status);
  res.json(result);
}