var Watch = require('./watch.js');
var Tablet = require('./tablet.js');
var extend = require('./extend.js');

function SmartWatch () {
  Watch.call(this, 'SmartWatch');

}


extend(SmartWatch.prototype, Watch.prototype);
extend(SmartWatch.prototype, Tablet.prototype);

module.exports = SmartWatch;