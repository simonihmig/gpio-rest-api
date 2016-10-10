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
      let mode = pin.writeable ? gpio.OUTPUT : gpio.INPUT;
      let value = typeof pin.default !== 'undefined' ? pin.default : 0;
      rpio.open(pin, mode, value);
    })
  }
}