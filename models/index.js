var fs        = require("fs");
var mongoose  = require('mongoose');
var models    = this;

fs.readdirSync(__dirname + '/').forEach(function(file) {
  if (file.match(/\.js$/) !== null && file != 'connector.js' && file != 'index.js' && file != 'address.js') {
    var name = file.replace('.js', '');
    exports[name] = require('./'+name);
  }
});
