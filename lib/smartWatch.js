var Watch = require('./watch.js');
var Tablet = require('./tablet.js');

function SmartWatch () {
  Watch.call(this, 'SmartWatch');

}

function extend(destination, source) {
  for(var k in source) {
    if(source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend(SmartWatch.prototype, Watch.prototype);
extend(SmartWatch.prototype, Tablet.prototype);

module.exports = SmartWatch;