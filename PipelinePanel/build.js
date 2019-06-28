var fs = require('fs-extra');
var path = require('path');

var source = path.join(__dirname, 'node_modules', 'vss-web-extension-sdk', 'lib', 'VSS.SDK.min.js');
var target = path.join(__dirname, 'sdk', 'scripts', 'VSS.SDK.min.js');

fs.copySync(source, target);