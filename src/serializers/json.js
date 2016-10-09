"use strict";

module.exports = function jsonSerializer(pin, status) {
  return {
    pin,
    status
  };
}