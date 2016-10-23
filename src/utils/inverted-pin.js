function isInvertedPin(pin, config) {
  let pinConfig = config.pins[pin];

  if (!pinConfig) throw new Error(`No pin config found for pin ${pin}`);

  return pinConfig.inverted === true;
}

function getPinValue(pin, value, config) {
  if (isInvertedPin(pin, config)) {
    return value === 0 ? 1 : 0;
  }
  return value;
}


exports.isInvertedPin = isInvertedPin;
exports.getPinValue = getPinValue;
