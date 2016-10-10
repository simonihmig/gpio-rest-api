"use strict";

module.exports = {
  read(pin) {
    console.log(`Reading pin ${pin}`);
    return 0;
  },

  write(pin, value) {
    console.log(`Writing '${value}' to pin ${pin}`);
  },

  init(options) {
    console.log('Init', options);
  },

  initPins(pins) {
    console.log('Init pins', pins);
  }
}