"use strict";

const serialize = require('../serializers/json');

module.exports = function get(req, res) {
  let pin = req.pin;

  console.log(`GET request for pin ${pin}`);

  let status = 0;
  let result = serialize(pin, status);
  res.json(result);
}