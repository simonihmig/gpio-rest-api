"use strict";

const rpio = require('rpio');

let invertedPins = [];

module.exports = {
  read(pin) {
    let value = rpio.read(pin);
    if (invertedPins.includes(pin)) {
      value = !value;
    }
    return value;
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
        rpio.open(pin.pin, rpio.INPUT, typeof pin.pull !== 'undefined' ? (pin.pull === 'down' ? rpio.PULL_DOWN : rpio.PULL_UP) : undefined);
        if (pin.pull === 'up') {
          invertedPins.push(pin.pin);
        }
      }
    })
  }
}