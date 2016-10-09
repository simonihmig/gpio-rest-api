var debug = require('debug')('rpio_emulator');
var oldState = {};
var state = {};

function hasStateChanged() {
  for(var k in state) {
    if(oldState[k] === undefined) {
      return k;
    }

    if(oldState[k] != state[k]) {
      return k;
    }
  }

  return -1;
}

var pollCallbacks = new Map();

function refreshState() {
  oldState = state;

  delete require.cache[require.resolve('./state')];
  state = require('./state');
}

function read(pin) {
  refreshState()
  debug("reading pin: " + pin);

  if(state[pin] === undefined) {
    return -1;
  }
  return state[pin];
}

function poll(pin, callback) {
  debug("polling pin: " + pin);
  pollCallbacks.set("_" + pin, callback);
}

function open(pin, type) {

}

// Load a state
debug("Loading initial state from state.json")
delete require.cache[require.resolve('./state')];
state = require('./state');

setInterval(function() {
  refreshState();

  var pinChanged = hasStateChanged()
  if(pinChanged != -1) {
    debug("Pin value has changed: " + pinChanged);
    debug(pollCallbacks)
    pollCallbacks.get("_" + pinChanged)(pinChanged, read(pinChanged));
  }

}, 100);

module.exports = {
  read: read,
  poll: poll,
  open: open
}
