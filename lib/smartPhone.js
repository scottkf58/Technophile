var GameConsole = require('./gameConsole.js');
var WebBrowser = require('./webBrowser.js');
var Tablet = require('./tablet.js');
var Phone = require('./phone.js');
var extend = require('./extend.js');

function SmartPhone (phoneNumber) {
  Phone.call(this, phoneNumber);
  GameConsole.call(this, 'Smart Phone');

}


extend(SmartPhone.prototype, GameConsole.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);
extend(SmartPhone.prototype, Tablet.prototype);
extend(SmartPhone.prototype, Phone.prototype);

module.exports = SmartPhone;