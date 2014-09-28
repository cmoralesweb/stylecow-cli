var findup = require('findup-sync');
var stylecow = findup('node_modules/stylecow/lib/index.js');

module.exports = stylecow ? require(stylecow) : null;
