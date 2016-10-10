"use strict";

const serialize = require('../serializers/json');

module.exports = function get(req, res) {
  if (!req.body) return res.sendStatus(400);
  if (req.body.status !== 1 && req.body.status !== 0) return res.sendStatus(400);

  let pin = req.pin;
  let gpio = req.app.locals.gpio;
  let body = req.body;
  let status = body.status;

  gpio.write(pin, status);
  let result = serialize(pin, status);
  res.json(result);
}