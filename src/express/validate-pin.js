"use strict";

module.exports = function validatePin(req, res, next, pin) {
  let pins = req.app.locals.config.pins;
  pin = parseInt(pin);

  if (!pins.some((item) => item.pin === pin)) {
    res.sendStatus(403);
  }

  req.pin = pin;
  next();
}