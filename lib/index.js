var findup = require('findup-sync');
var stylecow = findup('node_modules/stylecow/lib/index.js');

if (stylecow) {
	module.exports = require(stylecow);
}
