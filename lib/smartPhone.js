var GameConsole = require('./gameConsole.js');
var WebBrowser = require('./webBrowser.js');
var Tablet = require('./tablet.js');
var Phone = require('./phone.js');

function SmartPhone (phoneNumber) {
  Phone.call(this, phoneNumber);
  GameConsole.call(this, 'Smart Phone');

}

function extend(destination, source) {
  for(var k in source) {
    if(source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend(SmartPhone.prototype, GameConsole.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);
extend(SmartPhone.prototype, Tablet.prototype);
extend(SmartPhone.prototype, Phone.prototype);

module.exports = SmartPhone;