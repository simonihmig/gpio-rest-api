"use strict";

const serialize = require('../serializers/json');
const getPinValue = require('../utils/inverted-pin').getPinValue;

module.exports = function get(req, res) {
  if (!req.body) return res.sendStatus(400);
  if (req.body.status !== 1 && req.body.status !== 0) return res.sendStatus(400);

  let pin = req.pin;
  let gpio = req.app.locals.gpio;
  let body = req.body;
  let status = getPinValue(pin, body.status, req.app.locals.config);

  gpio.write(pin, status);
  let result = serialize(pin, status);
  res.json(result);
}