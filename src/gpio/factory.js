"use strict";

module.exports = function gpioFactory(options) {
  let gpioOptions = options.gpio;
  let type = gpioOptions.type;
  let module = require(`./${type}`);
  module.init(gpioOptions.options);
  module.initPins(options.pins);
  return module;
}