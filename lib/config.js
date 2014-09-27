var defaults = {
	code: "normal",
	support: {
		"explorer": 8.0,
		"firefox": 30.0,
		"chrome": 35.0,
		"safari": 6.0,
		"opera": 22.0,
		"android": 4.0,
		"ios": 6.0
	},
	plugins: [],
	codeStyles: ["normal", "minify"]
};

var stylecow = require('./index');

if (stylecow) {
	defaults = stylecow.defaults;
	defaults.codeStyles = Object.keys(stylecow.codeStyles);
}

module.exports = defaults;
