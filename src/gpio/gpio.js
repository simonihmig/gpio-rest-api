"use strict";

const rpio = require('rpio');

module.exports = {
  read(pin) {
    return rpio.read(pin);
  },

  write(pin, value) {
    rpio.write(pin, value);
  },

  init(options) {
    rpio.init(options);
  },

  initPins(pins) {
    pins.forEach((pin) => {
      if (pin.writeable) {
        rpio.open(pin.pin, rpio.OUTPUT, typeof pin.default !== 'undefined' ? pin.default : 0);
      } else {
        rpio.open(pin.pin, rpio.INPUT, typeof pin.pulldown !== 'undefined' ? (pin.pulldown ? rpio.PULL_DOWN : rpio.PULL_UP) : rpio.PULL_DOWN);
      }
    })
  }
}