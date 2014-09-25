var stylecow = require('stylecow');

module.exports = function (code, plugins, support) {
	css = stylecow.create(code);

	css.convert(plugins, support);
				
	return css.toString();
}
