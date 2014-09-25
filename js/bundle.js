require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./main.js":[function(require,module,exports){
var stylecow = require('stylecow');

module.exports = function (code, plugins, support) {
	css = stylecow.create(code);

	css.convert(plugins, support);
				
	return css.toString();
}

},{"stylecow":14}],1:[function(require,module,exports){
var color = {
	namedHues: {
		'red': 0,
		'orangish red': 7.5,
		'red orange': 15,
		'orange red': 15,
		'reddish orange': 22.5,
		'orange': 30,
		'yellowish orange': 37.5,
		'orange yellow': 45,
		'yellow orange': 45,
		'orangish yellow': 52.5,
		'yellow': 60,
		'greenish yellow': 75,
		'yellow green': 90,
		'green yellow': 90,
		'yellowish green': 105,
		'green': 120,
		'bluish green': 150,
		'green blue': 180,
		'blue green': 180,
		'greenish blue': 210,
		'blue': 240,
		'purplish blue': 255,
		'blue purple': 270,
		'purple blue': 270,
		'bluish purple': 285,
		'purple': 300,
		'reddish purple': 315,
		'red purple': 330,
		'purple red': 330,
		'purplish red': 345
	},

	names: {
		'aliceblue': '#F0F8FF',
		'antiquewhite': '#FAEBD7',
		'aqua': '#00FFFF',
		'aquamarine': '#7FFFD4',
		'azure': '#F0FFFF',
		'beige': '#F5F5DC',
		'bisque': '#FFE4C4',
		'black': '#000000',
		'blanchedalmond': '#FFEBCD',
		'blue': '#0000FF',
		'blueviolet': '#8A2BE2',
		'brown': '#A52A2A',
		'burlywood': '#DEB887',
		'cadetblue': '#5F9EA0',
		'chartreuse': '#7FFF00',
		'chocolate': '#D2691E',
		'coral': '#FF7F50',
		'cornflowerblue': '#6495ED',
		'cornsilk': '#FFF8DC',
		'crimson': '#DC143C',
		'cyan': '#00FFFF',
		'darkblue': '#00008B',
		'darkcyan': '#008B8B',
		'darkgoldenrod': '#B8860B',
		'darkgray': '#A9A9A9',
		'darkgrey': '#A9A9A9',
		'darkgreen': '#006400',
		'darkkhaki': '#BDB76B',
		'darkmagenta': '#8B008B',
		'darkolivegreen': '#556B2F',
		'darkorange': '#FF8C00',
		'darkorchid': '#9932CC',
		'darkred': '#8B0000',
		'darksalmon': '#E9967A',
		'darkseagreen': '#8FBC8F',
		'darkslateblue': '#483D8B',
		'darkslategray': '#2F4F4F',
		'darkslategrey': '#2F4F4F',
		'darkturquoise': '#00CED1',
		'darkviolet': '#9400D3',
		'deeppink': '#FF1493',
		'deepskyblue': '#00BFFF',
		'dimgray': '#696969',
		'dimgrey': '#696969',
		'dodgerblue': '#1E90FF',
		'firebrick': '#B22222',
		'floralwhite': '#FFFAF0',
		'forestgreen': '#228B22',
		'fuchsia': '#FF00FF',
		'gainsboro': '#DCDCDC',
		'ghostwhite': '#F8F8FF',
		'gold': '#FFD700',
		'goldenrod': '#DAA520',
		'gray': '#80808@0',
		'grey': '#808080',
		'green': '#008000',
		'greenyellow': '#ADFF2F',
		'honeydew': '#F0FFF0',
		'hotpink': '#FF69B4',
		'indianred ': '#CD5C5C',
		'indigo ': '#4B0082',
		'ivory': '#FFFFF0',
		'khaki': '#F0E68C',
		'lavender': '#E6E6FA',
		'lavenderblush': '#FFF0F5',
		'lawngreen': '#7CFC00',
		'lemonchiffon': '#FFFACD',
		'lightblue': '#ADD8E6',
		'lightcoral': '#F08080',
		'lightcyan': '#E0FFFF',
		'lightgoldenrodyellow': '#FAFAD2',
		'lightgray': '#D3D3D3',
		'lightgrey': '#D3D3D3',
		'lightgreen': '#90EE90',
		'lightpink': '#FFB6C1',
		'lightsalmon': '#FFA07A',
		'lightseagreen': '#20B2AA',
		'lightskyblue': '#87CEFA',
		'lightslategray': '#778899',
		'lightslategrey': '#778899',
		'lightsteelblue': '#B0C4DE',
		'lightyellow': '#FFFFE0',
		'lime': '#00FF00',
		'limegreen': '#32CD32',
		'linen': '#FAF0E6',
		'magenta': '#FF00FF',
		'maroon': '#800000',
		'mediumaquamarine': '#66CDAA',
		'mediumblue': '#0000CD',
		'mediumorchid': '#BA55D3',
		'mediumpurple': '#9370D8',
		'mediumseagreen': '#3CB371',
		'mediumslateblue': '#7B68EE',
		'mediumspringgreen': '#00FA9A',
		'mediumturquoise': '#48D1CC',
		'mediumvioletred': '#C71585',
		'midnightblue': '#191970',
		'mintcream': '#F5FFFA',
		'mistyrose': '#FFE4E1',
		'moccasin': '#FFE4B5',
		'navajowhite': '#FFDEAD',
		'navy': '#000080',
		'oldlace': '#FDF5E6',
		'olive': '#808000',
		'olivedrab': '#6B8E23',
		'orange': '#FFA500',
		'orangered': '#FF4500',
		'orchid': '#DA70D6',
		'palegoldenrod': '#EEE8AA',
		'palegreen': '#98FB98',
		'paleturquoise': '#AFEEEE',
		'palevioletred': '#D87093',
		'papayawhip': '#FFEFD5',
		'peachpuff': '#FFDAB9',
		'peru': '#CD853F',
		'pink': '#FFC0CB',
		'plum': '#DDA0DD',
		'powderblue': '#B0E0E6',
		'purple': '#800080',
		'red': '#FF0000',
		'rebeccapurple': '#663399',
		'rosybrown': '#BC8F8F',
		'royalblue': '#4169E1',
		'saddlebrown': '#8B4513',
		'salmon': '#FA8072',
		'sandybrown': '#F4A460',
		'seagreen': '#2E8B57',
		'seashell': '#FFF5EE',
		'sienna': '#A0522D',
		'silver': '#C0C0C0',
		'skyblue': '#87CEEB',
		'slateblue': '#6A5ACD',
		'slategray': '#708090',
		'slategrey': '#708090',
		'snow': '#FFFAFA',
		'springgreen': '#00FF7F',
		'steelblue': '#4682B4',
		'tan': '#D2B48C',
		'teal': '#008080',
		'thistle': '#D8BFD8',
		'tomato': '#FF6347',
		'turquoise': '#40E0D0',
		'violet': '#EE82EE',
		'wheat': '#F5DEB3',
		'white': '#FFFFFF',
		'whitesmoke': '#F5F5F5',
		'yellow': '#FFFF00',
		'yellowgreen': '#9ACD32'
	},


	// hex: 00000000-FFFFFFFF
	// rgba: 0-255 / 0-255 / 0-255 / 0-1
	HEX_RGBA: function (hex) {
		var r,g,b,a;

		switch (hex.length) {
			case 3:
				r = hex[0] + hex[0];
				g = hex[1] + hex[1];
				b = hex[2] + hex[2];
				a = 'ff';
				break;

			case 4:
				r = hex[0] + hex[0];
				g = hex[1] + hex[1];
				b = hex[2] + hex[2];
				a = hex[3] + hex[3];
				break;

			case 6:
				r = hex[0] + hex[1];
				g = hex[2] + hex[3];
				b = hex[4] + hex[5];
				a = 'ff';
				break;

			case 8:
				r = hex[0] + hex[1];
				g = hex[2] + hex[3];
				b = hex[4] + hex[5];
				a = hex[6] + hex[7];
				break;
		}

		return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), number(parseInt(a, 16) / 255, 1)];
	},


	// rgba: 0-255 / 0-255 / 0-255 / 0-1
	// hex: 000000-FFFFFF
	RGBA_HEX: function (rgba) {
		var r = ((rgba[0] > 255) ? 255 : (rgba[0] < 0 ? 0 : rgba[0])).toString(16),
			g = ((rgba[1] > 255) ? 255 : (rgba[1] < 0 ? 0 : rgba[1])).toString(16),
			b = ((rgba[2] > 255) ? 255 : (rgba[2] < 0 ? 0 : rgba[2])).toString(16);

		if (r.length === 1) {
			r = '0' + r;
		}
		if (g.length === 1) {
			g = '0' + g;
		}
		if (b.length === 1) {
			b = '0' + b;
		}

		return (r + g + b).toUpperCase();
	},


	// gray: 0-255 / 0-1
	// rgba: 0-255 / 0-255 / 0-255 / 0-1
	GRAY_RGBA: function (gray) {
		return [gray[0], gray[0], gray[0], gray[1]];
	},


	// rgba: 0-255 / 0-255 / 0-255 / 0-1
	// hsla: 0-360 / 0-100 / 0-100 / 0-1
	RGBA_HSLA: function (rgba) {
		var r = rgba[0] / 255,
			g = rgba[1] / 255,
			b = rgba[2] / 255,
			a = rgba[3],
			min = Math.min(r, g, b),
			max = Math.max(r, g, b),
			delta = max - min,
			l = (max + min) / 2,
			h,
			s;

		if (delta === 0) {
			h = 0;
			s = 0;
		} else {
			if (l < 0.5) {
				s = delta / (max + min);
			} else {
				s = delta / (2 - max - min);
			}

			var delta_r = (((max - r) / 6) + (delta / 2)) / delta;
			var delta_g = (((max - g) / 6) + (delta / 2)) / delta;
			var delta_b = (((max - b) / 6) + (delta / 2)) / delta;

			if (r === max) {
				h = delta_b - delta_g;
			} else if (g === max) {
				h = (1 / 3) + delta_r - delta_b;
			} else if (b === max) {
				h = (2 / 3) + delta_g - delta_r;
			}

			if (h < 0) {
				h += 1;
			}

			if (h > 1) {
				h -= 1;
			}
		}

		return [Math.round(h * 360), (s.toFixed(2) * 100), (l.toFixed(2) * 100), a];
	},


	// hsla: 0-360 / 0-100 / 0-100 / 0-1
	// rgba: 0-255 / 0-255 / 0-255 / 0-1
	HSLA_RGBA: function (hsla) {
		var h = hsla[0],
			s = hsla[1]/100,
			l = hsla[2]/100,
			a = hsla[3],
			r,
			g,
			b;

		if (h > 0) {
			h /= 360;
		}

		if (s === 0) {
			r = l;
			g = l;
			b = l;
		} else {
			var t1, t2, rt3, gt3, bt3;

			if (l < 0.5) {
				t2 = l * (1.0 + s);
			} else {
				t2 = (l + s) - (l * s);
			}

			t1 = 2.0 * l - t2;

			rt3 = h + 1.0/3.0;
			gt3 = h;
			bt3 = h - 1.0/3.0;

			if (rt3 < 0) {
				rt3 += 1.0;
			}
			if (rt3 > 1) {
				rt3 -= 1.0;
			}
			if (gt3 < 0) {
				gt3 += 1.0;
			}
			if (gt3 > 1) {
				gt3 -= 1.0;
			}
			if (bt3 < 0) {
				bt3 += 1.0;
			}
			if (bt3 > 1) {
				bt3 -= 1.0;
			}

			if (6.0 * rt3 < 1) {
				r = t1 + (t2 - t1) * 6.0 * rt3;
			} else if (2.0 * rt3 < 1) {
				r = t2;
			} else if (3.0 * rt3 < 2) {
				r = t1 + (t2 - t1) * ((2.0/3.0) - rt3) * 6.0;
			} else {
				r = t1;
			}

			if (6.0 * gt3 < 1) {
				g = t1 + (t2 - t1) * 6.0 * gt3;
			} else if (2.0 * gt3 < 1) {
				g = t2;
			} else if (3.0 * gt3 < 2) {
				g = t1 + (t2 - t1) * ((2.0/3.0) - gt3) * 6.0;
			} else {
				g = t1;
			}

			if (6.0 * bt3 < 1) {
				b = t1 + (t2 - t1) * 6.0 * bt3;
			} else if (2.0 * bt3 < 1) {
				b = t2;
			} else if (3.0 * bt3 < 2) {
				b = t1 + (t2 - t1) * ((2.0/3.0) - bt3) * 6.0;
			} else {
				b = t1;
			}
		}

		r = Math.round(255 * r);
		g = Math.round(255 * g);
		b = Math.round(255 * b);

		return [r, g, b, a];
	},


	// rgba: 0-255 / 0-255 / 0-255 / 0-1
	// hwba: 0-360 / 0-100 / 0-100 / 0-1
	RGBA_HWBA: function (rgba) {
		var r = rgba[0],
			g = rgba[1],
			b = rgba[2],
			a = rgba[3],
			h = color.RGBA_HSLA(rgba)[0],
			w = 1/255 * Math.min(r, Math.min(g, b)),
			b = 1 - 1/255 * Math.max(r, Math.max(g, b));

		w = Math.round(100 * w);
		b = Math.round(100 * b);

		return [h, w, b, a];
	},


	// hwba: 0-360 / 0-100 / 0-100 / 0-1
	// rgba: 0-255 / 0-255 / 0-255 / 0-1
	HWBA_RGBA: function (hwba) {
		var h = hwba[0] / 360,
			wh = hwba[1] / 100,
			bl = hwba[2] / 100,
			ratio = wh + bl,
			i, v, f, n;

		if (ratio > 1) {
			wh /= ratio;
			bl /= ratio;
		}

		i = Math.floor(6 * h);
		v = 1 - bl;
		f = 6 * h - i;

		if ((i & 0x01) != 0) {
			f = 1 - f;
		}

		n = wh + f * (v - wh);

		switch (i) {
			default:
			case 6:
			case 0:
				r = v;
				g = n;
				b = wh;
				break;

			case 1:
				r = n;
				g = v;
				b = wh;
				break;

			case 2:
				r = wh;
				g = v;
				b = n;
				break;

			case 3:
				r = wh;
				g = n;
				b = v;
				break;

			case 4:
				r = n;
				g = wh;
				b = v;
				break;

			case 5:
				r = v;
				g = wh;
				b = n;
				break;
		}

		r = Math.round(255 * r);
		g = Math.round(255 * g);
		b = Math.round(255 * b);

		return [r, g, b, hwba[3]];
	},


	// rgba: 0-255 / 0-255 / 0-255 / 0-1
	toRGBA: function (value, method) {
		if ((typeof value === 'object') && value.type !== undefined) {
			if (value.type === 'Function') {
				return color.toRGBA(value.content, value.name);
			}
			
			return color.toRGBA(value.name);
		}

		if (typeof value === 'string') {
			if (value[0] === '#') {
				return color.HEX_RGBA(value.substr(1));
			}
			if (value.toLowerCase() === 'transparent') {
				return [0, 0, 0, 0];
			}
			if (color.names[value.toLowerCase()]) {
				return color.HEX_RGBA(color.names[value.toLowerCase()].substr(1));
			}
			if (color.namedHues[value.toLowerCase()] !== undefined) {
				return color.HSLA_RGBA([color.namedHues[value.toLowerCase()], 100, 50, 1]);
			}
		}

		switch (method) {
			case 'rgb':
			case 'rgba':
				if (value[3] === undefined) {
					value[3] = 1;
				}

				return [number(value[0], 255), number(value[1], 255), number(value[2], 255), number(value[3], 1)];

			case 'hsl':
			case 'hsla':
				if (value[3] === undefined) {
					value[3] = 1;
				}

				if (color.namedHues[value[0].toLowerCase()] !== undefined) {
					value[0] = color.namedHues[value[0].toLowerCase()];
				}

				return color.HSLA_RGBA([parseInt(value[0]), number(value[2], 100), number(value[3], 100), number(value[4], 1)]);

			case 'hwb':
			case 'hwba':
				if (value[3] === undefined) {
					value[3] = 1;
				}

				if (color.namedHues[value[0].toLowerCase()] !== undefined) {
					value[0] = color.namedHues[value[0].toLowerCase()];
				}

				return color.HWBA_RGBA([parseInt(value[0]), number(value[2], 100), number(value[3], 100), number(value[4], 1)]);

			case 'gray':
				if (value[1] === undefined) {
					value[1] = 1;
				}

				return color.GRAY_RGBA([number(value[0], 255), number(value[1], 1)]);
		}

		return [0, 0, 0, 1];
	}
};


function number (color, max) {
	if (typeof color === 'string') {
		if (color.indexOf('%') !== -1) {
			color = ((max / 100) * parseFloat(color, 10));
		} else {
			color = parseFloat(color, 10);
		}
	}

	if (max === 1) {
		color = parseFloat(color.toFixed(2));
	} else {
		color = Math.round(color);
	}

	if (color > max) {
		return max;
	}

	if (color < 0) {
		return 0;
	}

	return color;
}


module.exports = color;

},{}],2:[function(require,module,exports){
(function (stylecow) {
	stylecow.config = {
		codeStyles: {
			"normal": {
				"indent": "\t",
				"linebreak": "\n",
				"selectorJoiner": ", ",
				"argumentJoiner": ", ",
				"valueJoiner": ", ",
				"ruleColon": ": ",
				"ruleEnd": ";",
				"comments": "all", // (all|important|none)
				"commentStart": "/* ",
				"commentEnd": " */",
				"rulesetStart": " {\n",
				"rulesetEnd": "\n}"
			},
			"minify": {
				"indent": "",
				"linebreak": "",
				"selectorJoiner": ",",
				"argumentJoiner": ",",
				"valueJoiner": ",",
				"ruleColon": ":",
				"ruleEnd": ";",
				"comments": "none",
				"commentStart": "/*",
				"commentEnd": "*/",
				"rulesetStart": "{",
				"rulesetEnd": "}"
			}
		},

		defaults: {
			code: "normal",
			support: {
				"explorer": 8.0,
				"firefox": 15.0,
				"chrome": 25.0,
				"safari": 5.0,
				"opera": 12.0,
				"android": 4.0,
				"ios": 5.0
			},
			plugins: [
				"color",
				"animation",
				"appearance",
				"background",
				"border",
				"box-shadow",
				"box-sizing",
				"calc",
				"clip",
				"color",
				"column",
				"cursor",
				"document",
				"flex",
				"float",
				"fullscreen",
				"grid",
				"initial",
				"inline-block",
				"linear-gradient",
				"mask",
				"matches",
				"min-height",
				"nested-rules",
				"object",
				"opacity",
				"pseudoelements",
				"region",
				"rem",
				"sizing",
				"sticky",
				"transform",
				"transition",
				"type",
				"user-select",
				"variables",
				"vmin"
			]
		}
	};

})(require('./index'));

},{"./index":14}],3:[function(require,module,exports){
(function (stylecow) {

	stylecow.AtRule = function (name) {
		this.type = 'AtRule';
		this.name = name;
	};

	stylecow.AtRule.create = function (string) {
		return stylecow.Rule.create(string);
	};

	stylecow.AtRule.prototype = Object.create(stylecow.Rule.prototype, {

		name: {
			get: function () {
				return this._name;
			},
			set: function (name) {
				var vendor = name.match(/^\-(\w+)\-/);
				this.vendor = vendor ? vendor[0] : null;

				this._name = name;
			}
		},

		toString: {
			value: function () {
				var code = stylecow.Rule.prototype.toString.call(this);

				return code ? ('@' + this.name + ' ' + code) : '';
			}
		},

		toCode: {
			value: function (style) {
				var code = stylecow.Rule.prototype.toCode.call(this, style);

				return code ? ('@' + this.name + ' ' + code) : '';
			}
		}
	});
})(require('../index'));

},{"../index":14}],4:[function(require,module,exports){
(function (stylecow) {

	stylecow.Base = Object.create(Array.prototype, {
		executePlugins: {
			value: function (plugins, vendor) {
				if (vendor) {
					if (this.vendor && this.vendor !== vendor) {
						return this.remove();
					}
				} else {
					vendor = this.vendor;
				}

				stylecow.utils.forEach(plugins[this.type + 'Before'], function (functions, name) {
					if ((name === '*') || (name === this.name)) {
						functions.forEach(function (fn) {
							fn(this);
						}, this);
					}
				}, this);

				var k = 0;

				while (this[k]) {
					var child = this[k];

					if (child.executed) {
						++k;
						continue;
					}

					child.executePlugins(plugins, vendor);

					k = 0;
				}

				stylecow.utils.forEach(plugins[this.type], function (functions, name) {
					if ((name === '*') || (name === this.name)) {
						functions.forEach(function (fn) {
							fn(this);
						}, this);
					}
				}, this);

				this.executed = true;
			}
		},

		convert: {
			value: function (plugins, minSupport) {
				plugins = preparePlugins(plugins, minSupport);

				this.executePlugins(plugins);
			}
		},

		clone: {
			value: function () {
				return stylecow[this.type].create(this.toString());
			}
		},

		is: {
			value: function (type, name, value, vendor) {
				if (type && !equals(this.type, type)) {
					return false;
				}

				if (name && !equals(this.name, name)) {
					return false;
				}

				if (value && !equals(this.value, value)) {
					return false;
				}

				if (vendor && !equals(this.vendor, vendor)) {
					return false;
				}

				return true;
			}
		},

		children: {
			value: function (type, name, value, vendor) {
				return this.filter(function (child) {
					return child.is(type, name, value, vendor);
				});
			}
		},

		hasChild: {
			value: function (type, name, value, vendor) {
				return this.some(function (child) {
					return child.is(type, name, value, vendor);
				});
			}
		},

		search: {
			value: function (type, name, value, vendor, result) {
				result = result || [];

				if (this.is(type, name, value,vendor)) {
					result.push(this);
				}

				for (var i = 0, t = this.length; i < t; i++) {
					this[i].search(type, name, value, vendor, result);
				}

				return result;
			}
		},

		has: {
			value: function (type, name, value, vendor) {
				if (this.is(type, name, value, vendor)) {
					return true;
				}

				for (var i = 0, t = this.length; i < t; i++) {
					if (this[i].has(type, name, value, vendor)) {
						return true;
					}
				}

				return false;
			}
		},

		ancestor: {
			value: function (type, name, value, vendor) {
				if (this.is(type, name, value, vendor)) {
					return this;
				}

				if (this.parent) {
					return this.parent.ancestor(type, name, value, vendor);
				}
			}
		},

		content: {
			get: function () {
				return this.map(function (child) {
					return child.toString();
				});
			},
			set: function (value) {
				this.splice(0);

				if (value instanceof Array) {
					value.forEach(function (v) {
						this.add(v);
					}, this);
				} else {
					this.add(value);
				}
			}
		},

		getData: {
			value: function (key) {
				if (this._data && (key in this._data)) {
					return this._data[key];
				}

				if (this.parent) {
					return this.parent.getData(key);
				}
			}
		},

		setData: {
			value: function (key, value) {
				if (!this._data) {
					this._data = {};
				}

				this._data[key] = value;

				return this;
			}
		},

		index: {
			value: function () {
				if (this.parent) {
					return this.parent.indexOf(this);
				}

				return -1;
			}
		},

		add: {
			value: function (child, index, after) {
				if (typeof child !== 'object') {
					child = this.parseChild(''+child);
				}

				child.detach();
				child.parent = this;

				if (index === undefined || (after && index === this.length)) {
					this.push(child);
				} else {
					this.splice(after ? index + 1 : index, 0, child);
				}

				return child;
			}
		},

		append: {
			value: function (child) {
				this.add(child);
			}
		},

		prepend: {
			value: function (child) {
				this.add(child, 0);
			}
		},

		insertBefore: {
			value: function (child) {
				var index = this.index();

				if (index !== -1) {
					return this.parent.add(child, index);
				}
			}
		},

		insertAfter: {
			value: function (child) {
				var index = this.index();

				if (index !== -1) {
					return this.parent.add(child, index, true);
				}
			}
		},

		cloneBefore: {
			value: function () {
				return this.insertBefore(this.clone());
			}
		},

		cloneAfter: {
			value: function () {
				return this.insertAfter(this.clone());
			}
		},

		replaceWith: {
			value: function (child) {
				var index = this.index();

				if (index !== -1) {
					var parent = this.parent;
					this.remove();

					return parent.add(child, index);
				}
			}
		},

		remove: {
			value: function (propagate) {
				if (!propagate) {
					this.detach();
				}

				this.forEach(function (child) {
					child.remove(true);
				});

				this.parent = null;
				this.splice(0);

				return this;
			}
		},

		detach: {
			value: function () {
				var index = this.index();

				if (index !== -1) {
					this.parent.splice(index, 1);
					this.parent = null;
				}

				return this;
			}
		},

		toCode: {
			value: function () {
				return this.toString();
			}
		}
	});

	function equals (value, needle) {
		if (needle === true) {
			return value ? true : false;
		}

		if (typeof needle === 'string') {
			return (needle === value);
		}

		if (needle instanceof Array) {
			return (needle.indexOf(value) !== -1);
		}

		if (needle instanceof RegExp) {
			return needle.test(value);
		}

		return true;
	}

	function needFix (minSupport, disablePlugin) {
		if (!disablePlugin || !minSupport) {
			return true;
		}

		for (var browser in disablePlugin) {
			if (minSupport[browser] === false) {
				continue;
			}

			if (disablePlugin[browser] === false || minSupport[browser] < disablePlugin[browser]) {
				return true;
			}
		}

		return false;
	}

	function preparePlugins (plugins, minSupport) {
		var functions = [];

		stylecow.utils.arrayUnique(plugins)
			.map(function (plugin) {
				if (typeof plugin === 'string') {
					plugin = require('stylecow-plugin-' + plugin);
				}

				if (plugin instanceof Function) {
					plugin = plugin(stylecow);
				}

				if (!(plugin instanceof Array)) {
					return [plugin];
				}

				return plugin;
			})
			.forEach(function (plugin) {
				plugin.forEach(function (fn) {
					if (needFix(minSupport, fn.disable)) {
						var name, val, k;

						stylecow.utils.forEach(fn, function (val, name) {
							if (name === 'disable') {
								return;
							}

							if (val instanceof Function) {
								val = {'*': val};
							}

							if (!functions[name]) {
								functions[name] = {};
							}

							stylecow.utils.forEach(val, function (v, k) {
								if (!functions[name][k]) {
									functions[name][k] = [];
								}

								functions[name][k].push(v);
							});
						});
					}
				});
			});

		return functions;
	}

})(require('../index'));

},{"../index":14}],5:[function(require,module,exports){
(function (stylecow) {

	stylecow.Comment = function (text) {
		this.type = 'Comment';
		this.text = text;
	};

	stylecow.Comment.create = function (string) {
		var matches = string.match(/^\s*\/\*((.|\s)+)\*\/\s*$/m);

		return new stylecow.Comment(matches[1]);
	};

	stylecow.Comment.prototype = Object.create(stylecow.Base, {

		text: {
			get: function () {
				return this._text;
			},
			set: function (value) {
				value = value.trim();

				if (value[0] === '!') {
					this.important = true;
					value = value.substr(1).trim();
				} else {
					this.important = false;
				}

				this._text = value;
			}
		},

		toString: {
			value: function () {
				return '/* ' + (this.important ? '! ' : '') + this._text + ' */';
			}
		},

		toCode: {
			value: function (style) {
				if (!this._text || style.comments === 'none' || (style.comments === 'important' && !this.important)) {
					return '';
				}

				return style.commentStart + (this.important ? '! ' : '') + this._text + style.commentEnd;
			}
		}
	});
})(require('../index'));

},{"../index":14}],6:[function(require,module,exports){
(function (stylecow) {

	stylecow.Declaration = function (name, value) {
		this.type = 'Declaration';
		this.name = name;
		this.value = value;
	};

	stylecow.Declaration.create = function (string) {
		var pieces = stylecow.utils.explodeTrim(':', string, 2);

		if (pieces[1].substr(-1) === ';') {
			pieces[1] = pieces[1].slice(0, -1);
		}

		return new stylecow.Declaration(pieces[0], pieces[1]);
	};

	stylecow.Declaration.prototype = Object.create(stylecow.Base, {

		parseChild: {
			value: function (string) {
				var value = stylecow.Value.create(string);

				if (value.length === 1) {
					return value[0];
				}

				return value;
			}
		},

		name: {
			get: function () {
				return this._name;
			},
			set: function (name) {
				if (name[0] === '*' || name[0] === '_') {
					this.vendor = 'ms';
				} else {
					var vendor = name.match(/^\-(\w+)\-/);
					this.vendor = vendor ? vendor[0] : null;
				}

				this._name = name;
			}
		},

		value: {
			get: function () {
				return this.join(',');
			},
			set: function (value) {
				this.content = stylecow.utils.explodeTrim(',', value);
			}
		},

		toString: {
			value: function () {
				return this.name + ': ' + this.join(', ') + ';';
			}
		},

		toCode: {
			value: function (style) {
				var value = this.map(function (child) {
					return child.toCode(style);
				}).join(style.valueJoiner);

				if (this.name === '-ms-filter') {
					value = "'" + value + "'";
				}

				return this.name + style.ruleColon + value + style.ruleEnd;
			}
		}
	});
})(require('../index'));

},{"../index":14}],7:[function(require,module,exports){
(function (stylecow) {

	stylecow.Function = function (name, args) {
		this.type = 'Function';
		this.name = name;
		this.content = args;
	};

	stylecow.Function.create = function (string) {
		var matches = string.match(/^([\w\.\:-]+)\((.*)\)$/);

		return new stylecow.Function(matches[1], stylecow.utils.explodeTrim(',', matches[2]));
	};

	stylecow.Function.prototype = Object.create(stylecow.Base, {

		parseChild: {
			value: function (string) {
				var value = stylecow.Value.create(string);

				if (value.length === 1) {
					return value[0];
				}

				return value;
			}
		},

		name: {
			get: function () {
				return this._name;
			},
			set: function (name) {
				var vendor = name.match(/^([:]+)?\-(\w+)\-/);
				this.vendor = vendor ? vendor[0] : null;
				this._name = name;
			}
		},

		toString: {
			value: function () {
				return this.name + '(' + this.join(', ') + ')';
			}
		},

		toCode: {
			value: function (style) {
				return this.name + '(' + this.map(function (child) {
					return child.toCode(style);
				}).join(style.argumentJoiner) + ')';
			}
		}
	});
})(require('../index'));

},{"../index":14}],8:[function(require,module,exports){
(function (stylecow) {

	stylecow.Import = function (url) {
		this.type = 'Import';
		this.url = url;
	};

	stylecow.Import.create = function (string) {
		var matches = string.trim().match(/^\@import (url\()?['"]?([^'"\)]+)/);

		return new stylecow.Import(matches[2]);
	};

	stylecow.Import.prototype = Object.create(stylecow.Base, {

		toString: {
			value: function () {
				return '@import "' + this.url + '"';
			}
		},

		toCode: {
			value: function (style) {
				return this.toString() + style.ruleEnd;
			}
		}
	});
})(require('../index'));

},{"../index":14}],9:[function(require,module,exports){
(function (stylecow) {

	stylecow.Keyword = function (name) {
		this.type = 'Keyword';
		this.name = name;
	};

	stylecow.Keyword.create = function (string) {
		return new stylecow.Keyword(string);
	};

	stylecow.Keyword.prototype = Object.create(stylecow.Base, {

		name: {
			get: function () {
				return this._name;
			},
			set: function (name) {
				var vendor = name.match(/^\-(\w+)\-/);
				this.vendor = vendor ? vendor[0] : null;
				this._name = name;
			}
		},

		toString: {
			value: function () {
				return this.name;
			}
		}
	});
})(require('../index'));

},{"../index":14}],10:[function(require,module,exports){
(function (stylecow) {

	stylecow.Root = function () {
		this.type = 'Root';
	};

	stylecow.Root.create = function (string) {
		return stylecow.utils.parseCode(string, new stylecow.Root());
	};

	stylecow.Root.prototype = Object.create(stylecow.Base, {

		parseChild: {
			value: function (string) {
				return stylecow.utils.parseCode(string)[0];
			}
		},

		toString: {
			value: function () {
				return this.map(function (child) {
					return child.toString();
				}).filter(function (string) {
					return string ? true : false;
				}).join("\n");
			}
		},

		toCode: {
			value: function (style) {
				return this.map(function (child) {
					return child.toCode(style);
				}).filter(function (string) {
					return string ? true : false;
				}).join(style.linebreak);
			}
		}
	});
})(require('../index'));

},{"../index":14}],11:[function(require,module,exports){
(function (stylecow) {

	stylecow.Rule = function () {
		this.type = 'Rule';
	};

	stylecow.Rule.create = function (string) {
		var root = stylecow.utils.parseCode(string);

		if (!root.length) {
			return new stylecow.Rule();
		}

		return root[0];
	};

	stylecow.Rule.prototype = Object.create(stylecow.Root.prototype, {

		selector: {
			get: function () {
				return this.children('Selector').join(',');
			},
			set: function (selectors) {
				this.children('Selector').forEach(function (child) {
					child.remove();
				});

				stylecow.utils.explodeTrim(',', selectors).forEach(function (selector, index) {
					this.add(stylecow.Selector.create(selector), index);
				}, this);
			}
		},

		addOldMsFilter: {
			value: function (filter) {
				var declaration = this.children('Declaration', '-ms-filter').pop();

				if (declaration) {
					if (declaration.value === 'none') {
						declaration.value = filter;
					} else if (declaration.content.indexOf(filter) === -1) {
						declaration.append(filter);
					}
				} else {
					declaration = this.add(stylecow.Declaration.create('-ms-filter:' + filter));
				}
			}
		},

		toString: {
			value: function () {
				var declarations = [];
				var selectors = [];

				this.forEach(function (child) {
					var string = child.toString();

					if (string) {
						if (child.is('Selector')) {
							selectors.push(child);
						} else {
							declarations.push(child);
						}
					}
				});

				declarations = "\t" + declarations.join("\n").replace(/\n/g, '\n' + "\t");

				return selectors.join(', ') + " {\n" + declarations + "\n}";
			}
		},

		toCode: {
			value: function (style) {
				var declarations = [];
				var selectors = [];

				this.forEach(function (child) {
					var string = child.toCode(style);

					if (string) {
						if (child.is('Selector')) {
							selectors.push(string);
						} else {
							declarations.push(string);
						}
					}
				});

				declarations = stylecow.utils.arrayUnique(declarations);
				selectors = stylecow.utils.arrayUnique(selectors);

				if (!declarations.length) {
					return '';
				}

				declarations = declarations.join(style.linebreak);

				if (style.indent) {
					declarations = style.indent + declarations.replace(/\n/g, '\n' + style.indent);
				}

				return selectors.join(style.selectorJoiner) + style.rulesetStart + declarations + style.rulesetEnd;
			}
		}
	});
})(require('../index'));

},{"../index":14}],12:[function(require,module,exports){
(function (stylecow) {

	stylecow.Selector = function (name) {
		this.type = 'Selector';
		this.name = name;
	};

	stylecow.Selector.create = function (string) {
		return new stylecow.Selector(string);
	};

	stylecow.Selector.prototype = Object.create(stylecow.Base, {

		parseChild: {
			value: function (string) {
				if (/\w\(/.test(string)) {
					return stylecow.Function.create(string);
				}

				return stylecow.Keyword.create(string);
			}
		},

		name: {
			get: function () {
				return this.join('');
			},
			set: function (name) {
				this.content = stylecow.utils.parseSelector(name);
			}
		},

		toString: {
			value: function () {
				return this.name;
			}
		},

		toCode: {
			value: function (style) {
				return this.map(function (child) {
					return child.toCode(style);
				}).join('');
			}
		}
	});
})(require('../index'));

},{"../index":14}],13:[function(require,module,exports){
(function (stylecow) {

	stylecow.Value = function (name) {
		this.type = 'Value';
		this.name = name;
	};

	stylecow.Value.create = function (string) {
		return new stylecow.Value(string);
	};

	stylecow.Value.prototype = Object.create(stylecow.Base, {

		parseChild: {
			value: function (string) {
				if (/^[\w\.-]+\(/.test(string)) {
					return stylecow.Function.create(string);
				}

				return stylecow.Keyword.create(string);
			}
		},

		name: {
			get: function () {
				return this.join(' ');
			},
			set: function (name) {
				this.content = stylecow.utils.explodeTrim(' ', name);
			}
		},

		toString: {
			value: function () {
				return this.name;
			}
		}
	});
})(require('../index'));

},{"../index":14}],14:[function(require,module,exports){
(function (__dirname){
(function (stylecow) {
	var fs = require('fs');

	//CSS elements
	require('./css/base');
	require('./css/comment');
	require('./css/import');
	require('./css/function');
	require('./css/root');
	require('./css/declaration');
	require('./css/keyword');
	require('./css/value');
	require('./css/rule');
	require('./css/selector');
	require('./css/at-rule');

	//Utils
	require('./utils');
	require('./config');


	//Properties
	stylecow.pluginPrefix = 'stylecow-plugin-';


	//Create from code string
	stylecow.create = function (code) {
		return stylecow.Root.create(code);
	};


	//Read a file
	stylecow.readFile = function (file) {
		return stylecow.create(fs.readFileSync(file, 'utf8')).setData('sourceFile', file);
	};


	//Get default configuration
	stylecow.getDefaults = function () {
		return stylecow.config.defaults;
	};


	//Get a specific code style
	stylecow.getCodeStyle = function (name) {
		return stylecow.config.codeStyles[name];
	};


	//Get all locally installed plugins
	stylecow.getInstalledPlugins = function () {
		var node_modules = __dirname + '/../node_modules';
		var len = stylecow.pluginPrefix.length;

		return fs.readdirSync(node_modules).filter(function (value) {
			return value.slice(0, len) === stylecow.pluginPrefix;
		}).map(function (value) {
			return value.slice(len);
		}).sort();
	};


	//Get all available plugins from npm
	stylecow.getAllPlugins = function (callback) {
		loadNpm(function (npm) {
			var len = stylecow.pluginPrefix.length;

			//Hack to silence npm
			var log = console.log;
			console.log = function () {};

			npm.commands.search([stylecow.pluginPrefix], function (err, data) {
				//restore console.log
				console.log = log;

				if (!err) {
					var all = [];

					for (var i in data) {
						all.push({
							name: data[i].name.substr(len),
							description: data[i].description,
							version: data[i].version
						});
					}

					callback(all.sort());
				}
			});
		});
	};


	//Manage plugins (install, uninstall, update, etc)
	stylecow.managePlugins = function (action, plugins, callback) {
		loadNpm(function (npm) {
			var packages = plugins.map(function (plugin) {
				if (plugin[0] === '.') {
					return plugin;
				}

				return stylecow.pluginPrefix + plugin;
			});

			npm.commands[action](packages, function (err, data) {
				if (!err) {
					callback();
				}
			});
		});
	};

})(require('./index'));


//Private functions

function loadNpm (callback) {
	var npm = require('npm');
	var path = require('path');

	npm.load({
		prefix: path.dirname(__dirname)
	}, function (err) {
		if (err) {
			return console.error(err);
		}

		callback(npm);
	});
}

}).call(this,"/node_modules/stylecow/lib")
},{"./config":2,"./css/at-rule":3,"./css/base":4,"./css/comment":5,"./css/declaration":6,"./css/function":7,"./css/import":8,"./css/keyword":9,"./css/root":10,"./css/rule":11,"./css/selector":12,"./css/value":13,"./index":14,"./utils":15,"fs":56,"npm":17,"path":86}],15:[function(require,module,exports){
(function (stylecow) {

	stylecow.utils = {
		forEach: function (items, callback, self) {
			if (!items) {
				return;
			}

			self = self || this;

			for (var k in items) {
				if (items.hasOwnProperty(k)) {
					callback.call(self, items[k], k);
				}
			}
		},

		explode: function (delimiter, string, limit) {
			if (!string) {
				return [];
			}

			if (!(delimiter instanceof Function)) {
				var stringDelimiter = delimiter;

				delimiter = function (buffer, currChar, array) {
					if (currChar === stringDelimiter) {
						array.push(buffer);
						return true;
					}
				};
			}

			var col = 0,
				length = string.length,
				currChar = null,
				previousChar = null,
				nextChar = string[col],
				buffer = '',
				status = [],
				array = [];

			while (col < length) {
				previousChar = currChar;
				currChar = nextChar;
				col ++;
				nextChar = (col === length) ? null : string[col];

				if (!status.length && delimiter(buffer, currChar, array)) {
					buffer = '';

					if (array.length === limit -1) {
						array.push(string.substr(col));
						break;
					}

					continue;
				}

				buffer += currChar;

				switch (currChar) {
					case '"':
						switch (status[0]) {
							case 'simpleQuote':
							case 'comment':
								break;

							case 'doubleQuote':
								if (previousChar !== '\\') {
									status.shift();
								}
								break;

							default:
								status.unshift('doubleQuote');
						}
						break;

					case "'":
						switch (status[0]) {
							case 'doubleQuote':
							case 'comment':
								break;

							case 'simpleQuote':
								if (previousChar !== '\\') {
									status.shift();
								}
								break;

							default:
								status.unshift('simpleQuote');
						}
						break;

					case '(':
						switch (status[0]) {
							case 'simpleQuote':
							case 'doubleQuote':
							case 'comment':
								break;

							default:
								status.unshift('parenthesis');
						}
						break;

					case ')':
						switch (status[0]) {
							case 'parenthesis':
								status.shift();
								break;
						}
						break;

					case '{':
						switch (status[0]) {
							case 'simpleQuote':
							case 'doubleQuote':
							case 'comment':
								break;

							default:
								status.unshift('brackets');
						}
						break;

					case '}':
						switch (status[0]) {
							case 'brackets':
								status.shift();
								break;
						}
						break;

					case ';':
						switch (status[0]) {
							case 'simpleQuote':
							case 'doubleQuote':
							case 'comment':
								break;
						}
						break;

					case '/':
						if (status[0] !== 'comment') {
							if (nextChar === '*') {
								status.unshift('comment');

								if (string[col+1] === '/') {
									col++;
								}
							}
						} else if (previousChar === '*') {
							status.shift();
						}
						break;
				}
			}

			if (buffer) {
				array.push(buffer);
			}

			return array;
		},

		explodeTrim: function (delimiter, string, limit) {
			return stylecow.utils.explode(delimiter, string, limit)
				.map(function (value) {
					return value.trim();
				})
				.filter(function (value) {
					return value ? true : false;
				});
		},

		arrayUnique: function (array) {
			var i, k, a = [];

			for (i = array.length - 1; i >= 0; i--) {
				k = a.indexOf(array[i]);

				if (k !== -1) {
					a.splice(k, 1);
				}

				a.push(array[i]);
			}

			return a;
		},

		parseCode: function (code, parent) {
			if (!parent) {
				parent = new stylecow.Root();
			}

			var child = parent, status = ['root'], buffer = '';

			code = code.split('\n');
			code.unshift('');

			for (var line = 0, totalLines = code.length; line < totalLines; line++) {
				if (status[0] === 'comment') {
					code[line] += '\n';
				}

				var stringLine = code[line],
					col = 0,
					length = stringLine.length,
					currChar = null,
					previousChar = null,
					nextChar = stringLine[col],
					newChild;

				while (col < length) {
					previousChar = currChar;
					currChar = nextChar;
					col ++;
					nextChar = (col === length) ? null : stringLine[col];

					buffer += currChar;

					switch (currChar) {
						case '"':
							switch (status[0]) {
								case 'simpleQuote':
								case 'comment':
									break;

								case 'doubleQuote':
									if (previousChar !== '\\') {
										status.shift();
									}
									break;

								default:
									status.unshift('doubleQuote');
							}
							break;

						case "'":
							switch (status[0]) {
								case 'doubleQuote':
								case 'comment':
									break;

								case 'simpleQuote':
									if (previousChar !== '\\') {
										status.shift();
									}
									break;

								default:
									status.unshift('simpleQuote');
							}
							break;

						case '(':
							switch (status[0]) {
								case 'simpleQuote':
								case 'doubleQuote':
								case 'comment':
									break;

								default:
									status.unshift('parenthesis');
							}
							break;

						case ')':
							switch (status[0]) {
								case 'parenthesis':
									status.shift();
									break;
							}
							break;

						case '{':
							switch (status[0]) {
								case 'root':
								case 'selector':
								case 'rules':
									var matches = buffer.trim().match(/^@([^\s]+)\s(.*)$/m);

									if (matches) {
										newChild = new stylecow.AtRule(matches[1]);
										buffer = matches[2];
									} else {
										newChild = new stylecow.Rule();
									}

									child = child.add(newChild).setData('sourceColumn', col).setData('sourceLine', line);
									child.selector = buffer.slice(0, -1);

									buffer = '';
									status.unshift('rules');
									break;
							}
							break;

						case '}':
							switch (status[0]) {
								case 'rules':
									buffer = buffer.slice(0, -1);

									if (buffer.trim()) {
										child.add(buffer).setData('sourceColumn', col).setData('sourceLine', line);
									}

									buffer = '';
									status.shift();
									child = child.parent;
									break;
							}
							break;

						case ';':
							switch (status[0]) {
								case 'root':
								case 'selector':

									if (buffer.indexOf('@import') !== -1) {
										newChild = stylecow.Import.create(buffer);
									} else {
										newChild = stylecow.Declaration.create(buffer);
									}

									newChild.setData('sourceColumn', col).setData('sourceLine', line);

									buffer = '';

									child.add(newChild);
									break;

								case 'rules':
									child.add(buffer.slice(0, -1)).setData('sourceColumn', col).setData('sourceLine', line);
									buffer = '';
									break;
							}
							break;

						case '/':
							if (status[0] !== 'comment') {
								if (nextChar === '*') {
									status.unshift('comment');

									var nextCol = col+1;
									var nextNextChar = (nextCol === length) ? null : stringLine[nextCol];

									if (nextNextChar === '/') {
										col++;
									}
								}
							} else if (previousChar === '*') {
								child.add(stylecow.Comment.create(buffer)).setData('sourceColumn', col).setData('sourceLine', line);
								buffer = '';
								status.shift();
							}
							break;

						default:
							if (!status.length) {
								status = ['root'];
							}
					}
				}
			}

			if (buffer.trim() && (status[0] === 'root')) {
				child.add(stylecow.Declaration.create(buffer));
			}

			return parent;
		},

		parseSelector: function (code) {
			if (!code) {
				return [];
			}

			var length = code.length,
				col = 0,
				pieces = [],
				status = [],
				buffer = '',
				previousChar = null,
				currChar = null;

			while (col < length) {
				previousChar = currChar;
				currChar = code[col];
				col++;

				switch (currChar) {
					case '(':
						if (status[0] !== 'quote') {
							status.unshift('parenthesis');
						}

						buffer += currChar;
						break;

					case ')':
						buffer += currChar;

						if (status[0] === 'parenthesis') {
							status.shift();
							pieces.push(buffer);
							buffer = '';
						}
						break;

					case '"':
						if (status[0] === 'quote') {
							status.shift();
						} else {
							status.unshift('quote');
						}

						buffer += currChar;
						break;

					case ' ':
						switch (status[0]) {
							case 'quote':
							case 'parenthesis':
								buffer += currChar;
								break;

							case 'space':
							case 'relation':
								break;

							default:
								status.unshift('space');

								if (buffer) {
									pieces.push(buffer);
									buffer = '';
								}

								buffer += currChar;
						}
						break;

					case '>':
					case '+':
					case '~':
						switch (status[0]) {
							case 'quote':
							case 'parenthesis':
								buffer += currChar;
								break;

							case 'space':
								status[0] = 'relation';
								buffer = currChar;
								break;

							default:
								status.unshift('relation');
								buffer += currChar;

						}
						break;

					case '.':
					case '#':
						switch (status[0]) {
							case 'quote':
							case 'parenthesis':
								break;

							case 'space':
							case 'relation':
								if (currChar !== ' ' && buffer) {
									pieces.push(buffer);
									status.shift();
									buffer = '';
								}
								break;

							default:
								if (buffer) {
									pieces.push(buffer);
									buffer = '';
								}

						}

						buffer += currChar;
						break;

					case ':':
						switch (status[0]) {
							case 'quote':
							case 'parenthesis':
								break;

							case 'space':
							case 'relation':
								if (currChar !== ' ' && buffer) {
									pieces.push(buffer);
									status.shift();
									buffer = '';
								}
								break;

							default:
								if (previousChar !== ':' && buffer) {
									pieces.push(buffer);
									buffer = '';
								}
						}

						buffer += currChar;
						break;

					default:
						switch (status[0]) {
							case 'space':
							case 'relation':
								if (currChar !== ' ' && buffer) {
									pieces.push(buffer);
									status.shift();
									buffer = '';
								}
								break;
						}

						buffer += currChar;
				}
			}

			if (buffer) {
				pieces.push(buffer);
			}

			return pieces;
		}
	};

})(require('./index'));

},{"./index":14}],16:[function(require,module,exports){
(function (process){

;(function () { // wrapper in case we're in module_context mode

// windows: running "npm blah" in this folder will invoke WSH, not node.
if (typeof WScript !== "undefined") {
  WScript.echo("npm does not work when run\n"
              +"with the Windows Scripting Host\n\n"
              +"'cd' to a different directory,\n"
              +"or type 'npm.cmd <args>',\n"
              +"or type 'node npm <args>'.")
  WScript.quit(1)
  return
}


process.title = "npm"

var log = require("npmlog")
log.pause() // will be unpaused when config is loaded.
log.info("it worked if it ends with", "ok")

var path = require("path")
  , npm = require("../lib/npm.js")
  , npmconf = require("npmconf")
  , errorHandler = require("../lib/utils/error-handler.js")

  , configDefs = npmconf.defs
  , shorthands = configDefs.shorthands
  , types = configDefs.types
  , nopt = require("nopt")

// if npm is called as "npmg" or "npm_g", then
// run in global mode.
if (path.basename(process.argv[1]).slice(-1)  === "g") {
  process.argv.splice(1, 1, "npm", "-g")
}

log.verbose("cli", process.argv)

var conf = nopt(types, shorthands)
npm.argv = conf.argv.remain
if (npm.deref(npm.argv[0])) npm.command = npm.argv.shift()
else conf.usage = true


if (conf.version) {
  console.log(npm.version)
  return
}

if (conf.versions) {
  npm.command = "version"
  conf.usage = false
  npm.argv = []
}

log.info("using", "npm@%s", npm.version)
log.info("using", "node@%s", process.version)

process.on("uncaughtException", errorHandler)

if (conf.usage && npm.command !== "help") {
  npm.argv.unshift(npm.command)
  npm.command = "help"
}

// now actually fire up npm and run the command.
// this is how to use npm programmatically:
conf._exit = true
npm.load(conf, function (er) {
  if (er) return errorHandler(er)
  npm.commands[npm.command](npm.argv, errorHandler)
})

})()

}).call(this,require('_process'))
},{"../lib/npm.js":17,"../lib/utils/error-handler.js":18,"_process":87,"nopt":30,"npmconf":44,"npmlog":45,"path":86}],17:[function(require,module,exports){
(function (process,__dirname){
;(function(){
// windows: running "npm blah" in this folder will invoke WSH, not node.
if (typeof WScript !== "undefined") {
  WScript.echo("npm does not work when run\n"
              +"with the Windows Scripting Host\n\n"
              +"'cd' to a different directory,\n"
              +"or type 'npm.cmd <args>',\n"
              +"or type 'node npm <args>'.")
  WScript.quit(1)
  return
}


// monkey-patch support for 0.6 child processes
require('child-process-close')

var EventEmitter = require("events").EventEmitter
  , npm = module.exports = new EventEmitter()
  , npmconf = require("npmconf")
  , log = require("npmlog")
  , fs = require("graceful-fs")
  , path = require("path")
  , abbrev = require("abbrev")
  , which = require("which")
  , semver = require("semver")
  , RegClient = require("npm-registry-client")
  , charSpin = require("char-spinner")

npm.config = {
  loaded: false,
  get: function() {
    throw new Error('npm.load() required')
  },
  set: function() {
    throw new Error('npm.load() required')
  }
}

npm.commands = {}

npm.rollbacks = []

try {
  var pv = process.version.replace(/^v/, '')
  // startup, ok to do this synchronously
  var j = JSON.parse(fs.readFileSync(
    path.join(__dirname, "../package.json"))+"")
  npm.version = j.version
} catch (ex) {
  try {
    log.info("error reading version", ex)
  } catch (er) {}
  npm.version = ex
}

var commandCache = {}
  // short names for common things
  , aliases = { "rm" : "uninstall"
              , "r" : "uninstall"
              , "un" : "uninstall"
              , "unlink" : "uninstall"
              , "remove" : "uninstall"
              , "rb" : "rebuild"
              , "list" : "ls"
              , "la" : "ls"
              , "ll" : "ls"
              , "ln" : "link"
              , "i" : "install"
              , "isntall" : "install"
              , "up" : "update"
              , "c" : "config"
              , "info" : "view"
              , "show" : "view"
              , "find" : "search"
              , "s" : "search"
              , "se" : "search"
              , "author" : "owner"
              , "home" : "docs"
              , "issues": "bugs"
              , "unstar": "star" // same function
              , "apihelp" : "help"
              , "login": "adduser"
              , "add-user": "adduser"
              , "tst": "test"
              , "t": "test"
              , "find-dupes": "dedupe"
              , "ddp": "dedupe"
              , "v": "view"
              }

  , aliasNames = Object.keys(aliases)
  // these are filenames in .
  , cmdList = [ "install"
              , "uninstall"
              , "cache"
              , "config"
              , "set"
              , "get"
              , "update"
              , "outdated"
              , "prune"
              , "submodule"
              , "pack"
              , "dedupe"

              , "rebuild"
              , "link"

              , "publish"
              , "star"
              , "stars"
              , "tag"
              , "adduser"
              , "unpublish"
              , "owner"
              , "deprecate"
              , "shrinkwrap"

              , "help"
              , "help-search"
              , "ls"
              , "search"
              , "view"
              , "init"
              , "version"
              , "edit"
              , "explore"
              , "docs"
              , "repo"
              , "bugs"
              , "faq"
              , "root"
              , "prefix"
              , "bin"
              , "whoami"

              , "test"
              , "stop"
              , "start"
              , "restart"
              , "run-script"
              , "completion"
              ]
  , plumbing = [ "build"
               , "unbuild"
               , "isntall"
               , "xmas"
               , "substack"
               , "visnup"
               ]
  , fullList = npm.fullList = cmdList.concat(aliasNames).filter(function (c) {
      return plumbing.indexOf(c) === -1
    })
  , abbrevs = abbrev(fullList)

npm.spinner =
  { int: null
  , started: false
  , start: function () {
      if (npm.spinner.int) return
      var c = npm.config.get("spin")
      if (!c) return
      var stream = npm.config.get("logstream")
      var opt = { tty: c !== "always", stream: stream }
      opt.cleanup = !npm.spinner.started
      npm.spinner.int = charSpin(opt)
      npm.spinner.started = true
    }
  , stop: function () {
      clearInterval(npm.spinner.int)
      npm.spinner.int = null
    }
  }

Object.keys(abbrevs).concat(plumbing).forEach(function addCommand (c) {
  Object.defineProperty(npm.commands, c, { get : function () {
    if (!loaded) throw new Error(
      "Call npm.load(config, cb) before using this command.\n"+
      "See the README.md or cli.js for example usage.")
    var a = npm.deref(c)
    if (c === "la" || c === "ll") {
      npm.config.set("long", true)
    }

    npm.command = c
    if (commandCache[a]) return commandCache[a]

    var cmd = require(__dirname+"/"+a+".js")

    commandCache[a] = function () {
      var args = Array.prototype.slice.call(arguments, 0)
      if (typeof args[args.length - 1] !== "function") {
        args.push(defaultCb)
      }
      if (args.length === 1) args.unshift([])

      npm.registry.version = npm.version
      if (!npm.registry.refer) {
        npm.registry.refer = [a].concat(args[0]).map(function (arg) {
          // exclude anything that might be a URL, path, or private module
          // Those things will always have a slash in them somewhere
          if (arg && arg.match && arg.match(/\/|\\/)) {
            return "[REDACTED]"
          } else {
            return arg
          }
        }).filter(function (arg) {
          return arg && arg.match
        }).join(" ")
      }

      cmd.apply(npm, args)
    }

    Object.keys(cmd).forEach(function (k) {
      commandCache[a][k] = cmd[k]
    })

    return commandCache[a]
  }, enumerable: fullList.indexOf(c) !== -1 })

  // make css-case commands callable via camelCase as well
  if (c.match(/\-([a-z])/)) {
    addCommand(c.replace(/\-([a-z])/g, function (a, b) {
      return b.toUpperCase()
    }))
  }
})

function defaultCb (er, data) {
  if (er) console.error(er.stack || er.message)
  else console.log(data)
}

npm.deref = function (c) {
  if (!c) return ""
  if (c.match(/[A-Z]/)) c = c.replace(/([A-Z])/g, function (m) {
    return "-" + m.toLowerCase()
  })
  if (plumbing.indexOf(c) !== -1) return c
  var a = abbrevs[c]
  if (aliases[a]) a = aliases[a]
  return a
}

var loaded = false
  , loading = false
  , loadErr = null
  , loadListeners = []

function loadCb (er) {
  loadListeners.forEach(function (cb) {
    process.nextTick(cb.bind(npm, er, npm))
  })
  loadListeners.length = 0
}

npm.load = function (cli, cb_) {
  if (!cb_ && typeof cli === "function") cb_ = cli , cli = {}
  if (!cb_) cb_ = function () {}
  if (!cli) cli = {}
  loadListeners.push(cb_)
  if (loaded || loadErr) return cb(loadErr)
  if (loading) return
  loading = true
  var onload = true

  function cb (er) {
    if (loadErr) return
    loadErr = er
    if (er) return cb_(er)
    if (npm.config.get("force")) {
      log.warn("using --force", "I sure hope you know what you are doing.")
    }
    npm.config.loaded = true
    loaded = true
    loadCb(loadErr = er)
    if (onload = onload && npm.config.get("onload-script")) {
      require(onload)
      onload = false
    }
  }

  log.pause()

  load(npm, cli, cb)
}

function load (npm, cli, cb) {
  which(process.argv[0], function (er, node) {
    if (!er && node.toUpperCase() !== process.execPath.toUpperCase()) {
      log.verbose("node symlink", node)
      process.execPath = node
      process.installPrefix = path.resolve(node, "..", "..")
    }

    // look up configs
    //console.error("about to look up configs")

    var builtin = path.resolve(__dirname, "..", "npmrc")
    npmconf.load(cli, builtin, function (er, config) {
      if (er === config) er = null

      npm.config = config
      if (er) return cb(er)

      // if the "project" config is not a filename, and we're
      // not in global mode, then that means that it collided
      // with either the default or effective userland config
      if (!config.get("global")
          && config.sources.project
          && config.sources.project.type !== "ini") {
        log.verbose("config"
                   , "Skipping project config: %s. "
                   + "(matches userconfig)"
                   , config.localPrefix + "/.npmrc")
      }

      // Include npm-version and node-version in user-agent
      var ua = config.get("user-agent") || ""
      ua = ua.replace(/\{node-version\}/gi, process.version)
      ua = ua.replace(/\{npm-version\}/gi, npm.version)
      ua = ua.replace(/\{platform\}/gi, process.platform)
      ua = ua.replace(/\{arch\}/gi, process.arch)
      config.set("user-agent", ua)

      var color = config.get("color")

      log.level = config.get("loglevel")
      log.heading = config.get("heading") || "npm"
      log.stream = config.get("logstream")

      switch (color) {
        case "always":
          log.enableColor()
          npm.color = true
          break
        case false:
          log.disableColor()
          npm.color = false
          break
        default:
          var tty = require("tty")
          if (process.stdout.isTTY) npm.color = true
          else if (!tty.isatty) npm.color = true
          else if (tty.isatty(1)) npm.color = true
          else npm.color = false
          break
      }

      log.resume()

      // at this point the configs are all set.
      // go ahead and spin up the registry client.
      npm.registry = new RegClient(npm.config)

      var umask = npm.config.get("umask")
      npm.modes = { exec: 0777 & (~umask)
                  , file: 0666 & (~umask)
                  , umask: umask }

      var gp = Object.getOwnPropertyDescriptor(config, "globalPrefix")
      Object.defineProperty(npm, "globalPrefix", gp)

      var lp = Object.getOwnPropertyDescriptor(config, "localPrefix")
      Object.defineProperty(npm, "localPrefix", lp)

      return cb(null, npm)
    })
  })
}

Object.defineProperty(npm, "prefix",
  { get : function () {
      return npm.config.get("global") ? npm.globalPrefix : npm.localPrefix
    }
  , set : function (r) {
      var k = npm.config.get("global") ? "globalPrefix" : "localPrefix"
      return npm[k] = r
    }
  , enumerable : true
  })

Object.defineProperty(npm, "bin",
  { get : function () {
      if (npm.config.get("global")) return npm.globalBin
      return path.resolve(npm.root, ".bin")
    }
  , enumerable : true
  })

Object.defineProperty(npm, "globalBin",
  { get : function () {
      var b = npm.globalPrefix
      if (process.platform !== "win32") b = path.resolve(b, "bin")
      return b
    }
  })

Object.defineProperty(npm, "dir",
  { get : function () {
      if (npm.config.get("global")) return npm.globalDir
      return path.resolve(npm.prefix, "node_modules")
    }
  , enumerable : true
  })

Object.defineProperty(npm, "globalDir",
  { get : function () {
      return (process.platform !== "win32")
           ? path.resolve(npm.globalPrefix, "lib", "node_modules")
           : path.resolve(npm.globalPrefix, "node_modules")
    }
  , enumerable : true
  })

Object.defineProperty(npm, "root",
  { get : function () { return npm.dir } })

Object.defineProperty(npm, "cache",
  { get : function () { return npm.config.get("cache") }
  , set : function (r) { return npm.config.set("cache", r) }
  , enumerable : true
  })

var tmpFolder
var crypto = require("crypto")
var rand = crypto.randomBytes(6)
                 .toString("base64")
                 .replace(/\//g, '_')
                 .replace(/\+/, '-')
Object.defineProperty(npm, "tmp",
  { get : function () {
      if (!tmpFolder) tmpFolder = "npm-" + process.pid + "-" + rand
      return path.resolve(npm.config.get("tmp"), tmpFolder)
    }
  , enumerable : true
  })

// the better to repl you with
Object.getOwnPropertyNames(npm.commands).forEach(function (n) {
  if (npm.hasOwnProperty(n) || n === "config") return

  Object.defineProperty(npm, n, { get: function () {
    return function () {
      var args = Array.prototype.slice.call(arguments, 0)
        , cb = defaultCb

      if (args.length === 1 && Array.isArray(args[0])) {
        args = args[0]
      }

      if (typeof args[args.length - 1] === "function") {
        cb = args.pop()
      }

      npm.commands[n](args, cb)
    }
  }, enumerable: false, configurable: true })
})

if (require.main === module) {
  require("../bin/npm-cli.js")
}
})()

}).call(this,require('_process'),"/node_modules/stylecow/node_modules/npm/lib")
},{"../bin/npm-cli.js":16,"_process":87,"abbrev":19,"char-spinner":22,"child-process-close":23,"crypto":66,"events":78,"graceful-fs":25,"npm-registry-client":32,"npmconf":44,"npmlog":45,"path":86,"semver":49,"tty":105,"which":55}],18:[function(require,module,exports){
(function (process){

module.exports = errorHandler

var cbCalled = false
  , log = require("npmlog")
  , npm = require("../npm.js")
  , rm = require("rimraf")
  , itWorked = false
  , path = require("path")
  , wroteLogFile = false
  , exitCode = 0
  , rollbacks = npm.rollbacks
  , chain = require("slide").chain


process.on("exit", function (code) {
  // console.error("exit", code)
  if (!npm.config || !npm.config.loaded) return
  if (code) itWorked = false
  if (itWorked) log.info("ok")
  else {
    if (!cbCalled) {
      log.error("", "cb() never called!")
    }

    if (wroteLogFile) {
      // just a line break
      if (log.levels[log.level] <= log.levels.error) console.error("")

      log.error("",
                ["Please include the following file with any support request:"
                ,"    " + path.resolve("npm-debug.log")
                ].join("\n"))
      wroteLogFile = false
    }
    if (code) {
      log.error("code", code)
    }
  }

  var doExit = npm.config.get("_exit")
  if (doExit) {
    // actually exit.
    if (exitCode === 0 && !itWorked) {
      exitCode = 1
    }
    if (exitCode !== 0) process.exit(exitCode)
  } else {
    itWorked = false // ready for next exit
  }
})

function exit (code, noLog) {
  exitCode = exitCode || process.exitCode || code

  var doExit = npm.config ? npm.config.get("_exit") : true
  log.verbose("exit", [code, doExit])
  if (log.level === "silent") noLog = true

  if (rollbacks.length) {
    chain(rollbacks.map(function (f) {
      return function (cb) {
        npm.commands.unbuild([f], true, cb)
      }
    }), function (er) {
      if (er) {
        log.error("error rolling back", er)
        if (!code) errorHandler(er)
        else reallyExit(er)
      } else {
        rm("npm-debug.log", reallyExit)
      }
    })
    rollbacks.length = 0
  }
  else if (code && !noLog) writeLogFile(reallyExit)
  else reallyExit()

  function reallyExit() {
    // truncate once it's been written.
    log.record.length = 0

    itWorked = !code

    // just emit a fake exit event.
    // if we're really exiting, then let it exit on its own, so that
    // in-process stuff can finish or clean up first.
    if (!doExit) process.emit("exit", code)
    npm.spinner.stop()
  }
}


function errorHandler (er) {
  // console.error("errorHandler", er)
  if (!npm.config || !npm.config.loaded) {
    // logging won't work unless we pretend that it's ready
    er = er || new Error("Exit prior to config file resolving.")
    console.error(er.stack || er.message)
  }

  if (cbCalled) {
    er = er || new Error("Callback called more than once.")
  }

  cbCalled = true
  if (!er) return exit(0)
  if (typeof er === "string") {
    log.error("", er)
    return exit(1, true)
  } else if (!(er instanceof Error)) {
    log.error("weird error", er)
    return exit(1, true)
  }

  var m = er.code || er.message.match(/^(?:Error: )?(E[A-Z]+)/)
  if (m && !er.code) er.code = m

  ; [ "type"
    , "fstream_path"
    , "fstream_unc_path"
    , "fstream_type"
    , "fstream_class"
    , "fstream_finish_call"
    , "fstream_linkpath"
    , "stack"
    , "fstream_stack"
    , "statusCode"
    , "pkgid"
    ].forEach(function (k) {
      var v = er[k]
      if (!v) return
      if (k === "fstream_stack") v = v.join("\n")
      log.verbose(k, v)
    })

  log.verbose("cwd", process.cwd())

  var os = require("os")
  // log.error("System", os.type() + " " + os.release())
  // log.error("command", process.argv.map(JSON.stringify).join(" "))
  // log.error("node -v", process.version)
  // log.error("npm -v", npm.version)
  log.error("", os.type() + " " + os.release())
  log.error("argv", process.argv.map(JSON.stringify).join(" "))
  log.error("node", process.version)
  log.error("npm ", "v" + npm.version)

  ; [ "file"
    , "path"
    , "code"
    , "errno"
    , "syscall"
    ].forEach(function (k) {
      var v = er[k]
      if (v) log.error(k, v)
    })

  // just a line break
  if (log.levels[log.level] <= log.levels.error) console.error("")

  switch (er.code) {
  case "ECONNREFUSED":
    log.error("", er)
    log.error("", ["\nIf you are behind a proxy, please make sure that the"
              ,"'proxy' config is set properly.  See: 'npm help config'"
              ].join("\n"))
    break

  case "EACCES":
  case "EPERM":
    log.error("", er)
    log.error("", ["\nPlease try running this command again as root/Administrator."
              ].join("\n"))
    break

  case "ELIFECYCLE":
    log.error("", er.message)
    log.error("", ["","Failed at the "+er.pkgid+" "+er.stage+" script."
              ,"This is most likely a problem with the "+er.pkgname+" package,"
              ,"not with npm itself."
              ,"Tell the author that this fails on your system:"
              ,"    "+er.script
              ,"You can get their info via:"
              ,"    npm owner ls "+er.pkgname
              ,"There is likely additional logging output above."
              ].join("\n"))
    break

  case "ENOGIT":
    log.error("", er.message)
    log.error("", ["","Failed using git."
              ,"This is most likely not a problem with npm itself."
              ,"Please check if you have git installed and in your PATH."
              ].join("\n"))
    break

  case "EJSONPARSE":
    log.error("", er.message)
    log.error("", "File: "+er.file)
    log.error("", ["Failed to parse package.json data."
              ,"package.json must be actual JSON, not just JavaScript."
              ,"","This is not a bug in npm."
              ,"Tell the package author to fix their package.json file."
              ].join("\n"), "JSON.parse")
    break

  // TODO(isaacs)
  // Add a special case here for E401 and E403 explaining auth issues?

  case "E404":
    var msg = [er.message]
    if (er.pkgid && er.pkgid !== "-") {
      msg.push("", "'"+er.pkgid+"' is not in the npm registry."
              ,"You should bug the author to publish it (or use the name yourself!)")
      if (er.parent) {
        msg.push("It was specified as a dependency of '"+er.parent+"'")
      }
      msg.push("\nNote that you can also install from a"
              ,"tarball, folder, http url, or git url.")
    }
    // There's no need to have 404 in the message as well.
    msg[0] = msg[0].replace(/^404\s+/, "")
    log.error("404", msg.join("\n"))
    break

  case "EPUBLISHCONFLICT":
    log.error("publish fail", ["Cannot publish over existing version."
              ,"Update the 'version' field in package.json and try again."
              ,""
              ,"To automatically increment version numbers, see:"
              ,"    npm help version"
              ].join("\n"))
    break

  case "EISGIT":
    log.error("git", [er.message
              ,"    "+er.path
              ,"Refusing to remove it. Update manually,"
              ,"or move it out of the way first."
              ].join("\n"))
    break

  case "ECYCLE":
    log.error("cycle", [er.message
              ,"While installing: "+er.pkgid
              ,"Found a pathological dependency case that npm cannot solve."
              ,"Please report this to the package author."
              ].join("\n"))
    break

  case "EBADPLATFORM":
    log.error("notsup", [er.message
              ,"Not compatible with your operating system or architecture: "+er.pkgid
              ,"Valid OS:    "+er.os.join(",")
              ,"Valid Arch:  "+er.cpu.join(",")
              ,"Actual OS:   "+process.platform
              ,"Actual Arch: "+process.arch
              ].join("\n"))
    break

  case "EEXIST":
    log.error([er.message
              ,"File exists: "+er.path
              ,"Move it away, and try again."].join("\n"))
    break

  case "ENEEDAUTH":
    log.error("need auth", [er.message
              ,"You need to authorize this machine using `npm adduser`"
              ].join("\n"))
    break

  case "EPEERINVALID":
    var peerErrors = Object.keys(er.peersDepending).map(function (peer) {
      return "Peer " + peer + " wants " + er.packageName + "@"
        + er.peersDepending[peer]
    })
    log.error("peerinvalid", [er.message].concat(peerErrors).join("\n"))
    break

  case "ECONNRESET":
  case "ENOTFOUND":
  case "ETIMEDOUT":
    log.error("network", [er.message
              ,"This is most likely not a problem with npm itself"
              ,"and is related to network connectivity."
              ,"In most cases you are behind a proxy or have bad network settings."
              ,"\nIf you are behind a proxy, please make sure that the"
              ,"'proxy' config is set properly.  See: 'npm help config'"
              ].join("\n"))
    break

  case "ENOPACKAGEJSON":
    log.error("package.json", [er.message
              ,"This is most likely not a problem with npm itself."
              ,"npm can't find a package.json file in your current directory."
              ].join("\n"))
    break

  case "ETARGET":
    log.error("notarget", [er.message
              ,"This is most likely not a problem with npm itself."
              ,"In most cases you or one of your dependencies are requesting"
              ,"a package version that doesn't exist."
              ].join("\n"))
    break

  case "ENOTSUP":
    if (er.required) {
      log.error("notsup", [er.message
                ,"Not compatible with your version of node/npm: "+er.pkgid
                ,"Required: "+JSON.stringify(er.required)
                ,"Actual:   "
                +JSON.stringify({npm:npm.version
                                ,node:npm.config.get("node-version")})
                ].join("\n"))
      break
    } // else passthrough

  case "ENOSPC":
    log.error("nospc", [er.message
              ,"This is most likely not a problem with npm itself"
              ,"and is related to insufficient space on your system."
              ].join("\n"))
    break

  case "EROFS":
    log.error("rofs", [er.message
              ,"This is most likely not a problem with npm itself"
              ,"and is related to the file system being read-only."
              ,"\nOften virtualized file systems, or other file systems"
              ,"that don't support symlinks, give this error."
              ].join("\n"))
    break

  default:
    log.error("", er.message || er)
    log.error("", ["", "If you need help, you may report this error at:"
                  ,"    <http://github.com/npm/npm/issues>"
                  ].join("\n"))
    break
  }

  exit(typeof er.errno === "number" ? er.errno : 1)
}

var writingLogFile = false
function writeLogFile (cb) {
  if (writingLogFile) return cb()
  writingLogFile = true
  wroteLogFile = true

  var fs = require("graceful-fs")
    , fstr = fs.createWriteStream("npm-debug.log")
    , os = require("os")
    , out = ""

  log.record.forEach(function (m) {
    var pref = [m.id, m.level]
    if (m.prefix) pref.push(m.prefix)
    pref = pref.join(" ")

    m.message.trim().split(/\r?\n/).map(function (line) {
      return (pref + " " + line).trim()
    }).forEach(function (line) {
      out += line + os.EOL
    })
  })

  fstr.end(out)
  fstr.on("close", cb)
}

}).call(this,require('_process'))
},{"../npm.js":17,"_process":87,"graceful-fs":25,"npmlog":45,"os":85,"path":86,"rimraf":48,"slide":53}],19:[function(require,module,exports){

module.exports = exports = abbrev.abbrev = abbrev

abbrev.monkeyPatch = monkeyPatch

function monkeyPatch () {
  Object.defineProperty(Array.prototype, 'abbrev', {
    value: function () { return abbrev(this) },
    enumerable: false, configurable: true, writable: true
  })

  Object.defineProperty(Object.prototype, 'abbrev', {
    value: function () { return abbrev(Object.keys(this)) },
    enumerable: false, configurable: true, writable: true
  })
}

function abbrev (list) {
  if (arguments.length !== 1 || !Array.isArray(list)) {
    list = Array.prototype.slice.call(arguments, 0)
  }
  for (var i = 0, l = list.length, args = [] ; i < l ; i ++) {
    args[i] = typeof list[i] === "string" ? list[i] : String(list[i])
  }

  // sort them lexicographically, so that they're next to their nearest kin
  args = args.sort(lexSort)

  // walk through each, seeing how much it has in common with the next and previous
  var abbrevs = {}
    , prev = ""
  for (var i = 0, l = args.length ; i < l ; i ++) {
    var current = args[i]
      , next = args[i + 1] || ""
      , nextMatches = true
      , prevMatches = true
    if (current === next) continue
    for (var j = 0, cl = current.length ; j < cl ; j ++) {
      var curChar = current.charAt(j)
      nextMatches = nextMatches && curChar === next.charAt(j)
      prevMatches = prevMatches && curChar === prev.charAt(j)
      if (!nextMatches && !prevMatches) {
        j ++
        break
      }
    }
    prev = current
    if (j === cl) {
      abbrevs[current] = current
      continue
    }
    for (var a = current.substr(0, j) ; j <= cl ; j ++) {
      abbrevs[a] = current
      a += current.charAt(j)
    }
  }
  return abbrevs
}

function lexSort (a, b) {
  return a === b ? 0 : a > b ? 1 : -1
}

},{}],20:[function(require,module,exports){

/**
 * References:
 *
 *   - http://en.wikipedia.org/wiki/ANSI_escape_code
 *   - http://www.termsys.demon.co.uk/vtansi.htm
 *
 */

/**
 * Module dependencies.
 */

var emitNewlineEvents = require('./newlines')
  , prefix = '\x1b[' // For all escape codes
  , suffix = 'm'     // Only for color codes

/**
 * The ANSI escape sequences.
 */

var codes = {
    up: 'A'
  , down: 'B'
  , forward: 'C'
  , back: 'D'
  , nextLine: 'E'
  , previousLine: 'F'
  , horizontalAbsolute: 'G'
  , eraseData: 'J'
  , eraseLine: 'K'
  , scrollUp: 'S'
  , scrollDown: 'T'
  , savePosition: 's'
  , restorePosition: 'u'
  , queryPosition: '6n'
  , hide: '?25l'
  , show: '?25h'
}

/**
 * Rendering ANSI codes.
 */

var styles = {
    bold: 1
  , italic: 3
  , underline: 4
  , inverse: 7
}

/**
 * The negating ANSI code for the rendering modes.
 */

var reset = {
    bold: 22
  , italic: 23
  , underline: 24
  , inverse: 27
}

/**
 * The standard, styleable ANSI colors.
 */

var colors = {
    white: 37
  , black: 30
  , blue: 34
  , cyan: 36
  , green: 32
  , magenta: 35
  , red: 31
  , yellow: 33
  , grey: 90
  , brightBlack: 90
  , brightRed: 91
  , brightGreen: 92
  , brightYellow: 93
  , brightBlue: 94
  , brightMagenta: 95
  , brightCyan: 96
  , brightWhite: 97
}


/**
 * Creates a Cursor instance based off the given `writable stream` instance.
 */

function ansi (stream, options) {
  if (stream._ansicursor) {
    return stream._ansicursor
  } else {
    return stream._ansicursor = new Cursor(stream, options)
  }
}
module.exports = exports = ansi

/**
 * The `Cursor` class.
 */

function Cursor (stream, options) {
  if (!(this instanceof Cursor)) {
    return new Cursor(stream, options)
  }
  if (typeof stream != 'object' || typeof stream.write != 'function') {
    throw new Error('a valid Stream instance must be passed in')
  }

  // the stream to use
  this.stream = stream

  // when 'enabled' is false then all the functions are no-ops except for write()
  this.enabled = options && options.enabled
  if (typeof this.enabled === 'undefined') {
    this.enabled = stream.isTTY
  }
  this.enabled = !!this.enabled

  // then `buffering` is true, then `write()` calls are buffered in
  // memory until `flush()` is invoked
  this.buffering = !!(options && options.buffering)
  this._buffer = []

  // controls the foreground and background colors
  this.fg = this.foreground = new Colorer(this, 0)
  this.bg = this.background = new Colorer(this, 10)

  // defaults
  this.Bold = false
  this.Italic = false
  this.Underline = false
  this.Inverse = false

  // keep track of the number of "newlines" that get encountered
  this.newlines = 0
  emitNewlineEvents(stream)
  stream.on('newline', function () {
    this.newlines++
  }.bind(this))
}
exports.Cursor = Cursor

/**
 * Helper function that calls `write()` on the underlying Stream.
 * Returns `this` instead of the write() return value to keep
 * the chaining going.
 */

Cursor.prototype.write = function (data) {
  if (this.buffering) {
    this._buffer.push(arguments)
  } else {
    this.stream.write.apply(this.stream, arguments)
  }
  return this
}

/**
 * Buffer `write()` calls into memory.
 *
 * @api public
 */

Cursor.prototype.buffer = function () {
  this.buffering = true
  return this
}

/**
 * Write out the in-memory buffer.
 *
 * @api public
 */

Cursor.prototype.flush = function () {
  this.buffering = false
  var str = this._buffer.map(function (args) {
    if (args.length != 1) throw new Error('unexpected args length! ' + args.length);
    return args[0];
  }).join('');
  this._buffer.splice(0); // empty
  this.write(str);
  return this
}


/**
 * The `Colorer` class manages both the background and foreground colors.
 */

function Colorer (cursor, base) {
  this.current = null
  this.cursor = cursor
  this.base = base
}
exports.Colorer = Colorer

/**
 * Write an ANSI color code, ensuring that the same code doesn't get rewritten.
 */

Colorer.prototype._setColorCode = function setColorCode (code) {
  var c = String(code)
  if (this.current === c) return
  this.cursor.enabled && this.cursor.write(prefix + c + suffix)
  this.current = c
  return this
}


/**
 * Set up the positional ANSI codes.
 */

Object.keys(codes).forEach(function (name) {
  var code = String(codes[name])
  Cursor.prototype[name] = function () {
    var c = code
    if (arguments.length > 0) {
      c = toArray(arguments).map(Math.round).join(';') + code
    }
    this.enabled && this.write(prefix + c)
    return this
  }
})

/**
 * Set up the functions for the rendering ANSI codes.
 */

Object.keys(styles).forEach(function (style) {
  var name = style[0].toUpperCase() + style.substring(1)
    , c = styles[style]
    , r = reset[style]

  Cursor.prototype[style] = function () {
    if (this[name]) return
    this.enabled && this.write(prefix + c + suffix)
    this[name] = true
    return this
  }

  Cursor.prototype['reset' + name] = function () {
    if (!this[name]) return
    this.enabled && this.write(prefix + r + suffix)
    this[name] = false
    return this
  }
})

/**
 * Setup the functions for the standard colors.
 */

Object.keys(colors).forEach(function (color) {
  var code = colors[color]

  Colorer.prototype[color] = function () {
    this._setColorCode(this.base + code)
    return this.cursor
  }

  Cursor.prototype[color] = function () {
    return this.foreground[color]()
  }
})

/**
 * Makes a beep sound!
 */

Cursor.prototype.beep = function () {
  this.enabled && this.write('\x07')
  return this
}

/**
 * Moves cursor to specific position
 */

Cursor.prototype.goto = function (x, y) {
  x = x | 0
  y = y | 0
  this.enabled && this.write(prefix + y + ';' + x + 'H')
  return this
}

/**
 * Resets the color.
 */

Colorer.prototype.reset = function () {
  this._setColorCode(this.base + 39)
  return this.cursor
}

/**
 * Resets all ANSI formatting on the stream.
 */

Cursor.prototype.reset = function () {
  this.enabled && this.write(prefix + '0' + suffix)
  this.Bold = false
  this.Italic = false
  this.Underline = false
  this.Inverse = false
  this.foreground.current = null
  this.background.current = null
  return this
}

/**
 * Sets the foreground color with the given RGB values.
 * The closest match out of the 216 colors is picked.
 */

Colorer.prototype.rgb = function (r, g, b) {
  var base = this.base + 38
    , code = rgb(r, g, b)
  this._setColorCode(base + ';5;' + code)
  return this.cursor
}

/**
 * Same as `cursor.fg.rgb(r, g, b)`.
 */

Cursor.prototype.rgb = function (r, g, b) {
  return this.foreground.rgb(r, g, b)
}

/**
 * Accepts CSS color codes for use with ANSI escape codes.
 * For example: `#FF000` would be bright red.
 */

Colorer.prototype.hex = function (color) {
  return this.rgb.apply(this, hex(color))
}

/**
 * Same as `cursor.fg.hex(color)`.
 */

Cursor.prototype.hex = function (color) {
  return this.foreground.hex(color)
}


// UTIL FUNCTIONS //

/**
 * Translates a 255 RGB value to a 0-5 ANSI RGV value,
 * then returns the single ANSI color code to use.
 */

function rgb (r, g, b) {
  var red = r / 255 * 5
    , green = g / 255 * 5
    , blue = b / 255 * 5
  return rgb5(red, green, blue)
}

/**
 * Turns rgb 0-5 values into a single ANSI color code to use.
 */

function rgb5 (r, g, b) {
  var red = Math.round(r)
    , green = Math.round(g)
    , blue = Math.round(b)
  return 16 + (red*36) + (green*6) + blue
}

/**
 * Accepts a hex CSS color code string (# is optional) and
 * translates it into an Array of 3 RGB 0-255 values, which
 * can then be used with rgb().
 */

function hex (color) {
  var c = color[0] === '#' ? color.substring(1) : color
    , r = c.substring(0, 2)
    , g = c.substring(2, 4)
    , b = c.substring(4, 6)
  return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)]
}

/**
 * Turns an array-like object into a real array.
 */

function toArray (a) {
  var i = 0
    , l = a.length
    , rtn = []
  for (; i<l; i++) {
    rtn.push(a[i])
  }
  return rtn
}

},{"./newlines":21}],21:[function(require,module,exports){

/**
 * Accepts any node Stream instance and hijacks its "write()" function,
 * so that it can count any newlines that get written to the output.
 *
 * When a '\n' byte is encountered, then a "newline" event will be emitted
 * on the stream, with no arguments. It is up to the listeners to determine
 * any necessary deltas required for their use-case.
 *
 * Ex:
 *
 *   var cursor = ansi(process.stdout)
 *     , ln = 0
 *   process.stdout.on('newline', function () {
 *    ln++
 *   })
 */

/**
 * Module dependencies.
 */

var assert = require('assert')
var NEWLINE = '\n'.charCodeAt(0)

function emitNewlineEvents (stream) {
  if (stream._emittingNewlines) {
    // already emitting newline events
    return
  }

  var write = stream.write

  stream.write = function (data) {
    // first write the data
    var rtn = write.apply(stream, arguments)

    if (stream.listeners('newline').length > 0) {
      var len = data.length
        , i = 0
      // now try to calculate any deltas
      if (typeof data == 'string') {
        for (; i<len; i++) {
          processByte(stream, data.charCodeAt(i))
        }
      } else {
        // buffer
        for (; i<len; i++) {
          processByte(stream, data[i])
        }
      }
    }

    return rtn
  }

  stream._emittingNewlines = true
}
module.exports = emitNewlineEvents


/**
 * Processes an individual byte being written to a stream
 */

function processByte (stream, b) {
  assert.equal(typeof b, 'number')
  if (b === NEWLINE) {
    stream.emit('newline')
  }
}

},{"assert":57}],22:[function(require,module,exports){
(function (process){
module.exports = spinner

function spinner(opt) {
  opt = opt || {}
  var str = opt.stream || process.stderr
  var tty = typeof opt.tty === 'boolean' ? opt.tty : true
  var string = opt.string || '/-\\|'
  var ms = typeof opt.interval === 'number' ? opt.interval : 50
  if (ms < 0) ms = 0
  if (tty && !str.isTTY) return false
  var CR = str.isTTY ? '\u001b[0G' : '\u000d';
  var CLEAR = str.isTTY ? '\u001b[2K' : '\u000d \u000d';

  var s = 0
  var sprite = string.split('')
  var wrote = false

  var delay = typeof opt.delay === 'number' ? opt.delay : 2

  var interval = setInterval(function() {
    if (--delay >= 0) return
    s = ++s % sprite.length
    var c = sprite[s]
    str.write(c + CR)
    wrote = true
  }, ms)

  var unref = typeof opt.unref === 'boolean' ? opt.unref : true
  if (unref && typeof interval.unref === 'function') {
    interval.unref()
  }

  var cleanup = typeof opt.cleanup === 'boolean' ? opt.cleanup : true
  if (cleanup) {
    process.on('exit', function() {
      if (wrote) {
          str.write(CLEAR);
      }
    })
  }

  module.exports.clear = function () {
    str.write(CLEAR);
  };
  
  return interval
}

module.exports.clear = function () {};



}).call(this,require('_process'))
},{"_process":87}],23:[function(require,module,exports){
(function (process){

var child_process = require('child_process');

// Re-export the child_process module.
module.exports = child_process;

// Only node versions up to v0.7.6 need this hook.
if (!/^v0\.([0-6]\.|7\.[0-6](\D|$))/.test(process.version))
  return;

// Do not add the hook if already hooked.
if (child_process.hasOwnProperty('_exit_hook'))
  return;

// Version the hook in case there is ever the need to release a 0.2.0.
child_process._exit_hook = 1;


function hook(name) {
  var orig = child_process[name];

  // Older node versions may not have all functions, e.g. fork().
  if (!orig)
    return;

  // Store the unhooked version.
  child_process['_original_' + name] = orig;

  // Do the actual hooking.
  child_process[name] = function() {
    var child = orig.apply(this, arguments);

    child.once('exit', function(code, signal) {
      process.nextTick(function() {
        child.emit('close', code, signal);
      });
    });

    return child;
  }
}

hook('spawn');
hook('fork');
hook('execFile');

// Don't hook 'exec': it calls `exports.execFile` internally, so hooking it
// would trigger the close event twice.

}).call(this,require('_process'))
},{"_process":87,"child_process":56}],24:[function(require,module,exports){
(function (process,__filename,__dirname){
// eeeeeevvvvviiiiiiillllll
// more evil than monkey-patching the native builtin?
// Not sure.

var mod = require("module")
var pre = '(function (exports, require, module, __filename, __dirname) { '
var post = '});'
var src = pre + process.binding('natives').fs + post
var vm = require('vm')
var fn = vm.runInThisContext(src)
return fn(exports, require, module, __filename, __dirname)

}).call(this,require('_process'),"/node_modules/stylecow/node_modules/npm/node_modules/graceful-fs/fs.js","/node_modules/stylecow/node_modules/npm/node_modules/graceful-fs")
},{"_process":87,"module":56,"vm":109}],25:[function(require,module,exports){
(function (process){
// Monkey-patching the fs module.
// It's ugly, but there is simply no other way to do this.
var fs = module.exports = require('./fs.js')

var assert = require('assert')

// fix up some busted stuff, mostly on windows and old nodes
require('./polyfills.js')

var util = require('util')

function noop () {}

var debug = noop
if (util.debuglog)
  debug = util.debuglog('gfs')
else if (/\bgfs\b/i.test(process.env.NODE_DEBUG || ''))
  debug = function() {
    var m = util.format.apply(util, arguments)
    m = 'GFS: ' + m.split(/\n/).join('\nGFS: ')
    console.error(m)
  }

if (/\bgfs\b/i.test(process.env.NODE_DEBUG || '')) {
  process.on('exit', function() {
    debug('fds', fds)
    debug(queue)
    assert.equal(queue.length, 0)
  })
}


var originalOpen = fs.open
fs.open = open

function open(path, flags, mode, cb) {
  if (typeof mode === "function") cb = mode, mode = null
  if (typeof cb !== "function") cb = noop
  new OpenReq(path, flags, mode, cb)
}

function OpenReq(path, flags, mode, cb) {
  this.path = path
  this.flags = flags
  this.mode = mode
  this.cb = cb
  Req.call(this)
}

util.inherits(OpenReq, Req)

OpenReq.prototype.process = function() {
  originalOpen.call(fs, this.path, this.flags, this.mode, this.done)
}

var fds = {}
OpenReq.prototype.done = function(er, fd) {
  debug('open done', er, fd)
  if (fd)
    fds['fd' + fd] = this.path
  Req.prototype.done.call(this, er, fd)
}


var originalReaddir = fs.readdir
fs.readdir = readdir

function readdir(path, cb) {
  if (typeof cb !== "function") cb = noop
  new ReaddirReq(path, cb)
}

function ReaddirReq(path, cb) {
  this.path = path
  this.cb = cb
  Req.call(this)
}

util.inherits(ReaddirReq, Req)

ReaddirReq.prototype.process = function() {
  originalReaddir.call(fs, this.path, this.done)
}

ReaddirReq.prototype.done = function(er, files) {
  if (files && files.sort)
    files = files.sort()
  Req.prototype.done.call(this, er, files)
  onclose()
}


var originalClose = fs.close
fs.close = close

function close (fd, cb) {
  debug('close', fd)
  if (typeof cb !== "function") cb = noop
  delete fds['fd' + fd]
  originalClose.call(fs, fd, function(er) {
    onclose()
    cb(er)
  })
}


var originalCloseSync = fs.closeSync
fs.closeSync = closeSync

function closeSync (fd) {
  try {
    return originalCloseSync(fd)
  } finally {
    onclose()
  }
}


// Req class
function Req () {
  // start processing
  this.done = this.done.bind(this)
  this.failures = 0
  this.process()
}

Req.prototype.done = function (er, result) {
  var tryAgain = false
  if (er) {
    var code = er.code
    var tryAgain = code === "EMFILE"
    if (process.platform === "win32")
      tryAgain = tryAgain || code === "OK"
  }

  if (tryAgain) {
    this.failures ++
    enqueue(this)
  } else {
    var cb = this.cb
    cb(er, result)
  }
}

var queue = []

function enqueue(req) {
  queue.push(req)
  debug('enqueue %d %s', queue.length, req.constructor.name, req)
}

function onclose() {
  var req = queue.shift()
  if (req) {
    debug('process', req.constructor.name, req)
    req.process()
  }
}

}).call(this,require('_process'))
},{"./fs.js":24,"./polyfills.js":26,"_process":87,"assert":57,"util":108}],26:[function(require,module,exports){
(function (process){
var fs = require('./fs.js')
var constants = require('constants')

var origCwd = process.cwd
var cwd = null
process.cwd = function() {
  if (!cwd)
    cwd = origCwd.call(process)
  return cwd
}
var chdir = process.chdir
process.chdir = function(d) {
  cwd = null
  chdir.call(process, d)
}

// (re-)implement some things that are known busted or missing.

// lchmod, broken prior to 0.6.2
// back-port the fix here.
if (constants.hasOwnProperty('O_SYMLINK') &&
    process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
  fs.lchmod = function (path, mode, callback) {
    callback = callback || noop
    fs.open( path
           , constants.O_WRONLY | constants.O_SYMLINK
           , mode
           , function (err, fd) {
      if (err) {
        callback(err)
        return
      }
      // prefer to return the chmod error, if one occurs,
      // but still try to close, and report closing errors if they occur.
      fs.fchmod(fd, mode, function (err) {
        fs.close(fd, function(err2) {
          callback(err || err2)
        })
      })
    })
  }

  fs.lchmodSync = function (path, mode) {
    var fd = fs.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode)

    // prefer to return the chmod error, if one occurs,
    // but still try to close, and report closing errors if they occur.
    var err, err2
    try {
      var ret = fs.fchmodSync(fd, mode)
    } catch (er) {
      err = er
    }
    try {
      fs.closeSync(fd)
    } catch (er) {
      err2 = er
    }
    if (err || err2) throw (err || err2)
    return ret
  }
}


// lutimes implementation, or no-op
if (!fs.lutimes) {
  if (constants.hasOwnProperty("O_SYMLINK")) {
    fs.lutimes = function (path, at, mt, cb) {
      fs.open(path, constants.O_SYMLINK, function (er, fd) {
        cb = cb || noop
        if (er) return cb(er)
        fs.futimes(fd, at, mt, function (er) {
          fs.close(fd, function (er2) {
            return cb(er || er2)
          })
        })
      })
    }

    fs.lutimesSync = function (path, at, mt) {
      var fd = fs.openSync(path, constants.O_SYMLINK)
        , err
        , err2
        , ret

      try {
        var ret = fs.futimesSync(fd, at, mt)
      } catch (er) {
        err = er
      }
      try {
        fs.closeSync(fd)
      } catch (er) {
        err2 = er
      }
      if (err || err2) throw (err || err2)
      return ret
    }

  } else if (fs.utimensat && constants.hasOwnProperty("AT_SYMLINK_NOFOLLOW")) {
    // maybe utimensat will be bound soonish?
    fs.lutimes = function (path, at, mt, cb) {
      fs.utimensat(path, at, mt, constants.AT_SYMLINK_NOFOLLOW, cb)
    }

    fs.lutimesSync = function (path, at, mt) {
      return fs.utimensatSync(path, at, mt, constants.AT_SYMLINK_NOFOLLOW)
    }

  } else {
    fs.lutimes = function (_a, _b, _c, cb) { process.nextTick(cb) }
    fs.lutimesSync = function () {}
  }
}


// https://github.com/isaacs/node-graceful-fs/issues/4
// Chown should not fail on einval or eperm if non-root.
// It should not fail on enosys ever, as this just indicates
// that a fs doesn't support the intended operation.

fs.chown = chownFix(fs.chown)
fs.fchown = chownFix(fs.fchown)
fs.lchown = chownFix(fs.lchown)

fs.chmod = chownFix(fs.chmod)
fs.fchmod = chownFix(fs.fchmod)
fs.lchmod = chownFix(fs.lchmod)

fs.chownSync = chownFixSync(fs.chownSync)
fs.fchownSync = chownFixSync(fs.fchownSync)
fs.lchownSync = chownFixSync(fs.lchownSync)

fs.chmodSync = chownFix(fs.chmodSync)
fs.fchmodSync = chownFix(fs.fchmodSync)
fs.lchmodSync = chownFix(fs.lchmodSync)

function chownFix (orig) {
  if (!orig) return orig
  return function (target, uid, gid, cb) {
    return orig.call(fs, target, uid, gid, function (er, res) {
      if (chownErOk(er)) er = null
      cb(er, res)
    })
  }
}

function chownFixSync (orig) {
  if (!orig) return orig
  return function (target, uid, gid) {
    try {
      return orig.call(fs, target, uid, gid)
    } catch (er) {
      if (!chownErOk(er)) throw er
    }
  }
}

// ENOSYS means that the fs doesn't support the op. Just ignore
// that, because it doesn't matter.
//
// if there's no getuid, or if getuid() is something other
// than 0, and the error is EINVAL or EPERM, then just ignore
// it.
//
// This specific case is a silent failure in cp, install, tar,
// and most other unix tools that manage permissions.
//
// When running as root, or if other types of errors are
// encountered, then it's strict.
function chownErOk (er) {
  if (!er)
    return true

  if (er.code === "ENOSYS")
    return true

  var nonroot = !process.getuid || process.getuid() !== 0
  if (nonroot) {
    if (er.code === "EINVAL" || er.code === "EPERM")
      return true
  }

  return false
}


// if lchmod/lchown do not exist, then make them no-ops
if (!fs.lchmod) {
  fs.lchmod = function (path, mode, cb) {
    process.nextTick(cb)
  }
  fs.lchmodSync = function () {}
}
if (!fs.lchown) {
  fs.lchown = function (path, uid, gid, cb) {
    process.nextTick(cb)
  }
  fs.lchownSync = function () {}
}



// on Windows, A/V software can lock the directory, causing this
// to fail with an EACCES or EPERM if the directory contains newly
// created files.  Try again on failure, for up to 1 second.
if (process.platform === "win32") {
  var rename_ = fs.rename
  fs.rename = function rename (from, to, cb) {
    var start = Date.now()
    rename_(from, to, function CB (er) {
      if (er
          && (er.code === "EACCES" || er.code === "EPERM")
          && Date.now() - start < 1000) {
        return rename_(from, to, CB)
      }
      cb(er)
    })
  }
}


// if read() returns EAGAIN, then just try it again.
var read = fs.read
fs.read = function (fd, buffer, offset, length, position, callback_) {
  var callback
  if (callback_ && typeof callback_ === 'function') {
    var eagCounter = 0
    callback = function (er, _, __) {
      if (er && er.code === 'EAGAIN' && eagCounter < 10) {
        eagCounter ++
        return read.call(fs, fd, buffer, offset, length, position, callback)
      }
      callback_.apply(this, arguments)
    }
  }
  return read.call(fs, fd, buffer, offset, length, position, callback)
}

var readSync = fs.readSync
fs.readSync = function (fd, buffer, offset, length, position) {
  var eagCounter = 0
  while (true) {
    try {
      return readSync.call(fs, fd, buffer, offset, length, position)
    } catch (er) {
      if (er.code === 'EAGAIN' && eagCounter < 10) {
        eagCounter ++
        continue
      }
      throw er
    }
  }
}


}).call(this,require('_process'))
},{"./fs.js":24,"_process":87,"constants":62}],27:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],28:[function(require,module,exports){
(function (process){

exports.parse = exports.decode = decode
exports.stringify = exports.encode = encode

exports.safe = safe
exports.unsafe = unsafe

var eol = process.platform === "win32" ? "\r\n" : "\n"

function encode (obj, section) {
  var children = []
    , out = ""

  Object.keys(obj).forEach(function (k, _, __) {
    var val = obj[k]
    if (val && Array.isArray(val)) {
        val.forEach(function(item) {
            out += safe(k + "[]") + "=" + safe(item) + "\n"
        })
    }
    else if (val && typeof val === "object") {
      children.push(k)
    } else {
      out += safe(k) + "=" + safe(val) + eol
    }
  })

  if (section && out.length) {
    out = "[" + safe(section) + "]" + eol + out
  }

  children.forEach(function (k, _, __) {
    var nk = dotSplit(k).join('\\.')
    var child = encode(obj[k], (section ? section + "." : "") + nk)
    if (out.length && child.length) {
      out += eol
    }
    out += child
  })

  return out
}

function dotSplit (str) {
  return str.replace(/\1/g, '\u0002LITERAL\\1LITERAL\u0002')
         .replace(/\\\./g, '\u0001')
         .split(/\./).map(function (part) {
           return part.replace(/\1/g, '\\.')
                  .replace(/\2LITERAL\\1LITERAL\2/g, '\u0001')
        })
}

function decode (str) {
  var out = {}
    , p = out
    , section = null
    , state = "START"
           // section     |key = value
    , re = /^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i
    , lines = str.split(/[\r\n]+/g)
    , section = null

  lines.forEach(function (line, _, __) {
    if (!line || line.match(/^\s*[;#]/)) return
    var match = line.match(re)
    if (!match) return
    if (match[1] !== undefined) {
      section = unsafe(match[1])
      p = out[section] = out[section] || {}
      return
    }
    var key = unsafe(match[2])
      , value = match[3] ? unsafe((match[4] || "")) : true
    switch (value) {
      case 'true':
      case 'false':
      case 'null': value = JSON.parse(value)
    }

    // Convert keys with '[]' suffix to an array
    if (key.length > 2 && key.slice(-2) === "[]") {
        key = key.substring(0, key.length - 2)
        if (!p[key]) {
          p[key] = []
        }
        else if (!Array.isArray(p[key])) {
          p[key] = [p[key]]
        }
    }

    // safeguard against resetting a previously defined
    // array by accidentally forgetting the brackets
    if (Array.isArray(p[key])) {
      p[key].push(value)
    }
    else {
      p[key] = value
    }
  })

  // {a:{y:1},"a.b":{x:2}} --> {a:{y:1,b:{x:2}}}
  // use a filter to return the keys that have to be deleted.
  Object.keys(out).filter(function (k, _, __) {
    if (!out[k] || typeof out[k] !== "object" || Array.isArray(out[k])) return false
    // see if the parent section is also an object.
    // if so, add it to that, and mark this one for deletion
    var parts = dotSplit(k)
      , p = out
      , l = parts.pop()
      , nl = l.replace(/\\\./g, '.')
    parts.forEach(function (part, _, __) {
      if (!p[part] || typeof p[part] !== "object") p[part] = {}
      p = p[part]
    })
    if (p === out && nl === l) return false
    p[nl] = out[k]
    return true
  }).forEach(function (del, _, __) {
    delete out[del]
  })

  return out
}

function isQuoted (val) {
  return (val.charAt(0) === "\"" && val.slice(-1) === "\"")
         || (val.charAt(0) === "'" && val.slice(-1) === "'")
}

function safe (val) {
  return ( typeof val !== "string"
         || val.match(/[\r\n]/)
         || val.match(/^\[/)
         || (val.length > 1
             && isQuoted(val))
         || val !== val.trim() )
         ? JSON.stringify(val)
         : val.replace(/;/g, '\\;').replace(/#/g, "\\#")
}

function unsafe (val, doUnesc) {
  val = (val || "").trim()
  if (isQuoted(val)) {
    // remove the single quotes before calling JSON.parse
    if (val.charAt(0) === "'") {
      val = val.substr(1, val.length - 2);
    }
    try { val = JSON.parse(val) } catch (_) {}
  } else {
    // walk the val to find the first not-escaped ; character
    var esc = false
    var unesc = "";
    for (var i = 0, l = val.length; i < l; i++) {
      var c = val.charAt(i)
      if (esc) {
        if ("\\;#".indexOf(c) !== -1)
          unesc += c
        else
          unesc += "\\" + c
        esc = false
      } else if (";#".indexOf(c) !== -1) {
        break
      } else if (c === "\\") {
        esc = true
      } else {
        unesc += c
      }
    }
    if (esc)
      unesc += "\\"
    return unesc
  }
  return val
}

}).call(this,require('_process'))
},{"_process":87}],29:[function(require,module,exports){
(function (process){
var path = require('path');
var fs = require('fs');

module.exports = mkdirP.mkdirp = mkdirP.mkdirP = mkdirP;

function mkdirP (p, opts, f, made) {
    if (typeof opts === 'function') {
        f = opts;
        opts = {};
    }
    else if (!opts || typeof opts !== 'object') {
        opts = { mode: opts };
    }
    
    var mode = opts.mode;
    var xfs = opts.fs || fs;
    
    if (mode === undefined) {
        mode = 0777 & (~process.umask());
    }
    if (!made) made = null;
    
    var cb = f || function () {};
    p = path.resolve(p);
    
    xfs.mkdir(p, mode, function (er) {
        if (!er) {
            made = made || p;
            return cb(null, made);
        }
        switch (er.code) {
            case 'ENOENT':
                mkdirP(path.dirname(p), opts, function (er, made) {
                    if (er) cb(er, made);
                    else mkdirP(p, opts, cb, made);
                });
                break;

            // In the case of any other error, just see if there's a dir
            // there already.  If so, then hooray!  If not, then something
            // is borked.
            default:
                xfs.stat(p, function (er2, stat) {
                    // if the stat fails, then that's super weird.
                    // let the original error be the failure reason.
                    if (er2 || !stat.isDirectory()) cb(er, made)
                    else cb(null, made);
                });
                break;
        }
    });
}

mkdirP.sync = function sync (p, opts, made) {
    if (!opts || typeof opts !== 'object') {
        opts = { mode: opts };
    }
    
    var mode = opts.mode;
    var xfs = opts.fs || fs;
    
    if (mode === undefined) {
        mode = 0777 & (~process.umask());
    }
    if (!made) made = null;

    p = path.resolve(p);

    try {
        xfs.mkdirSync(p, mode);
        made = made || p;
    }
    catch (err0) {
        switch (err0.code) {
            case 'ENOENT' :
                made = sync(path.dirname(p), opts, made);
                sync(p, opts, made);
                break;

            // In the case of any other error, just see if there's a dir
            // there already.  If so, then hooray!  If not, then something
            // is borked.
            default:
                var stat;
                try {
                    stat = xfs.statSync(p);
                }
                catch (err1) {
                    throw err0;
                }
                if (!stat.isDirectory()) throw err0;
                break;
        }
    }

    return made;
};

}).call(this,require('_process'))
},{"_process":87,"fs":56,"path":86}],30:[function(require,module,exports){
(function (process){
// info about each config option.

var debug = process.env.DEBUG_NOPT || process.env.NOPT_DEBUG
  ? function () { console.error.apply(console, arguments) }
  : function () {}

var url = require("url")
  , path = require("path")
  , Stream = require("stream").Stream
  , abbrev = require("abbrev")

module.exports = exports = nopt
exports.clean = clean

exports.typeDefs =
  { String  : { type: String,  validate: validateString  }
  , Boolean : { type: Boolean, validate: validateBoolean }
  , url     : { type: url,     validate: validateUrl     }
  , Number  : { type: Number,  validate: validateNumber  }
  , path    : { type: path,    validate: validatePath    }
  , Stream  : { type: Stream,  validate: validateStream  }
  , Date    : { type: Date,    validate: validateDate    }
  }

function nopt (types, shorthands, args, slice) {
  args = args || process.argv
  types = types || {}
  shorthands = shorthands || {}
  if (typeof slice !== "number") slice = 2

  debug(types, shorthands, args, slice)

  args = args.slice(slice)
  var data = {}
    , key
    , remain = []
    , cooked = args
    , original = args.slice(0)

  parse(args, data, remain, types, shorthands)
  // now data is full
  clean(data, types, exports.typeDefs)
  data.argv = {remain:remain,cooked:cooked,original:original}
  Object.defineProperty(data.argv, 'toString', { value: function () {
    return this.original.map(JSON.stringify).join(" ")
  }, enumerable: false })
  return data
}

function clean (data, types, typeDefs) {
  typeDefs = typeDefs || exports.typeDefs
  var remove = {}
    , typeDefault = [false, true, null, String, Array]

  Object.keys(data).forEach(function (k) {
    if (k === "argv") return
    var val = data[k]
      , isArray = Array.isArray(val)
      , type = types[k]
    if (!isArray) val = [val]
    if (!type) type = typeDefault
    if (type === Array) type = typeDefault.concat(Array)
    if (!Array.isArray(type)) type = [type]

    debug("val=%j", val)
    debug("types=", type)
    val = val.map(function (val) {
      // if it's an unknown value, then parse false/true/null/numbers/dates
      if (typeof val === "string") {
        debug("string %j", val)
        val = val.trim()
        if ((val === "null" && ~type.indexOf(null))
            || (val === "true" &&
               (~type.indexOf(true) || ~type.indexOf(Boolean)))
            || (val === "false" &&
               (~type.indexOf(false) || ~type.indexOf(Boolean)))) {
          val = JSON.parse(val)
          debug("jsonable %j", val)
        } else if (~type.indexOf(Number) && !isNaN(val)) {
          debug("convert to number", val)
          val = +val
        } else if (~type.indexOf(Date) && !isNaN(Date.parse(val))) {
          debug("convert to date", val)
          val = new Date(val)
        }
      }

      if (!types.hasOwnProperty(k)) {
        return val
      }

      // allow `--no-blah` to set 'blah' to null if null is allowed
      if (val === false && ~type.indexOf(null) &&
          !(~type.indexOf(false) || ~type.indexOf(Boolean))) {
        val = null
      }

      var d = {}
      d[k] = val
      debug("prevalidated val", d, val, types[k])
      if (!validate(d, k, val, types[k], typeDefs)) {
        if (exports.invalidHandler) {
          exports.invalidHandler(k, val, types[k], data)
        } else if (exports.invalidHandler !== false) {
          debug("invalid: "+k+"="+val, types[k])
        }
        return remove
      }
      debug("validated val", d, val, types[k])
      return d[k]
    }).filter(function (val) { return val !== remove })

    if (!val.length) delete data[k]
    else if (isArray) {
      debug(isArray, data[k], val)
      data[k] = val
    } else data[k] = val[0]

    debug("k=%s val=%j", k, val, data[k])
  })
}

function validateString (data, k, val) {
  data[k] = String(val)
}

function validatePath (data, k, val) {
  if (val === true) return false
  if (val === null) return true

  val = String(val)
  var homePattern = process.platform === 'win32' ? /^~(\/|\\)/ : /^~\//
  if (val.match(homePattern) && process.env.HOME) {
    val = path.resolve(process.env.HOME, val.substr(2))
  }
  data[k] = path.resolve(String(val))
  return true
}

function validateNumber (data, k, val) {
  debug("validate Number %j %j %j", k, val, isNaN(val))
  if (isNaN(val)) return false
  data[k] = +val
}

function validateDate (data, k, val) {
  debug("validate Date %j %j %j", k, val, Date.parse(val))
  var s = Date.parse(val)
  if (isNaN(s)) return false
  data[k] = new Date(val)
}

function validateBoolean (data, k, val) {
  if (val instanceof Boolean) val = val.valueOf()
  else if (typeof val === "string") {
    if (!isNaN(val)) val = !!(+val)
    else if (val === "null" || val === "false") val = false
    else val = true
  } else val = !!val
  data[k] = val
}

function validateUrl (data, k, val) {
  val = url.parse(String(val))
  if (!val.host) return false
  data[k] = val.href
}

function validateStream (data, k, val) {
  if (!(val instanceof Stream)) return false
  data[k] = val
}

function validate (data, k, val, type, typeDefs) {
  // arrays are lists of types.
  if (Array.isArray(type)) {
    for (var i = 0, l = type.length; i < l; i ++) {
      if (type[i] === Array) continue
      if (validate(data, k, val, type[i], typeDefs)) return true
    }
    delete data[k]
    return false
  }

  // an array of anything?
  if (type === Array) return true

  // NaN is poisonous.  Means that something is not allowed.
  if (type !== type) {
    debug("Poison NaN", k, val, type)
    delete data[k]
    return false
  }

  // explicit list of values
  if (val === type) {
    debug("Explicitly allowed %j", val)
    // if (isArray) (data[k] = data[k] || []).push(val)
    // else data[k] = val
    data[k] = val
    return true
  }

  // now go through the list of typeDefs, validate against each one.
  var ok = false
    , types = Object.keys(typeDefs)
  for (var i = 0, l = types.length; i < l; i ++) {
    debug("test type %j %j %j", k, val, types[i])
    var t = typeDefs[types[i]]
    if (t && type === t.type) {
      var d = {}
      ok = false !== t.validate(d, k, val)
      val = d[k]
      if (ok) {
        // if (isArray) (data[k] = data[k] || []).push(val)
        // else data[k] = val
        data[k] = val
        break
      }
    }
  }
  debug("OK? %j (%j %j %j)", ok, k, val, types[i])

  if (!ok) delete data[k]
  return ok
}

function parse (args, data, remain, types, shorthands) {
  debug("parse", args, data, remain)

  var key = null
    , abbrevs = abbrev(Object.keys(types))
    , shortAbbr = abbrev(Object.keys(shorthands))

  for (var i = 0; i < args.length; i ++) {
    var arg = args[i]
    debug("arg", arg)

    if (arg.match(/^-{2,}$/)) {
      // done with keys.
      // the rest are args.
      remain.push.apply(remain, args.slice(i + 1))
      args[i] = "--"
      break
    }
    var hadEq = false
    if (arg.charAt(0) === "-" && arg.length > 1) {
      if (arg.indexOf("=") !== -1) {
        hadEq = true
        var v = arg.split("=")
        arg = v.shift()
        v = v.join("=")
        args.splice.apply(args, [i, 1].concat([arg, v]))
      }

      // see if it's a shorthand
      // if so, splice and back up to re-parse it.
      var shRes = resolveShort(arg, shorthands, shortAbbr, abbrevs)
      debug("arg=%j shRes=%j", arg, shRes)
      if (shRes) {
        debug(arg, shRes)
        args.splice.apply(args, [i, 1].concat(shRes))
        if (arg !== shRes[0]) {
          i --
          continue
        }
      }
      arg = arg.replace(/^-+/, "")
      var no = null
      while (arg.toLowerCase().indexOf("no-") === 0) {
        no = !no
        arg = arg.substr(3)
      }

      if (abbrevs[arg]) arg = abbrevs[arg]

      var isArray = types[arg] === Array ||
        Array.isArray(types[arg]) && types[arg].indexOf(Array) !== -1

      // allow unknown things to be arrays if specified multiple times.
      if (!types.hasOwnProperty(arg) && data.hasOwnProperty(arg)) {
        if (!Array.isArray(data[arg]))
          data[arg] = [data[arg]]
        isArray = true
      }

      var val
        , la = args[i + 1]

      var isBool = typeof no === 'boolean' ||
        types[arg] === Boolean ||
        Array.isArray(types[arg]) && types[arg].indexOf(Boolean) !== -1 ||
        (typeof types[arg] === 'undefined' && !hadEq) ||
        (la === "false" &&
         (types[arg] === null ||
          Array.isArray(types[arg]) && ~types[arg].indexOf(null)))

      if (isBool) {
        // just set and move along
        val = !no
        // however, also support --bool true or --bool false
        if (la === "true" || la === "false") {
          val = JSON.parse(la)
          la = null
          if (no) val = !val
          i ++
        }

        // also support "foo":[Boolean, "bar"] and "--foo bar"
        if (Array.isArray(types[arg]) && la) {
          if (~types[arg].indexOf(la)) {
            // an explicit type
            val = la
            i ++
          } else if ( la === "null" && ~types[arg].indexOf(null) ) {
            // null allowed
            val = null
            i ++
          } else if ( !la.match(/^-{2,}[^-]/) &&
                      !isNaN(la) &&
                      ~types[arg].indexOf(Number) ) {
            // number
            val = +la
            i ++
          } else if ( !la.match(/^-[^-]/) && ~types[arg].indexOf(String) ) {
            // string
            val = la
            i ++
          }
        }

        if (isArray) (data[arg] = data[arg] || []).push(val)
        else data[arg] = val

        continue
      }

      if (types[arg] === String && la === undefined)
        la = ""

      if (la && la.match(/^-{2,}$/)) {
        la = undefined
        i --
      }

      val = la === undefined ? true : la
      if (isArray) (data[arg] = data[arg] || []).push(val)
      else data[arg] = val

      i ++
      continue
    }
    remain.push(arg)
  }
}

function resolveShort (arg, shorthands, shortAbbr, abbrevs) {
  // handle single-char shorthands glommed together, like
  // npm ls -glp, but only if there is one dash, and only if
  // all of the chars are single-char shorthands, and it's
  // not a match to some other abbrev.
  arg = arg.replace(/^-+/, '')

  // if it's an exact known option, then don't go any further
  if (abbrevs[arg] === arg)
    return null

  // if it's an exact known shortopt, same deal
  if (shorthands[arg]) {
    // make it an array, if it's a list of words
    if (shorthands[arg] && !Array.isArray(shorthands[arg]))
      shorthands[arg] = shorthands[arg].split(/\s+/)

    return shorthands[arg]
  }

  // first check to see if this arg is a set of single-char shorthands
  var singles = shorthands.___singles
  if (!singles) {
    singles = Object.keys(shorthands).filter(function (s) {
      return s.length === 1
    }).reduce(function (l,r) {
      l[r] = true
      return l
    }, {})
    shorthands.___singles = singles
    debug('shorthand singles', singles)
  }

  var chrs = arg.split("").filter(function (c) {
    return singles[c]
  })

  if (chrs.join("") === arg) return chrs.map(function (c) {
    return shorthands[c]
  }).reduce(function (l, r) {
    return l.concat(r)
  }, [])


  // if it's an arg abbrev, and not a literal shorthand, then prefer the arg
  if (abbrevs[arg] && !shorthands[arg])
    return null

  // if it's an abbr for a shorthand, then use that
  if (shortAbbr[arg])
    arg = shortAbbr[arg]

  // make it an array, if it's a list of words
  if (shorthands[arg] && !Array.isArray(shorthands[arg]))
    shorthands[arg] = shorthands[arg].split(/\s+/)

  return shorthands[arg]
}

}).call(this,require('_process'))
},{"_process":87,"abbrev":19,"path":86,"stream":104,"url":106}],31:[function(require,module,exports){
var url = require('url');;
var path = require('path');;

module.exports = cf;;

function cf(root, u) {
  if (!u)
    return cf.bind(null, root);;

  u = url.parse(u);;
  var h = u.host.replace(/:/g, '_');;
  // Strip off any /-rev/... or ?rev=... bits
  var revre = /(\?rev=|\?.*?&rev=|\/-rev\/).*$/
  var parts = u.path.replace(revre, '').split('/').slice(1)
  var p = [root, h].concat(parts.map(function(part) {
    return encodeURIComponent(part).replace(/%/g, '_');;
  }));;

  return path.join.apply(path, p);;
}

},{"path":86,"url":106}],32:[function(require,module,exports){
(function (__dirname){
// utilities for working with the js-registry site.

module.exports = RegClient

var url = require('url')
, npmlog
, cacheFile = require('npm-cache-filename')

try {
  npmlog = require("npmlog")
} catch (er) {
  npmlog = { error: noop, warn: noop, info: noop,
             verbose: noop, silly: noop, http: noop,
             pause: noop, resume: noop }
}

function noop () {}

function RegClient (conf) {
  // accept either a plain-jane object, or a npmconf object
  // with a "get" method.
  if (typeof conf.get !== 'function') {
    var data = conf
    conf = { get: function (k) { return data[k] }
           , set: function (k, v) { data[k] = v }
           , del: function (k) { delete data[k] } }
  }

  this.conf = conf

  // if provided, then the registry needs to be a url.
  // if it's not provided, then we're just using the cache only.
  var registry = conf.get('registry')
  if (registry) {
    registry = url.parse(registry)
    if (!registry.protocol) throw new Error(
      'Invalid registry: ' + registry.url)
    registry = registry.href
    if (registry.slice(-1) !== '/') {
      registry += '/'
    }
    this.conf.set('registry', registry)
  } else {
    registry = null
  }

  this.registry = registry

  if (!conf.get('cache')) throw new Error("Cache dir is required")
  this.cacheFile = cacheFile(this.conf.get('cache'))
  this.log = conf.log || conf.get('log') || npmlog
}

require('fs').readdirSync(__dirname + "/lib").forEach(function (f) {
  if (!f.match(/\.js$/)) return
  RegClient.prototype[f.replace(/\.js$/, '')] = require('./lib/' + f)
})

}).call(this,"/node_modules/stylecow/node_modules/npm/node_modules/npm-registry-client")
},{"fs":56,"npm-cache-filename":31,"npmlog":45,"url":106}],33:[function(require,module,exports){
(function (process){
// defaults, types, and shorthands.


var path = require("path")
  , url = require("url")
  , Stream = require("stream").Stream
  , semver = require("semver")
  , stableFamily = semver.parse(process.version)
  , nopt = require("nopt")
  , os = require("os")
  , osenv = require("osenv")

var log
try {
  log = require("npmlog")
} catch (er) {
  var util = require("util")
  log = { warn: function (m) {
    console.warn(m + ' ' + util.format.apply(util, [].slice.call(arguments, 1)))
  } }
}

exports.Octal = Octal
function Octal () {}
function validateOctal (data, k, val) {
  // must be either an integer or an octal string.
  if (typeof val === "number") {
    data[k] = val
    return true
  }

  if (typeof val === "string") {
    if (val.charAt(0) !== "0" || isNaN(val)) return false
    data[k] = parseInt(val, 8).toString(8)
  }
}

function validateSemver (data, k, val) {
  if (!semver.valid(val)) return false
  data[k] = semver.valid(val)
}

function validateTag (data, k, val) {
  val = ('' + val).trim()
  if (!val || semver.validRange(val)) return false
  data[k] = val
}

function validateStream (data, k, val) {
  if (!(val instanceof Stream)) return false
  data[k] = val
}

nopt.typeDefs.semver = { type: semver, validate: validateSemver }
nopt.typeDefs.Octal = { type: Octal, validate: validateOctal }
nopt.typeDefs.Stream = { type: Stream, validate: validateStream }

// Don't let --tag=1.2.3 ever be a thing
var tag = {}
nopt.typeDefs.tag = { type: tag, validate: validateTag }

nopt.invalidHandler = function (k, val, type) {
  log.warn("invalid config", k + "=" + JSON.stringify(val))

  if (Array.isArray(type)) {
    if (type.indexOf(url) !== -1) type = url
    else if (type.indexOf(path) !== -1) type = path
  }

  switch (type) {
    case tag:
      log.warn("invalid config", "Tag must not be a SemVer range")
      break
    case Octal:
      log.warn("invalid config", "Must be octal number, starting with 0")
      break
    case url:
      log.warn("invalid config", "Must be a full url with 'http://'")
      break
    case path:
      log.warn("invalid config", "Must be a valid filesystem path")
      break
    case Number:
      log.warn("invalid config", "Must be a numeric value")
      break
    case Stream:
      log.warn("invalid config", "Must be an instance of the Stream class")
      break
  }
}

if (!stableFamily || (+stableFamily.minor % 2)) stableFamily = null
else stableFamily = stableFamily.major + "." + stableFamily.minor

var defaults

var temp = osenv.tmpdir()
var home = osenv.home()

var uidOrPid = process.getuid ? process.getuid() : process.pid

if (home) process.env.HOME = home
else home = path.resolve(temp, "npm-" + uidOrPid)

var cacheExtra = process.platform === "win32" ? "npm-cache" : ".npm"
var cacheRoot = process.platform === "win32" && process.env.APPDATA || home
var cache = path.resolve(cacheRoot, cacheExtra)


var globalPrefix
Object.defineProperty(exports, "defaults", {get: function () {
  if (defaults) return defaults

  if (process.env.PREFIX) {
    globalPrefix = process.env.PREFIX
  } else if (process.platform === "win32") {
    // c:\node\node.exe --> prefix=c:\node\
    globalPrefix = path.dirname(process.execPath)
  } else {
    // /usr/local/bin/node --> prefix=/usr/local
    globalPrefix = path.dirname(path.dirname(process.execPath))

    // destdir only is respected on Unix
    if (process.env.DESTDIR) {
      globalPrefix = path.join(process.env.DESTDIR, globalPrefix)
    }
  }

  return defaults =
    { "always-auth" : false
    , "bin-links" : true
    , browser : null

    , ca: null
    , cafile: null

    , cache : cache

    , "cache-lock-stale": 60000
    , "cache-lock-retries": 10
    , "cache-lock-wait": 10000

    , "cache-max": Infinity
    , "cache-min": 10

    , cert: null

    , color : true
    , depth: Infinity
    , description : true
    , dev : false
    , editor : osenv.editor()
    , "engine-strict": false
    , force : false

    , "fetch-retries": 2
    , "fetch-retry-factor": 10
    , "fetch-retry-mintimeout": 10000
    , "fetch-retry-maxtimeout": 60000

    , git: "git"
    , "git-tag-version": true

    , global : false
    , globalconfig : path.resolve(globalPrefix, "etc", "npmrc")
    , group : process.platform === "win32" ? 0
            : process.env.SUDO_GID || (process.getgid && process.getgid())
    , heading: "npm"
    , "ignore-scripts": false
    , "init-module": path.resolve(home, ".npm-init.js")
    , "init.author.name" : ""
    , "init.author.email" : ""
    , "init.author.url" : ""
    , "init.version": "1.0.0"
    , "init.license": "ISC"
    , json: false
    , key: null
    , link: false
    , "local-address" : undefined
    , loglevel : "warn"
    , logstream : process.stderr
    , long : false
    , message : "%s"
    , "node-version" : process.version
    , npat : false
    , "onload-script" : false
    , optional: true
    , parseable : false
    , prefix : globalPrefix
    , production: process.env.NODE_ENV === "production"
    , "proprietary-attribs": true
    , proxy : process.env.HTTP_PROXY || process.env.http_proxy || null
    , "https-proxy" : process.env.HTTPS_PROXY || process.env.https_proxy ||
                      process.env.HTTP_PROXY || process.env.http_proxy || null
    , "user-agent" : "npm/{npm-version} "
                     + "node/{node-version} "
                     + "{platform} "
                     + "{arch}"
    , "rebuild-bundle" : true
    , registry : "https://registry.npmjs.org/"
    , rollback : true
    , save : false
    , "save-bundle": false
    , "save-dev" : false
    , "save-exact" : false
    , "save-optional" : false
    , "save-prefix": "^"
    , scope : ""
    , searchopts: ""
    , searchexclude: null
    , searchsort: "name"
    , shell : osenv.shell()
    , shrinkwrap: true
    , "sign-git-tag": false
    , spin: true
    , "strict-ssl": true
    , tag : "latest"
    , tmp : temp
    , unicode : true
    , "unsafe-perm" : process.platform === "win32"
                    || process.platform === "cygwin"
                    || !( process.getuid && process.setuid
                       && process.getgid && process.setgid )
                    || process.getuid() !== 0
    , usage : false
    , user : process.platform === "win32" ? 0 : "nobody"
    , userconfig : path.resolve(home, ".npmrc")
    , umask: process.umask ? process.umask() : parseInt("022", 8)
    , version : false
    , versions : false
    , viewer: process.platform === "win32" ? "browser" : "man"

    , _exit : true
    }
}})

exports.types =
  { "always-auth" : Boolean
  , "bin-links": Boolean
  , browser : [null, String]
  , ca: [null, String, Array]
  , cafile : path
  , cache : path
  , "cache-lock-stale": Number
  , "cache-lock-retries": Number
  , "cache-lock-wait": Number
  , "cache-max": Number
  , "cache-min": Number
  , cert: [null, String]
  , color : ["always", Boolean]
  , depth : Number
  , description : Boolean
  , dev : Boolean
  , editor : String
  , "engine-strict": Boolean
  , force : Boolean
  , "fetch-retries": Number
  , "fetch-retry-factor": Number
  , "fetch-retry-mintimeout": Number
  , "fetch-retry-maxtimeout": Number
  , git: String
  , "git-tag-version": Boolean
  , global : Boolean
  , globalconfig : path
  , group : [Number, String]
  , "https-proxy" : [null, url]
  , "user-agent" : String
  , "heading": String
  , "ignore-scripts": Boolean
  , "init-module": path
  , "init.author.name" : String
  , "init.author.email" : String
  , "init.author.url" : ["", url]
  , "init.license": String
  , "init.version": semver
  , json: Boolean
  , key: [null, String]
  , link: Boolean
  // local-address must be listed as an IP for a local network interface
  // must be IPv4 due to node bug
  , "local-address" : getLocalAddresses()
  , loglevel : ["silent","error","warn","http","info","verbose","silly"]
  , logstream : Stream
  , long : Boolean
  , message: String
  , "node-version" : [null, semver]
  , npat : Boolean
  , "onload-script" : [null, String]
  , optional: Boolean
  , parseable : Boolean
  , prefix: path
  , production: Boolean
  , "proprietary-attribs": Boolean
  , proxy : [null, url]
  , "rebuild-bundle" : Boolean
  , registry : [null, url]
  , rollback : Boolean
  , save : Boolean
  , "save-bundle": Boolean
  , "save-dev" : Boolean
  , "save-exact" : Boolean
  , "save-optional" : Boolean
  , "save-prefix": String
  , scope : String
  , searchopts : String
  , searchexclude: [null, String]
  , searchsort: [ "name", "-name"
                , "description", "-description"
                , "author", "-author"
                , "date", "-date"
                , "keywords", "-keywords" ]
  , shell : String
  , shrinkwrap: Boolean
  , "sign-git-tag": Boolean
  , spin: ["always", Boolean]
  , "strict-ssl": Boolean
  , tag : tag
  , tmp : path
  , unicode : Boolean
  , "unsafe-perm" : Boolean
  , usage : Boolean
  , user : [Number, String]
  , userconfig : path
  , umask: Octal
  , version : Boolean
  , versions : Boolean
  , viewer: String
  , _exit : Boolean
  }

function getLocalAddresses() {
  Object.keys(os.networkInterfaces()).map(function (nic) {
    return os.networkInterfaces()[nic].filter(function (addr) {
      return addr.family === "IPv4"
    })
    .map(function (addr) {
      return addr.address
    })
  }).reduce(function (curr, next) {
    return curr.concat(next)
  }, []).concat(undefined)
}

exports.shorthands =
  { s : ["--loglevel", "silent"]
  , d : ["--loglevel", "info"]
  , dd : ["--loglevel", "verbose"]
  , ddd : ["--loglevel", "silly"]
  , noreg : ["--no-registry"]
  , N : ["--no-registry"]
  , reg : ["--registry"]
  , "no-reg" : ["--no-registry"]
  , silent : ["--loglevel", "silent"]
  , verbose : ["--loglevel", "verbose"]
  , quiet: ["--loglevel", "warn"]
  , q: ["--loglevel", "warn"]
  , h : ["--usage"]
  , H : ["--usage"]
  , "?" : ["--usage"]
  , help : ["--usage"]
  , v : ["--version"]
  , f : ["--force"]
  , gangster : ["--force"]
  , gangsta : ["--force"]
  , desc : ["--description"]
  , "no-desc" : ["--no-description"]
  , "local" : ["--no-global"]
  , l : ["--long"]
  , m : ["--message"]
  , p : ["--parseable"]
  , porcelain : ["--parseable"]
  , g : ["--global"]
  , S : ["--save"]
  , D : ["--save-dev"]
  , E : ["--save-exact"]
  , O : ["--save-optional"]
  , y : ["--yes"]
  , n : ["--no-yes"]
  , B : ["--save-bundle"]
  , C : ["--prefix"]
  }

}).call(this,require('_process'))
},{"_process":87,"nopt":30,"npmlog":45,"os":85,"osenv":47,"path":86,"semver":49,"stream":104,"url":106,"util":108}],34:[function(require,module,exports){
(function (process){
// try to find the most reasonable prefix to use

module.exports = findPrefix

var fs = require("fs")
var path = require("path")

function findPrefix (p, cb_) {
  function cb (er, p) {
    process.nextTick(function () {
      cb_(er, p)
    })
  }

  p = path.resolve(p)
  // if there's no node_modules folder, then
  // walk up until we hopefully find one.
  // if none anywhere, then use cwd.
  var walkedUp = false
  while (path.basename(p) === "node_modules") {
    p = path.dirname(p)
    walkedUp = true
  }
  if (walkedUp) return cb(null, p)

  findPrefix_(p, p, cb)
}

function findPrefix_ (p, original, cb) {
  if (p === "/"
      || (process.platform === "win32" && p.match(/^[a-zA-Z]:(\\|\/)?$/))) {
    return cb(null, original)
  }
  fs.readdir(p, function (er, files) {
    // an error right away is a bad sign.
    // unless the prefix was simply a non
    // existent directory.
    if (er && p === original) {
      if (er.code === "ENOENT") return cb(null, original);
      return cb(er)
    }

    // walked up too high or something.
    if (er) return cb(null, original)

    if (files.indexOf("node_modules") !== -1
        || files.indexOf("package.json") !== -1) {
      return cb(null, p)
    }

    var d = path.dirname(p)
    if (d === p) return cb(null, original)

    return findPrefix_(d, original, cb)
  })
}

}).call(this,require('_process'))
},{"_process":87,"fs":56,"path":86}],35:[function(require,module,exports){
(function (Buffer){
var assert = require("assert")

var toNerfDart = require("./nerf-dart.js")

module.exports = getCredentialsByURI

function getCredentialsByURI (uri) {
  assert(uri && typeof uri === "string", "registry URL is required")
  var nerfed = toNerfDart(uri)
  var defnerf = toNerfDart(this.get("registry"))

  var c = {scope : nerfed}

  if (this.get(nerfed + ":_authToken")) {
    c.token = this.get(nerfed + ":_authToken")
    // the bearer token is enough, don't confuse things
    return c
  }

  // Handle the old-style _auth=<base64> style for the default
  // registry, if set.
  //
  // XXX(isaacs): Remove when npm 1.4 is no longer relevant
  var authDef = this.get("_auth")
  var userDef = this.get("username")
  var passDef = this.get("_password")
  if (authDef && !(userDef && passDef)) {
    authDef = new Buffer(authDef, "base64").toString()
    authDef = authDef.split(":")
    userDef = authDef.shift()
    passDef = authDef.join(":")
  }

  if (this.get(nerfed + ":_password")) {
    c.password = new Buffer(this.get(nerfed + ":_password"), "base64").toString("utf8")
  } else if (nerfed === defnerf && passDef) {
    c.password = passDef
  }

  if (this.get(nerfed + ":username")) {
    c.username = this.get(nerfed + ":username")
  } else if (nerfed === defnerf && userDef) {
    c.username = userDef
  }

  if (this.get(nerfed + ":email")) {
    c.email = this.get(nerfed + ":email")
  } else if (this.get("email")) {
    c.email = this.get("email")
  }

  if (c.username && c.password) {
    c.auth = new Buffer(c.username + ":" + c.password).toString("base64")
  }

  return c
}

}).call(this,require("buffer").Buffer)
},{"./nerf-dart.js":39,"assert":57,"buffer":58}],36:[function(require,module,exports){
(function (process){
module.exports = loadCAFile

var fs = require('fs')

function loadCAFile(cafilePath, cb) {
  if (!cafilePath)
    return process.nextTick(cb)

  fs.readFile(cafilePath, 'utf8', afterCARead.bind(this))

  function afterCARead(er, cadata) {
    if (er)
      return cb(er)

    var delim = '-----END CERTIFICATE-----'
    var output

    output = cadata
      .split(delim)
      .filter(function(xs) {
        return !!xs.trim()
      })
      .map(function(xs) {
        return xs.trimLeft() + delim
      })

    this.set('ca', output)
    cb(null)
  }

}

}).call(this,require('_process'))
},{"_process":87,"fs":56}],37:[function(require,module,exports){
(function (process){
module.exports = loadPrefix

var findPrefix = require("./find-prefix.js")
var path = require('path')

function loadPrefix (cb) {
  var cli = this.list[0]

  Object.defineProperty(this, "prefix",
    { set : function (prefix) {
        var g = this.get("global")
        this[g ? 'globalPrefix' : 'localPrefix'] = prefix
      }.bind(this)
    , get : function () {
        var g = this.get("global")
        return g ? this.globalPrefix : this.localPrefix
      }.bind(this)
    , enumerable : true
    })

  Object.defineProperty(this, "globalPrefix",
    { set : function (prefix) {
        this.set('prefix', prefix)
      }.bind(this)
    , get : function () {
        return path.resolve(this.get("prefix"))
      }.bind(this)
    , enumerable : true
    })

  var p
  Object.defineProperty(this, "localPrefix",
    { set : function (prefix) { p = prefix },
      get : function () { return p }
    , enumerable: true })

  // try to guess at a good node_modules location.
  // If we are *explicitly* given a prefix on the cli, then
  // always use that.  otherwise, infer local prefix from cwd.
  if (Object.prototype.hasOwnProperty.call(cli, "prefix")) {
    p = path.resolve(cli.prefix)
    process.nextTick(cb)
  } else {
    findPrefix(process.cwd(), function (er, found) {
      p = found
      cb(er)
    }.bind(this))
  }
}

}).call(this,require('_process'))
},{"./find-prefix.js":34,"_process":87,"path":86}],38:[function(require,module,exports){
(function (process){
module.exports = loadUid

var getUid = require("uid-number")

// Call in the context of a npmconf object

function loadUid (cb) {
  // if we're not in unsafe-perm mode, then figure out who
  // to run stuff as.  Do this first, to support `npm update npm -g`
  if (!this.get("unsafe-perm")) {
    getUid(this.get("user"), this.get("group"), cb)
  } else {
    process.nextTick(cb)
  }
}

}).call(this,require('_process'))
},{"_process":87,"uid-number":54}],39:[function(require,module,exports){
var url = require("url")

module.exports = toNerfDart

/**
 * Maps a URL to an identifier.
 *
 * Name courtesy schiffertronix media LLC, a New Jersey corporation
 *
 * @param {String} uri The URL to be nerfed.
 *
 * @returns {String} A nerfed URL.
 */
function toNerfDart(uri) {
  var parsed = url.parse(uri)
  parsed.pathname = "/"
  delete parsed.protocol
  delete parsed.auth

  return url.format(parsed)
}

},{"url":106}],40:[function(require,module,exports){
(function (Buffer){
var assert = require("assert")

var toNerfDart = require("./nerf-dart.js")

module.exports = setCredentialsByURI

function setCredentialsByURI (uri, c) {
  assert(uri && typeof uri === "string", "registry URL is required")
  assert(c && typeof c === "object", "credentials are required")

  var nerfed = toNerfDart(uri)

  if (c.token) {
    this.set(nerfed + ":_authToken", c.token, "user")
    this.del(nerfed + ":_password", "user")
    this.del(nerfed + ":username", "user")
    this.del(nerfed + ":email", "user")
  }
  else if (c.username || c.password || c.email) {
    assert(c.username, "must include username")
    assert(c.password, "must include password")
    assert(c.email, "must include email address")

    this.del(nerfed + ":_authToken", "user")

    var encoded = new Buffer(c.password, "utf8").toString("base64")
    this.set(nerfed + ":_password", encoded, "user")
    this.set(nerfed + ":username", c.username, "user")
    this.set(nerfed + ":email", c.email, "user")
  }
  else {
    throw new Error("No credentials to set.")
  }
}

}).call(this,require("buffer").Buffer)
},{"./nerf-dart.js":39,"assert":57,"buffer":58}],41:[function(require,module,exports){
(function (process){
module.exports = setUser

var Conf = require('../npmconf.js').Conf
var assert = require('assert')
var path = require('path')
var fs = require('fs')

function setUser (cb) {
  var defaultConf = this.root
  assert(defaultConf !== Object.prototype)

  // If global, leave it as-is.
  // If not global, then set the user to the owner of the prefix folder.
  // Just set the default, so it can be overridden.
  if (this.get("global")) return cb()
  if (process.env.SUDO_UID) {
    defaultConf.user = +(process.env.SUDO_UID)
    return cb()
  }

  var prefix = path.resolve(this.get("prefix"))
  fs.stat(prefix, function (er, st) {
    defaultConf.user = st && st.uid
    return cb(er)
  })
}

}).call(this,require('_process'))
},{"../npmconf.js":44,"_process":87,"assert":57,"fs":56,"path":86}],42:[function(require,module,exports){
(function (process,Buffer,__dirname){
var ProtoList = require('proto-list')
  , path = require('path')
  , fs = require('fs')
  , ini = require('ini')
  , EE = require('events').EventEmitter
  , url = require('url')
  , http = require('http')

var exports = module.exports = function () {
  var args = [].slice.call(arguments)
    , conf = new ConfigChain()

  while(args.length) {
    var a = args.shift()
    if(a) conf.push
          ( 'string' === typeof a
            ? json(a)
            : a )
  }

  return conf
}

//recursively find a file...

var find = exports.find = function () {
  var rel = path.join.apply(null, [].slice.call(arguments))

  function find(start, rel) {
    var file = path.join(start, rel)
    try {
      fs.statSync(file)
      return file
    } catch (err) {
      if(path.dirname(start) !== start) // root
        return find(path.dirname(start), rel)
    }
  }
  return find(__dirname, rel)
}

var parse = exports.parse = function (content, file, type) {
  content = '' + content
  // if we don't know what it is, try json and fall back to ini
  // if we know what it is, then it must be that.
  if (!type) {
    try { return JSON.parse(content) }
    catch (er) { return ini.parse(content) }
  } else if (type === 'json') {
    if (this.emit) {
      try { return JSON.parse(content) }
      catch (er) { this.emit('error', er) }
    } else {
      return JSON.parse(content)
    }
  } else {
    return ini.parse(content)
  }
}

var json = exports.json = function () {
  var args = [].slice.call(arguments).filter(function (arg) { return arg != null })
  var file = path.join.apply(null, args)
  var content
  try {
    content = fs.readFileSync(file,'utf-8')
  } catch (err) {
    return
  }
  return parse(content, file, 'json')
}

var env = exports.env = function (prefix, env) {
  env = env || process.env
  var obj = {}
  var l = prefix.length
  for(var k in env) {
    if(k.indexOf(prefix) === 0)
      obj[k.substring(l)] = env[k]
  }

  return obj
}

exports.ConfigChain = ConfigChain
function ConfigChain () {
  EE.apply(this)
  ProtoList.apply(this, arguments)
  this._awaiting = 0
  this._saving = 0
  this.sources = {}
}

// multi-inheritance-ish
var extras = {
  constructor: { value: ConfigChain }
}
Object.keys(EE.prototype).forEach(function (k) {
  extras[k] = Object.getOwnPropertyDescriptor(EE.prototype, k)
})
ConfigChain.prototype = Object.create(ProtoList.prototype, extras)

ConfigChain.prototype.del = function (key, where) {
  // if not specified where, then delete from the whole chain, scorched
  // earth style
  if (where) {
    var target = this.sources[where]
    target = target && target.data
    if (!target) {
      return this.emit('error', new Error('not found '+where))
    }
    delete target[key]
  } else {
    for (var i = 0, l = this.list.length; i < l; i ++) {
      delete this.list[i][key]
    }
  }
  return this
}

ConfigChain.prototype.set = function (key, value, where) {
  var target

  if (where) {
    target = this.sources[where]
    target = target && target.data
    if (!target) {
      return this.emit('error', new Error('not found '+where))
    }
  } else {
    target = this.list[0]
    if (!target) {
      return this.emit('error', new Error('cannot set, no confs!'))
    }
  }
  target[key] = value
  return this
}

ConfigChain.prototype.get = function (key, where) {
  if (where) {
    where = this.sources[where]
    if (where) where = where.data
    if (where && Object.hasOwnProperty.call(where, key)) return where[key]
    return undefined
  }
  return this.list[0][key]
}

ConfigChain.prototype.save = function (where, type, cb) {
  if (typeof type === 'function') cb = type, type = null
  var target = this.sources[where]
  if (!target || !(target.path || target.source) || !target.data) {
    // TODO: maybe save() to a url target could be a PUT or something?
    // would be easy to swap out with a reddis type thing, too
    return this.emit('error', new Error('bad save target: '+where))
  }

  if (target.source) {
    var pref = target.prefix || ''
    Object.keys(target.data).forEach(function (k) {
      target.source[pref + k] = target.data[k]
    })
    return this
  }

  var type = type || target.type
  var data = target.data
  if (target.type === 'json') {
    data = JSON.stringify(data)
  } else {
    data = ini.stringify(data)
  }

  this._saving ++
  fs.writeFile(target.path, data, 'utf8', function (er) {
    this._saving --
    if (er) {
      if (cb) return cb(er)
      else return this.emit('error', er)
    }
    if (this._saving === 0) {
      if (cb) cb()
      this.emit('save')
    }
  }.bind(this))
  return this
}

ConfigChain.prototype.addFile = function (file, type, name) {
  name = name || file
  var marker = {__source__:name}
  this.sources[name] = { path: file, type: type }
  this.push(marker)
  this._await()
  fs.readFile(file, 'utf8', function (er, data) {
    if (er) this.emit('error', er)
    this.addString(data, file, type, marker)
  }.bind(this))
  return this
}

ConfigChain.prototype.addEnv = function (prefix, env, name) {
  name = name || 'env'
  var data = exports.env(prefix, env)
  this.sources[name] = { data: data, source: env, prefix: prefix }
  return this.add(data, name)
}

ConfigChain.prototype.addUrl = function (req, type, name) {
  this._await()
  var href = url.format(req)
  name = name || href
  var marker = {__source__:name}
  this.sources[name] = { href: href, type: type }
  this.push(marker)
  http.request(req, function (res) {
    var c = []
    var ct = res.headers['content-type']
    if (!type) {
      type = ct.indexOf('json') !== -1 ? 'json'
           : ct.indexOf('ini') !== -1 ? 'ini'
           : href.match(/\.json$/) ? 'json'
           : href.match(/\.ini$/) ? 'ini'
           : null
      marker.type = type
    }

    res.on('data', c.push.bind(c))
    .on('end', function () {
      this.addString(Buffer.concat(c), href, type, marker)
    }.bind(this))
    .on('error', this.emit.bind(this, 'error'))

  }.bind(this))
  .on('error', this.emit.bind(this, 'error'))
  .end()

  return this
}

ConfigChain.prototype.addString = function (data, file, type, marker) {
  data = this.parse(data, file, type)
  this.add(data, marker)
  return this
}

ConfigChain.prototype.add = function (data, marker) {
  if (marker && typeof marker === 'object') {
    var i = this.list.indexOf(marker)
    if (i === -1) {
      return this.emit('error', new Error('bad marker'))
    }
    this.splice(i, 1, data)
    marker = marker.__source__
    this.sources[marker] = this.sources[marker] || {}
    this.sources[marker].data = data
    // we were waiting for this.  maybe emit 'load'
    this._resolve()
  } else {
    if (typeof marker === 'string') {
      this.sources[marker] = this.sources[marker] || {}
      this.sources[marker].data = data
    }
    // trigger the load event if nothing was already going to do so.
    this._await()
    this.push(data)
    process.nextTick(this._resolve.bind(this))
  }
  return this
}

ConfigChain.prototype.parse = exports.parse

ConfigChain.prototype._await = function () {
  this._awaiting++
}

ConfigChain.prototype._resolve = function () {
  this._awaiting--
  if (this._awaiting === 0) this.emit('load', this)
}

}).call(this,require('_process'),require("buffer").Buffer,"/node_modules/stylecow/node_modules/npm/node_modules/npmconf/node_modules/config-chain")
},{"_process":87,"buffer":58,"events":78,"fs":56,"http":79,"ini":28,"path":86,"proto-list":43,"url":106}],43:[function(require,module,exports){

module.exports = ProtoList

function setProto(obj, proto) {
  if (typeof Object.setPrototypeOf === "function")
    return Object.setPrototypeOf(obj, proto)
  else
    obj.__proto__ = proto
}

function ProtoList () {
  this.list = []
  var root = null
  Object.defineProperty(this, 'root', {
    get: function () { return root },
    set: function (r) {
      root = r
      if (this.list.length) {
        setProto(this.list[this.list.length - 1], r)
      }
    },
    enumerable: true,
    configurable: true
  })
}

ProtoList.prototype =
  { get length () { return this.list.length }
  , get keys () {
      var k = []
      for (var i in this.list[0]) k.push(i)
      return k
    }
  , get snapshot () {
      var o = {}
      this.keys.forEach(function (k) { o[k] = this.get(k) }, this)
      return o
    }
  , get store () {
      return this.list[0]
    }
  , push : function (obj) {
      if (typeof obj !== "object") obj = {valueOf:obj}
      if (this.list.length >= 1) {
        setProto(this.list[this.list.length - 1], obj)
      }
      setProto(obj, this.root)
      return this.list.push(obj)
    }
  , pop : function () {
      if (this.list.length >= 2) {
        setProto(this.list[this.list.length - 2], this.root)
      }
      return this.list.pop()
    }
  , unshift : function (obj) {
      setProto(obj, this.list[0] || this.root)
      return this.list.unshift(obj)
    }
  , shift : function () {
      if (this.list.length === 1) {
        setProto(this.list[0], this.root)
      }
      return this.list.shift()
    }
  , get : function (key) {
      return this.list[0][key]
    }
  , set : function (key, val, save) {
      if (!this.length) this.push({})
      if (save && this.list[0].hasOwnProperty(key)) this.push({})
      return this.list[0][key] = val
    }
  , forEach : function (fn, thisp) {
      for (var key in this.list[0]) fn.call(thisp, key, this.list[0][key])
    }
  , slice : function () {
      return this.list.slice.apply(this.list, arguments)
    }
  , splice : function () {
      // handle injections
      var ret = this.list.splice.apply(this.list, arguments)
      for (var i = 0, l = this.list.length; i < l; i++) {
        setProto(this.list[i], this.list[i + 1] || this.root)
      }
      return ret
    }
  }

},{}],44:[function(require,module,exports){
(function (process){

var CC = require('config-chain').ConfigChain
var inherits = require('inherits')
var configDefs = require('./config-defs.js')
var types = configDefs.types
var once = require('once')
var fs = require('fs')
var path = require('path')
var nopt = require('nopt')
var ini = require('ini')
var Octal = configDefs.Octal
var mkdirp = require('mkdirp')

exports.load = load
exports.Conf = Conf
exports.loaded = false
exports.rootConf = null
exports.usingBuiltin = false
exports.defs = configDefs

Object.defineProperty(exports, 'defaults', { get: function () {
  return configDefs.defaults
}, enumerable: true })

Object.defineProperty(exports, 'types', { get: function () {
  return configDefs.types
}, enumerable: true })

exports.validate = validate

var myUid = process.env.SUDO_UID !== undefined
          ? process.env.SUDO_UID : (process.getuid && process.getuid())
var myGid = process.env.SUDO_GID !== undefined
          ? process.env.SUDO_GID : (process.getgid && process.getgid())


var loading = false
var loadCbs = []
function load (cli_, builtin_, cb_) {
  var cli, builtin, cb
  for (var i = 0; i < arguments.length; i++)
    switch (typeof arguments[i]) {
      case 'string': builtin = arguments[i]; break
      case 'object': cli = arguments[i]; break
      case 'function': cb = arguments[i]; break
    }

  if (!cb)
    cb = function () {}

  if (exports.loaded) {
    var ret = exports.loaded
    if (cli) {
      ret = new Conf(ret)
      ret.unshift(cli)
    }
    return process.nextTick(cb.bind(null, null, ret))
  }

  // either a fresh object, or a clone of the passed in obj
  if (!cli)
    cli = {}
  else
    cli = Object.keys(cli).reduce(function (c, k) {
      c[k] = cli[k]
      return c
    }, {})

  loadCbs.push(cb)
  if (loading)
    return

  loading = true

  cb = once(function (er, conf) {
    if (!er)
      exports.loaded = conf
    loadCbs.forEach(function (fn) {
      fn(er, conf)
    })
    loadCbs.length = 0
  })

  // check for a builtin if provided.
  exports.usingBuiltin = !!builtin
  var rc = exports.rootConf = new Conf()
  if (builtin)
    rc.addFile(builtin, 'builtin')
  else
    rc.add({}, 'builtin')

  rc.on('load', function () {
    load_(builtin, rc, cli, cb)
  })
}

function load_(builtin, rc, cli, cb) {
  var defaults = configDefs.defaults
  var conf = new Conf(rc)

  conf.usingBuiltin = !!builtin
  conf.add(cli, 'cli')
  conf.addEnv()

  conf.loadPrefix(function(er) {
    if (er)
      return cb(er)

    // If you're doing `npm --userconfig=~/foo.npmrc` then you'd expect
    // that ~/.npmrc won't override the stuff in ~/foo.npmrc (or, indeed
    // be used at all).
    //
    // However, if the cwd is ~, then ~/.npmrc is the home for the project
    // config, and will override the userconfig.
    //
    // If you're not setting the userconfig explicitly, then it will be loaded
    // twice, which is harmless but excessive.  If you *are* setting the
    // userconfig explicitly then it will override your explicit intent, and
    // that IS harmful and unexpected.
    //
    // Solution: Do not load project config file that is the same as either
    // the default or resolved userconfig value.  npm will log a "verbose"
    // message about this when it happens, but it is a rare enough edge case
    // that we don't have to be super concerned about it.
    var projectConf = path.resolve(conf.localPrefix, '.npmrc')
    var defaultUserConfig = rc.get('userconfig')
    var resolvedUserConfig = conf.get('userconfig')
    if (!conf.get('global') &&
        projectConf !== defaultUserConfig &&
        projectConf !== resolvedUserConfig) {
      conf.addFile(projectConf, 'project')
      conf.once('load', afterPrefix)
    } else {
      conf.add({}, 'project')
      afterPrefix()
    }
  })

  function afterPrefix() {
    conf.addFile(conf.get('userconfig'), 'user')
    conf.once('error', cb)
    conf.once('load', afterUser)
  }

  function afterUser () {
    // globalconfig and globalignorefile defaults
    // need to respond to the 'prefix' setting up to this point.
    // Eg, `npm config get globalconfig --prefix ~/local` should
    // return `~/local/etc/npmrc`
    // annoying humans and their expectations!
    if (conf.get('prefix')) {
      var etc = path.resolve(conf.get('prefix'), 'etc')
      defaults.globalconfig = path.resolve(etc, 'npmrc')
      defaults.globalignorefile = path.resolve(etc, 'npmignore')
    }

    conf.addFile(conf.get('globalconfig'), 'global')

    // move the builtin into the conf stack now.
    conf.root = defaults
    conf.add(rc.shift(), 'builtin')
    conf.once('load', function () {
      conf.loadExtras(afterExtras)
    })
  }

  function afterExtras(er) {
    if (er)
      return cb(er)

    // warn about invalid bits.
    validate(conf)

    var cafile = conf.get('cafile')

    if (cafile) {
      return conf.loadCAFile(cafile, finalize)
    }

    finalize()
  }

  function finalize(er) {
    if (er) {
      return cb(er)
    }

    exports.loaded = conf
    cb(er, conf)
  }
}

// Basically the same as CC, but:
// 1. Always ini
// 2. Parses environment variable names in field values
// 3. Field values that start with ~/ are replaced with process.env.HOME
// 4. Can inherit from another Conf object, using it as the base.
inherits(Conf, CC)
function Conf (base) {
  if (!(this instanceof Conf))
    return new Conf(base)

  CC.apply(this)

  if (base)
    if (base instanceof Conf)
      this.root = base.list[0] || base.root
    else
      this.root = base
  else
    this.root = configDefs.defaults
}

Conf.prototype.loadPrefix = require('./lib/load-prefix.js')
Conf.prototype.loadCAFile = require('./lib/load-cafile.js')
Conf.prototype.loadUid = require('./lib/load-uid.js')
Conf.prototype.setUser = require('./lib/set-user.js')
Conf.prototype.findPrefix = require('./lib/find-prefix.js')
Conf.prototype.getCredentialsByURI = require('./lib/get-credentials-by-uri.js')
Conf.prototype.setCredentialsByURI = require('./lib/set-credentials-by-uri.js')

Conf.prototype.loadExtras = function(cb) {
  this.setUser(function(er) {
    if (er)
      return cb(er)
    this.loadUid(function(er) {
      if (er)
        return cb(er)
      // Without prefix, nothing will ever work
      mkdirp(this.prefix, cb)
    }.bind(this))
  }.bind(this))
}

Conf.prototype.save = function (where, cb) {
  var target = this.sources[where]
  if (!target || !(target.path || target.source) || !target.data) {
    if (where !== 'builtin')
      var er = new Error('bad save target: ' + where)
    if (cb) {
      process.nextTick(cb.bind(null, er))
      return this
    }
    return this.emit('error', er)
  }

  if (target.source) {
    var pref = target.prefix || ''
    Object.keys(target.data).forEach(function (k) {
      target.source[pref + k] = target.data[k]
    })
    if (cb) process.nextTick(cb)
    return this
  }

  var data = ini.stringify(target.data)

  then = then.bind(this)
  done = done.bind(this)
  this._saving ++

  var mode = where === 'user' ? "0600" : "0666"
  if (!data.trim()) {
    fs.unlink(target.path, function (er) {
      // ignore the possible error (e.g. the file doesn't exist)
      done(null)
    })
  } else {
    mkdirp(path.dirname(target.path), function (er) {
      if (er)
        return then(er)
      fs.writeFile(target.path, data, 'utf8', function (er) {
        if (er)
          return then(er)
        if (where === 'user' && myUid && myGid)
          fs.chown(target.path, +myUid, +myGid, then)
        else
          then()
      })
    })
  }

  function then (er) {
    if (er)
      return done(er)
    fs.chmod(target.path, mode, done)
  }

  function done (er) {
    if (er) {
      if (cb) return cb(er)
      else return this.emit('error', er)
    }
    this._saving --
    if (this._saving === 0) {
      if (cb) cb()
      this.emit('save')
    }
  }

  return this
}

Conf.prototype.addFile = function (file, name) {
  name = name || file
  var marker = {__source__:name}
  this.sources[name] = { path: file, type: 'ini' }
  this.push(marker)
  this._await()
  fs.readFile(file, 'utf8', function (er, data) {
    if (er) // just ignore missing files.
      return this.add({}, marker)
    this.addString(data, file, 'ini', marker)
  }.bind(this))
  return this
}

// always ini files.
Conf.prototype.parse = function (content, file) {
  return CC.prototype.parse.call(this, content, file, 'ini')
}

Conf.prototype.add = function (data, marker) {
  Object.keys(data).forEach(function (k) {
    data[k] = parseField(data[k], k)
  })
  return CC.prototype.add.call(this, data, marker)
}

Conf.prototype.addEnv = function (env) {
  env = env || process.env
  var conf = {}
  Object.keys(env)
    .filter(function (k) { return k.match(/^npm_config_/i) })
    .forEach(function (k) {
      if (!env[k])
        return

      // leave first char untouched, even if
      // it is a "_" - convert all other to "-"
      var p = k.toLowerCase()
               .replace(/^npm_config_/, '')
               .replace(/(?!^)_/g, '-')
      conf[p] = env[k]
    })
  return CC.prototype.addEnv.call(this, '', conf, 'env')
}

function parseField (f, k) {
  if (typeof f !== 'string' && !(f instanceof String))
    return f

  // type can be an array or single thing.
  var typeList = [].concat(types[k])
  var isPath = -1 !== typeList.indexOf(path)
  var isBool = -1 !== typeList.indexOf(Boolean)
  var isString = -1 !== typeList.indexOf(String)
  var isOctal = -1 !== typeList.indexOf(Octal)
  var isNumber = isOctal || (-1 !== typeList.indexOf(Number))

  f = (''+f).trim()

  if (f.match(/^".*"$/))
    f = JSON.parse(f)

  if (isBool && !isString && f === '')
    return true

  switch (f) {
    case 'true': return true
    case 'false': return false
    case 'null': return null
    case 'undefined': return undefined
  }

  f = envReplace(f)

  if (isPath) {
    var homePattern = process.platform === 'win32' ? /^~(\/|\\)/ : /^~\//
    if (f.match(homePattern) && process.env.HOME) {
      f = path.resolve(process.env.HOME, f.substr(2))
    }
    f = path.resolve(f)
  }

  if (isNumber && !isNaN(f))
    f = isOctal ? parseInt(f, 8) : +f

  return f
}

function envReplace (f) {
  if (typeof f !== 'string' || !f) return f

  // replace any ${ENV} values with the appropriate environ.
  var envExpr = /(\\*)\$\{([^}]+)\}/g
  return f.replace(envExpr, function (orig, esc, name) {
    esc = esc.length && esc.length % 2
    if (esc)
      return orig
    if (undefined === process.env[name])
      throw new Error('Failed to replace env in config: '+orig)
    return process.env[name]
  })
}

function validate (cl) {
  // warn about invalid configs at every level.
  cl.list.forEach(function (conf) {
    nopt.clean(conf, configDefs.types)
  })

  nopt.clean(cl.root, configDefs.types)
}

}).call(this,require('_process'))
},{"./config-defs.js":33,"./lib/find-prefix.js":34,"./lib/get-credentials-by-uri.js":35,"./lib/load-cafile.js":36,"./lib/load-prefix.js":37,"./lib/load-uid.js":38,"./lib/set-credentials-by-uri.js":40,"./lib/set-user.js":41,"_process":87,"config-chain":42,"fs":56,"inherits":27,"ini":28,"mkdirp":29,"nopt":30,"once":46,"path":86}],45:[function(require,module,exports){
(function (process){
var EE = require('events').EventEmitter
var log = exports = module.exports = new EE
var util = require('util')

var ansi = require('ansi')
log.cursor = ansi(process.stderr)
log.stream = process.stderr

// by default, let ansi decide based on tty-ness.
var colorEnabled = undefined
log.enableColor = function () {
  colorEnabled = true
  this.cursor.enabled = true
}
log.disableColor = function () {
  colorEnabled = false
  this.cursor.enabled = false
}

// default level
log.level = 'info'

// temporarily stop emitting, but don't drop
log.pause = function () {
  this._paused = true
}

log.resume = function () {
  if (!this._paused) return
  this._paused = false

  var b = this._buffer
  this._buffer = []
  b.forEach(function (m) {
    this.emitLog(m)
  }, this)
}

log._buffer = []

var id = 0
log.record = []
log.maxRecordSize = 10000
log.log = function (lvl, prefix, message) {
  var l = this.levels[lvl]
  if (l === undefined) {
    return this.emit('error', new Error(util.format(
      'Undefined log level: %j', lvl)))
  }

  var a = new Array(arguments.length - 2)
  var stack = null
  for (var i = 2; i < arguments.length; i ++) {
    var arg = a[i-2] = arguments[i]

    // resolve stack traces to a plain string.
    if (typeof arg === 'object' && arg &&
        (arg instanceof Error) && arg.stack) {
      arg.stack = stack = arg.stack + ''
    }
  }
  if (stack) a.unshift(stack + '\n')
  message = util.format.apply(util, a)

  var m = { id: id++,
            level: lvl,
            prefix: String(prefix || ''),
            message: message,
            messageRaw: a }

  this.emit('log', m)
  this.emit('log.' + lvl, m)
  if (m.prefix) this.emit(m.prefix, m)

  this.record.push(m)
  var mrs = this.maxRecordSize
  var n = this.record.length - mrs
  if (n > mrs / 10) {
    var newSize = Math.floor(mrs * 0.9)
    this.record = this.record.slice(-1 * newSize)
  }

  this.emitLog(m)
}.bind(log)

log.emitLog = function (m) {
  if (this._paused) {
    this._buffer.push(m)
    return
  }
  var l = this.levels[m.level]
  if (l === undefined) return
  if (l < this.levels[this.level]) return
  if (l > 0 && !isFinite(l)) return

  var style = log.style[m.level]
  var disp = log.disp[m.level] || m.level
  m.message.split(/\r?\n/).forEach(function (line) {
    if (this.heading) {
      this.write(this.heading, this.headingStyle)
      this.write(' ')
    }
    this.write(disp, log.style[m.level])
    var p = m.prefix || ''
    if (p) this.write(' ')
    this.write(p, this.prefixStyle)
    this.write(' ' + line + '\n')
  }, this)
}

log.write = function (msg, style) {
  if (!this.cursor) return
  if (this.stream !== this.cursor.stream) {
    this.cursor = ansi(this.stream, { enabled: colorEnabled })
  }

  style = style || {}
  if (style.fg) this.cursor.fg[style.fg]()
  if (style.bg) this.cursor.bg[style.bg]()
  if (style.bold) this.cursor.bold()
  if (style.underline) this.cursor.underline()
  if (style.inverse) this.cursor.inverse()
  if (style.beep) this.cursor.beep()
  this.cursor.write(msg).reset()
}

log.addLevel = function (lvl, n, style, disp) {
  if (!disp) disp = lvl
  this.levels[lvl] = n
  this.style[lvl] = style
  if (!this[lvl]) this[lvl] = function () {
    var a = new Array(arguments.length + 1)
    a[0] = lvl
    for (var i = 0; i < arguments.length; i ++) {
      a[i + 1] = arguments[i]
    }
    return this.log.apply(this, a)
  }.bind(this)
  this.disp[lvl] = disp
}

log.prefixStyle = { fg: 'magenta' }
log.headingStyle = { fg: 'white', bg: 'black' }

log.style = {}
log.levels = {}
log.disp = {}
log.addLevel('silly', -Infinity, { inverse: true }, 'sill')
log.addLevel('verbose', 1000, { fg: 'blue', bg: 'black' }, 'verb')
log.addLevel('info', 2000, { fg: 'green' })
log.addLevel('http', 3000, { fg: 'green', bg: 'black' })
log.addLevel('warn', 4000, { fg: 'black', bg: 'yellow' }, 'WARN')
log.addLevel('error', 5000, { fg: 'red', bg: 'black' }, 'ERR!')
log.addLevel('silent', Infinity)

}).call(this,require('_process'))
},{"_process":87,"ansi":20,"events":78,"util":108}],46:[function(require,module,exports){
module.exports = once

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

},{}],47:[function(require,module,exports){
(function (process){
var isWindows = process.platform === 'win32'
var path = require('path')
var exec = require('child_process').exec
var os = require('os')

// looking up envs is a bit costly.
// Also, sometimes we want to have a fallback
// Pass in a callback to wait for the fallback on failures
// After the first lookup, always returns the same thing.
function memo (key, lookup, fallback) {
  var fell = false
  var falling = false
  exports[key] = function (cb) {
    var val = lookup()
    if (!val && !fell && !falling && fallback) {
      fell = true
      falling = true
      exec(fallback, function (er, output, stderr) {
        falling = false
        if (er) return // oh well, we tried
        val = output.trim()
      })
    }
    exports[key] = function (cb) {
      if (cb) process.nextTick(cb.bind(null, null, val))
      return val
    }
    if (cb && !falling) process.nextTick(cb.bind(null, null, val))
    return val
  }
}

memo('user', function () {
  return ( isWindows
         ? process.env.USERDOMAIN + '\\' + process.env.USERNAME
         : process.env.USER
         )
}, 'whoami')

memo('prompt', function () {
  return isWindows ? process.env.PROMPT : process.env.PS1
})

memo('hostname', function () {
  return isWindows ? process.env.COMPUTERNAME : process.env.HOSTNAME
}, 'hostname')

memo('tmpdir', function () {
  return os.tmpDir()
})

memo('home', function () {
  return ( isWindows ? process.env.USERPROFILE
         : process.env.HOME
         )
})

memo('path', function () {
  return (process.env.PATH ||
          process.env.Path ||
          process.env.path).split(isWindows ? ';' : ':')
})

memo('editor', function () {
  return process.env.EDITOR ||
         process.env.VISUAL ||
         (isWindows ? 'notepad.exe' : 'vi')
})

memo('shell', function () {
  return isWindows ? process.env.ComSpec || 'cmd'
         : process.env.SHELL || 'bash'
})

}).call(this,require('_process'))
},{"_process":87,"child_process":56,"os":85,"path":86}],48:[function(require,module,exports){
(function (process){
module.exports = rimraf
rimraf.sync = rimrafSync

var assert = require("assert")
var path = require("path")
var fs = require("fs")

// for EMFILE handling
var timeout = 0
exports.EMFILE_MAX = 1000
exports.BUSYTRIES_MAX = 3

var isWindows = (process.platform === "win32")

function defaults (options) {
  var methods = [
    'unlink',
    'chmod',
    'stat',
    'rmdir',
    'readdir'
  ]
  methods.forEach(function(m) {
    options[m] = options[m] || fs[m]
    m = m + 'Sync'
    options[m] = options[m] || fs[m]
  })
}

function rimraf (p, options, cb) {
  if (typeof options === 'function') {
    cb = options
    options = {}
  }
  assert(p)
  assert(options)
  assert(typeof cb === 'function')

  defaults(options)

  if (!cb) throw new Error("No callback passed to rimraf()")

  var busyTries = 0
  rimraf_(p, options, function CB (er) {
    if (er) {
      if (isWindows && (er.code === "EBUSY" || er.code === "ENOTEMPTY") &&
          busyTries < exports.BUSYTRIES_MAX) {
        busyTries ++
        var time = busyTries * 100
        // try again, with the same exact callback as this one.
        return setTimeout(function () {
          rimraf_(p, options, CB)
        }, time)
      }

      // this one won't happen if graceful-fs is used.
      if (er.code === "EMFILE" && timeout < exports.EMFILE_MAX) {
        return setTimeout(function () {
          rimraf_(p, options, CB)
        }, timeout ++)
      }

      // already gone
      if (er.code === "ENOENT") er = null
    }

    timeout = 0
    cb(er)
  })
}

// Two possible strategies.
// 1. Assume it's a file.  unlink it, then do the dir stuff on EPERM or EISDIR
// 2. Assume it's a directory.  readdir, then do the file stuff on ENOTDIR
//
// Both result in an extra syscall when you guess wrong.  However, there
// are likely far more normal files in the world than directories.  This
// is based on the assumption that a the average number of files per
// directory is >= 1.
//
// If anyone ever complains about this, then I guess the strategy could
// be made configurable somehow.  But until then, YAGNI.
function rimraf_ (p, options, cb) {
  assert(p)
  assert(options)
  assert(typeof cb === 'function')

  options.unlink(p, function (er) {
    if (er) {
      if (er.code === "ENOENT")
        return cb(null)
      if (er.code === "EPERM")
        return (isWindows)
          ? fixWinEPERM(p, options, er, cb)
          : rmdir(p, options, er, cb)
      if (er.code === "EISDIR")
        return rmdir(p, options, er, cb)
    }
    return cb(er)
  })
}

function fixWinEPERM (p, options, er, cb) {
  assert(p)
  assert(options)
  assert(typeof cb === 'function')
  if (er)
    assert(er instanceof Error)

  options.chmod(p, 666, function (er2) {
    if (er2)
      cb(er2.code === "ENOENT" ? null : er)
    else
      options.stat(p, function(er3, stats) {
        if (er3)
          cb(er3.code === "ENOENT" ? null : er)
        else if (stats.isDirectory())
          rmdir(p, options, er, cb)
        else
          options.unlink(p, cb)
      })
  })
}

function fixWinEPERMSync (p, options, er) {
  assert(p)
  assert(options)
  if (er)
    assert(er instanceof Error)

  try {
    options.chmodSync(p, 666)
  } catch (er2) {
    if (er2.code === "ENOENT")
      return
    else
      throw er
  }

  try {
    var stats = options.statSync(p)
  } catch (er3) {
    if (er3.code === "ENOENT")
      return
    else
      throw er
  }

  if (stats.isDirectory())
    rmdirSync(p, options, er)
  else
    options.unlinkSync(p)
}

function rmdir (p, options, originalEr, cb) {
  assert(p)
  assert(options)
  if (originalEr)
    assert(originalEr instanceof Error)
  assert(typeof cb === 'function')

  // try to rmdir first, and only readdir on ENOTEMPTY or EEXIST (SunOS)
  // if we guessed wrong, and it's not a directory, then
  // raise the original error.
  options.rmdir(p, function (er) {
    if (er && (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM"))
      rmkids(p, options, cb)
    else if (er && er.code === "ENOTDIR")
      cb(originalEr)
    else
      cb(er)
  })
}

function rmkids(p, options, cb) {
  assert(p)
  assert(options)
  assert(typeof cb === 'function')

  options.readdir(p, function (er, files) {
    if (er)
      return cb(er)
    var n = files.length
    if (n === 0)
      return options.rmdir(p, cb)
    var errState
    files.forEach(function (f) {
      rimraf(path.join(p, f), options, function (er) {
        if (errState)
          return
        if (er)
          return cb(errState = er)
        if (--n === 0)
          options.rmdir(p, cb)
      })
    })
  })
}

// this looks simpler, and is strictly *faster*, but will
// tie up the JavaScript thread and fail on excessively
// deep directory trees.
function rimrafSync (p, options) {
  options = options || {}
  defaults(options)

  assert(p)
  assert(options)

  try {
    options.unlinkSync(p)
  } catch (er) {
    if (er.code === "ENOENT")
      return
    if (er.code === "EPERM")
      return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er)
    if (er.code !== "EISDIR")
      throw er
    rmdirSync(p, options, er)
  }
}

function rmdirSync (p, options, originalEr) {
  assert(p)
  assert(options)
  if (originalEr)
    assert(originalEr instanceof Error)

  try {
    options.rmdirSync(p)
  } catch (er) {
    if (er.code === "ENOENT")
      return
    if (er.code === "ENOTDIR")
      throw originalEr
    if (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM")
      rmkidsSync(p, options)
  }
}

function rmkidsSync (p, options) {
  assert(p)
  assert(options)
  options.readdirSync(p).forEach(function (f) {
    rimrafSync(path.join(p, f), options)
  })
  options.rmdirSync(p, options)
}

}).call(this,require('_process'))
},{"_process":87,"assert":57,"fs":56,"path":86}],49:[function(require,module,exports){
;(function(exports) {

// export the class if we are in a Node-like system.
if (typeof module === 'object' && module.exports === exports)
  exports = module.exports = SemVer;

// The debug function is excluded entirely from the minified version.

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0';

// The actual regexps go on exports.re
var re = exports.re = [];
var src = exports.src = [];
var R = 0;

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++;
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
var NUMERICIDENTIFIERLOOSE = R++;
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';


// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++;
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';


// ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++;
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')';

var MAINVERSIONLOOSE = R++;
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++;
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
                            '|' + src[NONNUMERICIDENTIFIER] + ')';

var PRERELEASEIDENTIFIERLOOSE = R++;
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[NONNUMERICIDENTIFIER] + ')';


// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++;
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

var PRERELEASELOOSE = R++;
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++;
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++;
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';


// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++;
var FULLPLAIN = 'v?' + src[MAINVERSION] +
                src[PRERELEASE] + '?' +
                src[BUILD] + '?';

src[FULL] = '^' + FULLPLAIN + '$';

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
                 src[PRERELEASELOOSE] + '?' +
                 src[BUILD] + '?';

var LOOSE = R++;
src[LOOSE] = '^' + LOOSEPLAIN + '$';

var GTLT = R++;
src[GTLT] = '((?:<|>)?=?)';

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
var XRANGEIDENTIFIERLOOSE = R++;
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
var XRANGEIDENTIFIER = R++;
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

var XRANGEPLAIN = R++;
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[PRERELEASE] + ')?' +
                   src[BUILD] + '?' +
                   ')?)?';

var XRANGEPLAINLOOSE = R++;
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[PRERELEASELOOSE] + ')?' +
                        src[BUILD] + '?' +
                        ')?)?';

var XRANGE = R++;
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
var XRANGELOOSE = R++;
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

// Tilde ranges.
// Meaning is "reasonably at or greater than"
var LONETILDE = R++;
src[LONETILDE] = '(?:~>?)';

var TILDETRIM = R++;
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
var tildeTrimReplace = '$1~';

var TILDE = R++;
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
var TILDELOOSE = R++;
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

// Caret ranges.
// Meaning is "at least and backwards compatible with"
var LONECARET = R++;
src[LONECARET] = '(?:\\^)';

var CARETTRIM = R++;
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
var caretTrimReplace = '$1^';

var CARET = R++;
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
var CARETLOOSE = R++;
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

// A simple gt/lt/eq thing, or just "" to indicate "any version"
var COMPARATORLOOSE = R++;
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
var COMPARATOR = R++;
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';


// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
var COMPARATORTRIM = R++;
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

// this one has to use the /g flag
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
var comparatorTrimReplace = '$1$2$3';


// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
var HYPHENRANGE = R++;
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[XRANGEPLAIN] + ')' +
                   '\\s*$';

var HYPHENRANGELOOSE = R++;
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s*$';

// Star ranges basically just allow anything at all.
var STAR = R++;
src[STAR] = '(<|>)?=?\\s*\\*';

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  ;
  if (!re[i])
    re[i] = new RegExp(src[i]);
}

exports.parse = parse;
function parse(version, loose) {
  var r = loose ? re[LOOSE] : re[FULL];
  return (r.test(version)) ? new SemVer(version, loose) : null;
}

exports.valid = valid;
function valid(version, loose) {
  var v = parse(version, loose);
  return v ? v.version : null;
}


exports.clean = clean;
function clean(version, loose) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
  return s ? s.version : null;
}

exports.SemVer = SemVer;

function SemVer(version, loose) {
  if (version instanceof SemVer) {
    if (version.loose === loose)
      return version;
    else
      version = version.version;
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version);
  }

  if (!(this instanceof SemVer))
    return new SemVer(version, loose);

  ;
  this.loose = loose;
  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

  if (!m)
    throw new TypeError('Invalid Version: ' + version);

  this.raw = version;

  // these are actually numbers
  this.major = +m[1];
  this.minor = +m[2];
  this.patch = +m[3];

  // numberify any prerelease numeric ids
  if (!m[4])
    this.prerelease = [];
  else
    this.prerelease = m[4].split('.').map(function(id) {
      return (/^[0-9]+$/.test(id)) ? +id : id;
    });

  this.build = m[5] ? m[5].split('.') : [];
  this.format();
}

SemVer.prototype.format = function() {
  this.version = this.major + '.' + this.minor + '.' + this.patch;
  if (this.prerelease.length)
    this.version += '-' + this.prerelease.join('.');
  return this.version;
};

SemVer.prototype.inspect = function() {
  return '<SemVer "' + this + '">';
};

SemVer.prototype.toString = function() {
  return this.version;
};

SemVer.prototype.compare = function(other) {
  ;
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  return this.compareMain(other) || this.comparePre(other);
};

SemVer.prototype.compareMain = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch);
};

SemVer.prototype.comparePre = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length)
    return -1;
  else if (!this.prerelease.length && other.prerelease.length)
    return 1;
  else if (!this.prerelease.length && !other.prerelease.length)
    return 0;

  var i = 0;
  do {
    var a = this.prerelease[i];
    var b = other.prerelease[i];
    ;
    if (a === undefined && b === undefined)
      return 0;
    else if (b === undefined)
      return 1;
    else if (a === undefined)
      return -1;
    else if (a === b)
      continue;
    else
      return compareIdentifiers(a, b);
  } while (++i);
};

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function(release) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor = 0;
      this.major++;
      this.inc('pre');
      break;
    case 'preminor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor++;
      this.inc('pre');
      break;
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0;
      this.inc('patch');
      this.inc('pre');
      break;
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0)
        this.inc('patch');
      this.inc('pre');
      break;

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)
        this.major++;
      this.minor = 0;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0)
        this.minor++;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0)
        this.patch++;
      this.prerelease = [];
      break;
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0)
        this.prerelease = [0];
      else {
        var i = this.prerelease.length;
        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++;
            i = -2;
          }
        }
        if (i === -1) // didn't increment anything
          this.prerelease.push(0);
      }
      break;

    default:
      throw new Error('invalid increment argument: ' + release);
  }
  this.format();
  return this;
};

exports.inc = inc;
function inc(version, release, loose) {
  try {
    return new SemVer(version, loose).inc(release).version;
  } catch (er) {
    return null;
  }
}

exports.compareIdentifiers = compareIdentifiers;

var numeric = /^[0-9]+$/;
function compareIdentifiers(a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return (anum && !bnum) ? -1 :
         (bnum && !anum) ? 1 :
         a < b ? -1 :
         a > b ? 1 :
         0;
}

exports.rcompareIdentifiers = rcompareIdentifiers;
function rcompareIdentifiers(a, b) {
  return compareIdentifiers(b, a);
}

exports.compare = compare;
function compare(a, b, loose) {
  return new SemVer(a, loose).compare(b);
}

exports.compareLoose = compareLoose;
function compareLoose(a, b) {
  return compare(a, b, true);
}

exports.rcompare = rcompare;
function rcompare(a, b, loose) {
  return compare(b, a, loose);
}

exports.sort = sort;
function sort(list, loose) {
  return list.sort(function(a, b) {
    return exports.compare(a, b, loose);
  });
}

exports.rsort = rsort;
function rsort(list, loose) {
  return list.sort(function(a, b) {
    return exports.rcompare(a, b, loose);
  });
}

exports.gt = gt;
function gt(a, b, loose) {
  return compare(a, b, loose) > 0;
}

exports.lt = lt;
function lt(a, b, loose) {
  return compare(a, b, loose) < 0;
}

exports.eq = eq;
function eq(a, b, loose) {
  return compare(a, b, loose) === 0;
}

exports.neq = neq;
function neq(a, b, loose) {
  return compare(a, b, loose) !== 0;
}

exports.gte = gte;
function gte(a, b, loose) {
  return compare(a, b, loose) >= 0;
}

exports.lte = lte;
function lte(a, b, loose) {
  return compare(a, b, loose) <= 0;
}

exports.cmp = cmp;
function cmp(a, op, b, loose) {
  var ret;
  switch (op) {
    case '===':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a === b;
      break;
    case '!==':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a !== b;
      break;
    case '': case '=': case '==': ret = eq(a, b, loose); break;
    case '!=': ret = neq(a, b, loose); break;
    case '>': ret = gt(a, b, loose); break;
    case '>=': ret = gte(a, b, loose); break;
    case '<': ret = lt(a, b, loose); break;
    case '<=': ret = lte(a, b, loose); break;
    default: throw new TypeError('Invalid operator: ' + op);
  }
  return ret;
}

exports.Comparator = Comparator;
function Comparator(comp, loose) {
  if (comp instanceof Comparator) {
    if (comp.loose === loose)
      return comp;
    else
      comp = comp.value;
  }

  if (!(this instanceof Comparator))
    return new Comparator(comp, loose);

  ;
  this.loose = loose;
  this.parse(comp);

  if (this.semver === ANY)
    this.value = '';
  else
    this.value = this.operator + this.semver.version;

  ;
}

var ANY = {};
Comparator.prototype.parse = function(comp) {
  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var m = comp.match(r);

  if (!m)
    throw new TypeError('Invalid comparator: ' + comp);

  this.operator = m[1];
  if (this.operator === '=')
    this.operator = '';

  // if it literally is just '>' or '' then allow anything.
  if (!m[2])
    this.semver = ANY;
  else
    this.semver = new SemVer(m[2], this.loose);
};

Comparator.prototype.inspect = function() {
  return '<SemVer Comparator "' + this + '">';
};

Comparator.prototype.toString = function() {
  return this.value;
};

Comparator.prototype.test = function(version) {
  ;

  if (this.semver === ANY)
    return true;

  if (typeof version === 'string')
    version = new SemVer(version, this.loose);

  return cmp(version, this.operator, this.semver, this.loose);
};


exports.Range = Range;
function Range(range, loose) {
  if ((range instanceof Range) && range.loose === loose)
    return range;

  if (!(this instanceof Range))
    return new Range(range, loose);

  this.loose = loose;

  // First, split based on boolean or ||
  this.raw = range;
  this.set = range.split(/\s*\|\|\s*/).map(function(range) {
    return this.parseRange(range.trim());
  }, this).filter(function(c) {
    // throw out any that are not relevant for whatever reason
    return c.length;
  });

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range);
  }

  this.format();
}

Range.prototype.inspect = function() {
  return '<SemVer Range "' + this.range + '">';
};

Range.prototype.format = function() {
  this.range = this.set.map(function(comps) {
    return comps.join(' ').trim();
  }).join('||').trim();
  return this.range;
};

Range.prototype.toString = function() {
  return this.range;
};

Range.prototype.parseRange = function(range) {
  var loose = this.loose;
  range = range.trim();
  ;
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
  range = range.replace(hr, hyphenReplace);
  ;
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
  ;

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[TILDETRIM], tildeTrimReplace);

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[CARETTRIM], caretTrimReplace);

  // normalize spaces
  range = range.split(/\s+/).join(' ');

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var set = range.split(' ').map(function(comp) {
    return parseComparator(comp, loose);
  }).join(' ').split(/\s+/);
  if (this.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function(comp) {
      return !!comp.match(compRe);
    });
  }
  set = set.map(function(comp) {
    return new Comparator(comp, loose);
  });

  return set;
};

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators;
function toComparators(range, loose) {
  return new Range(range, loose).set.map(function(comp) {
    return comp.map(function(c) {
      return c.value;
    }).join(' ').trim().split(' ');
  });
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator(comp, loose) {
  ;
  comp = replaceCarets(comp, loose);
  ;
  comp = replaceTildes(comp, loose);
  ;
  comp = replaceXRanges(comp, loose);
  ;
  comp = replaceStars(comp, loose);
  ;
  return comp;
}

function isX(id) {
  return !id || id.toLowerCase() === 'x' || id === '*';
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceTilde(comp, loose);
  }).join(' ');
}

function replaceTilde(comp, loose) {
  var r = loose ? re[TILDELOOSE] : re[TILDE];
  return comp.replace(r, function(_, M, m, p, pr) {
    ;
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p))
      // ~1.2 == >=1.2.0- <1.3.0-
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    else if (pr) {
      ;
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      ret = '>=' + M + '.' + m + '.' + p + pr +
            ' <' + M + '.' + (+m + 1) + '.0';
    } else
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0';

    ;
    return ret;
  });
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceCaret(comp, loose);
  }).join(' ');
}

function replaceCaret(comp, loose) {
  ;
  var r = loose ? re[CARETLOOSE] : re[CARET];
  return comp.replace(r, function(_, M, m, p, pr) {
    ;
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p)) {
      if (M === '0')
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
      else
        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
    } else if (pr) {
      ;
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p + pr +
              ' <' + (+M + 1) + '.0.0';
    } else {
      ;
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0';
    }

    ;
    return ret;
  });
}

function replaceXRanges(comp, loose) {
  ;
  return comp.split(/\s+/).map(function(comp) {
    return replaceXRange(comp, loose);
  }).join(' ');
}

function replaceXRange(comp, loose) {
  comp = comp.trim();
  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
    ;
    var xM = isX(M);
    var xm = xM || isX(m);
    var xp = xm || isX(p);
    var anyX = xp;

    if (gtlt === '=' && anyX)
      gtlt = '';

    if (gtlt && anyX) {
      // replace X with 0
      if (xM)
        M = 0;
      if (xm)
        m = 0;
      if (xp)
        p = 0;

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>=';
        if (xM) {
          // no change
        } else if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else if (xp) {
          m = +m + 1;
          p = 0;
        }
      }


      ret = gtlt + M + '.' + m + '.' + p;
    } else if (xM) {
      // allow any
      ret = '*';
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    }

    ;

    return ret;
  });
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars(comp, loose) {
  ;
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[STAR], '');
}

// This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace($0,
                       from, fM, fm, fp, fpr, fb,
                       to, tM, tm, tp, tpr, tb) {

  if (isX(fM))
    from = '';
  else if (isX(fm))
    from = '>=' + fM + '.0.0';
  else if (isX(fp))
    from = '>=' + fM + '.' + fm + '.0';
  else
    from = '>=' + from;

  if (isX(tM))
    to = '';
  else if (isX(tm))
    to = '<' + (+tM + 1) + '.0.0';
  else if (isX(tp))
    to = '<' + tM + '.' + (+tm + 1) + '.0';
  else if (tpr)
    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
  else
    to = '<=' + to;

  return (from + ' ' + to).trim();
}


// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function(version) {
  if (!version)
    return false;

  if (typeof version === 'string')
    version = new SemVer(version, this.loose);

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version))
      return true;
  }
  return false;
};

function testSet(set, version) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version))
      return false;
  }

  if (version.prerelease.length) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (var i = 0; i < set.length; i++) {
      ;
      if (set[i].semver === ANY)
        return true;

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver;
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch)
          return true;
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false;
  }

  return true;
}

exports.satisfies = satisfies;
function satisfies(version, range, loose) {
  try {
    range = new Range(range, loose);
  } catch (er) {
    return false;
  }
  return range.test(version);
}

exports.maxSatisfying = maxSatisfying;
function maxSatisfying(versions, range, loose) {
  return versions.filter(function(version) {
    return satisfies(version, range, loose);
  }).sort(function(a, b) {
    return rcompare(a, b, loose);
  })[0] || null;
}

exports.validRange = validRange;
function validRange(range, loose) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, loose).range || '*';
  } catch (er) {
    return null;
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr;
function ltr(version, range, loose) {
  return outside(version, range, '<', loose);
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr;
function gtr(version, range, loose) {
  return outside(version, range, '>', loose);
}

exports.outside = outside;
function outside(version, range, hilo, loose) {
  version = new SemVer(version, loose);
  range = new Range(range, loose);

  var gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;
    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, loose)) {
    return false;
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];

    var high = null;
    var low = null;

    comparators.forEach(function(comparator) {
      high = high || comparator;
      low = low || comparator;
      if (gtfn(comparator.semver, high.semver, loose)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, loose)) {
        low = comparator;
      }
    });

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }
  return true;
}

// Use the define() function if we're in AMD land
if (typeof define === 'function' && define.amd)
  define(exports);

})(
  typeof exports === 'object' ? exports :
  typeof define === 'function' && define.amd ? {} :
  semver = {}
);

},{}],50:[function(require,module,exports){
(function (process){

/*
usage:

// do something to a list of things
asyncMap(myListOfStuff, function (thing, cb) { doSomething(thing.foo, cb) }, cb)
// do more than one thing to each item
asyncMap(list, fooFn, barFn, cb)

*/

module.exports = asyncMap

function asyncMap () {
  var steps = Array.prototype.slice.call(arguments)
    , list = steps.shift() || []
    , cb_ = steps.pop()
  if (typeof cb_ !== "function") throw new Error(
    "No callback provided to asyncMap")
  if (!list) return cb_(null, [])
  if (!Array.isArray(list)) list = [list]
  var n = steps.length
    , data = [] // 2d array
    , errState = null
    , l = list.length
    , a = l * n
  if (!a) return cb_(null, [])
  function cb (er) {
    if (er && !errState) errState = er

    var argLen = arguments.length
    for (var i = 1; i < argLen; i ++) if (arguments[i] !== undefined) {
      data[i - 1] = (data[i - 1] || []).concat(arguments[i])
    }
    // see if any new things have been added.
    if (list.length > l) {
      var newList = list.slice(l)
      a += (list.length - l) * n
      l = list.length
      process.nextTick(function () {
        newList.forEach(function (ar) {
          steps.forEach(function (fn) { fn(ar, cb) })
        })
      })
    }

    if (--a === 0) cb_.apply(null, [errState].concat(data))
  }
  // expect the supplied cb function to be called
  // "n" times for each thing in the array.
  list.forEach(function (ar) {
    steps.forEach(function (fn) { fn(ar, cb) })
  })
}

}).call(this,require('_process'))
},{"_process":87}],51:[function(require,module,exports){
module.exports = bindActor
function bindActor () {
  var args = 
        Array.prototype.slice.call
        (arguments) // jswtf.
    , obj = null
    , fn
  if (typeof args[0] === "object") {
    obj = args.shift()
    fn = args.shift()
    if (typeof fn === "string")
      fn = obj[ fn ]
  } else fn = args.shift()
  return function (cb) {
    fn.apply(obj, args.concat(cb)) }
}

},{}],52:[function(require,module,exports){
module.exports = chain
var bindActor = require("./bind-actor.js")
chain.first = {} ; chain.last = {}
function chain (things, cb) {
  var res = []
  ;(function LOOP (i, len) {
    if (i >= len) return cb(null,res)
    if (Array.isArray(things[i]))
      things[i] = bindActor.apply(null,
        things[i].map(function(i){
          return (i===chain.first) ? res[0]
           : (i===chain.last)
             ? res[res.length - 1] : i }))
    if (!things[i]) return LOOP(i + 1, len)
    things[i](function (er, data) {
      if (er) return cb(er, res)
      if (data !== undefined) res = res.concat(data)
      LOOP(i + 1, len)
    })
  })(0, things.length) }

},{"./bind-actor.js":51}],53:[function(require,module,exports){
exports.asyncMap = require("./async-map")
exports.bindActor = require("./bind-actor")
exports.chain = require("./chain")

},{"./async-map":50,"./bind-actor":51,"./chain":52}],54:[function(require,module,exports){
(function (process){
module.exports = uidNumber

// This module calls into get-uid-gid.js, which sets the
// uid and gid to the supplied argument, in order to find out their
// numeric value.  This can't be done in the main node process,
// because otherwise node would be running as that user from this
// point on.

var child_process = require("child_process")
  , path = require("path")
  , uidSupport = process.getuid && process.setuid
  , uidCache = {}
  , gidCache = {}

function uidNumber (uid, gid, cb) {
  if (!uidSupport) return cb()
  if (typeof cb !== "function") cb = gid, gid = null
  if (typeof cb !== "function") cb = uid, uid = null
  if (gid == null) gid = process.getgid()
  if (uid == null) uid = process.getuid()
  if (!isNaN(gid)) gid = gidCache[gid] = +gid
  if (!isNaN(uid)) uid = uidCache[uid] = +uid

  if (uidCache.hasOwnProperty(uid)) uid = uidCache[uid]
  if (gidCache.hasOwnProperty(gid)) gid = gidCache[gid]

  if (typeof gid === "number" && typeof uid === "number") {
    return process.nextTick(cb.bind(null, null, uid, gid))
  }

  var getter = require.resolve("./get-uid-gid.js")

  child_process.execFile( process.execPath
                        , [getter, uid, gid]
                        , function (code, out, err) {
    if (er) return cb(new Error("could not get uid/gid\n" + err))
    try {
      out = JSON.parse(out+"")
    } catch (ex) {
      return cb(ex)
    }

    if (out.error) {
      var er = new Error(out.error)
      er.errno = out.errno
      return cb(er)
    }

    if (isNaN(out.uid) || isNaN(out.gid)) return cb(new Error(
      "Could not get uid/gid: "+JSON.stringify(out)))

    cb(null, uidCache[uid] = +out.uid, gidCache[gid] = +out.gid)
  })
}

}).call(this,require('_process'))
},{"_process":87,"child_process":56,"path":86}],55:[function(require,module,exports){
(function (process){
module.exports = which
which.sync = whichSync

var path = require("path")
  , fs
  , COLON = process.platform === "win32" ? ";" : ":"
  , isExe

try {
  fs = require("graceful-fs")
} catch (ex) {
  fs = require("fs")
}

if (process.platform == "win32") {
  // On windows, there is no good way to check that a file is executable
  isExe = function isExe () { return true }
} else {
  isExe = function isExe (mod, uid, gid) {
    //console.error(mod, uid, gid);
    //console.error("isExe?", (mod & 0111).toString(8))
    var ret = (mod & 0001)
        || (mod & 0010) && process.getgid && gid === process.getgid()
        || (mod & 0100) && process.getuid && uid === process.getuid()
    //console.error("isExe?", ret)
    return ret
  }
}



function which (cmd, cb) {
  if (isAbsolute(cmd)) return cb(null, cmd)
  var pathEnv = (process.env.PATH || "").split(COLON)
    , pathExt = [""]
  if (process.platform === "win32") {
    pathEnv.push(process.cwd())
    pathExt = (process.env.PATHEXT || ".EXE").split(COLON)
    if (cmd.indexOf(".") !== -1) pathExt.unshift("")
  }
  //console.error("pathEnv", pathEnv)
  ;(function F (i, l) {
    if (i === l) return cb(new Error("not found: "+cmd))
    var p = path.resolve(pathEnv[i], cmd)
    ;(function E (ii, ll) {
      if (ii === ll) return F(i + 1, l)
      var ext = pathExt[ii]
      //console.error(p + ext)
      fs.stat(p + ext, function (er, stat) {
        if (!er &&
            stat &&
            stat.isFile() &&
            isExe(stat.mode, stat.uid, stat.gid)) {
          //console.error("yes, exe!", p + ext)
          return cb(null, p + ext)
        }
        return E(ii + 1, ll)
      })
    })(0, pathExt.length)
  })(0, pathEnv.length)
}

function whichSync (cmd) {
  if (isAbsolute(cmd)) return cmd
  var pathEnv = (process.env.PATH || "").split(COLON)
    , pathExt = [""]
  if (process.platform === "win32") {
    pathEnv.push(process.cwd())
    pathExt = (process.env.PATHEXT || ".EXE").split(COLON)
    if (cmd.indexOf(".") !== -1) pathExt.unshift("")
  }
  for (var i = 0, l = pathEnv.length; i < l; i ++) {
    var p = path.join(pathEnv[i], cmd)
    for (var j = 0, ll = pathExt.length; j < ll; j ++) {
      var cur = p + pathExt[j]
      var stat
      try { stat = fs.statSync(cur) } catch (ex) {}
      if (stat &&
          stat.isFile() &&
          isExe(stat.mode, stat.uid, stat.gid)) return cur
    }
  }
  throw new Error("not found: "+cmd)
}

var isAbsolute = process.platform === "win32" ? absWin : absUnix

function absWin (p) {
  if (absUnix(p)) return true
  // pull off the device/UNC bit from a windows path.
  // from node's lib/path.js
  var splitDeviceRe =
        /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?([\\\/])?/
    , result = splitDeviceRe.exec(p)
    , device = result[1] || ''
    , isUnc = device && device.charAt(1) !== ':'
    , isAbsolute = !!result[2] || isUnc // UNC paths are always absolute

  return isAbsolute
}

function absUnix (p) {
  return p.charAt(0) === "/" || p === ""
}

}).call(this,require('_process'))
},{"_process":87,"fs":56,"graceful-fs":25,"path":86}],56:[function(require,module,exports){

},{}],57:[function(require,module,exports){
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// when used in node, this will actually load the util module we depend on
// versus loading the builtin util module as happens otherwise
// this is a bug in node module loading as far as I am concerned
var util = require('util/');

var pSlice = Array.prototype.slice;
var hasOwn = Object.prototype.hasOwnProperty;

// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  }
  else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = stackStartFunction.name;
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function replacer(key, value) {
  if (util.isUndefined(value)) {
    return '' + value;
  }
  if (util.isNumber(value) && (isNaN(value) || !isFinite(value))) {
    return value.toString();
  }
  if (util.isFunction(value) || util.isRegExp(value)) {
    return value.toString();
  }
  return value;
}

function truncate(s, n) {
  if (util.isString(s)) {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}

function getMessage(self) {
  return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' +
         self.operator + ' ' +
         truncate(JSON.stringify(self.expected, replacer), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

function _deepEqual(actual, expected) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
    if (actual.length != expected.length) return false;

    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }

    return true;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!util.isObject(actual) && !util.isObject(expected)) {
    return actual == expected;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b) {
  if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b);
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b),
        key, i;
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key])) return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  } else if (actual instanceof expected) {
    return true;
  } else if (expected.call({}, actual) === true) {
    return true;
  }

  return false;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (util.isString(expected)) {
    message = expected;
    expected = null;
  }

  try {
    block();
  } catch (e) {
    actual = e;
  }

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  if (!shouldThrow && expectedException(actual, expected)) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws.apply(this, [true].concat(pSlice.call(arguments)));
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/message) {
  _throws.apply(this, [false].concat(pSlice.call(arguments)));
};

assert.ifError = function(err) { if (err) {throw err;}};

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

},{"util/":108}],58:[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('is-array')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var kMaxLength = 0x3fffffff

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Note:
 *
 * - Implementation must support adding new properties to `Uint8Array` instances.
 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *    incorrect length in some situations.
 *
 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
 * get the Object implementation, which is slower but will work correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = (function () {
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Find the length
  var length
  if (type === 'number')
    length = subject > 0 ? subject >>> 0 : 0
  else if (type === 'string') {
    if (encoding === 'base64')
      subject = base64clean(subject)
    length = Buffer.byteLength(subject, encoding)
  } else if (type === 'object' && subject !== null) { // assume object is array-like
    if (subject.type === 'Buffer' && isArray(subject.data))
      subject = subject.data
    length = +subject.length > 0 ? Math.floor(+subject.length) : 0
  } else
    throw new TypeError('must start with number, buffer, array or string')

  if (this.length > kMaxLength)
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
      'size: 0x' + kMaxLength.toString(16) + ' bytes')

  var buf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer.TYPED_ARRAY_SUPPORT && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    if (Buffer.isBuffer(subject)) {
      for (i = 0; i < length; i++)
        buf[i] = subject.readUInt8(i)
    } else {
      for (i = 0; i < length; i++)
        buf[i] = ((subject[i] % 256) + 256) % 256
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer.TYPED_ARRAY_SUPPORT && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

Buffer.isBuffer = function (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b))
    throw new TypeError('Arguments must be Buffers')

  var x = a.length
  var y = b.length
  for (var i = 0, len = Math.min(x, y); i < len && a[i] === b[i]; i++) {}
  if (i !== len) {
    x = a[i]
    y = b[i]
  }
  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function (list, totalLength) {
  if (!isArray(list)) throw new TypeError('Usage: Buffer.concat(list[, length])')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (totalLength === undefined) {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    case 'hex':
      ret = str.length >>> 1
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    default:
      ret = str.length
  }
  return ret
}

// pre-set for values that may exist in the future
Buffer.prototype.length = undefined
Buffer.prototype.parent = undefined

// toString(encoding, start=0, end=buffer.length)
Buffer.prototype.toString = function (encoding, start, end) {
  var loweredCase = false

  start = start >>> 0
  end = end === undefined || end === Infinity ? this.length : end >>> 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase)
          throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.equals = function (b) {
  if(!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max)
      str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  return Buffer.compare(this, b)
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(byte)) throw new Error('Invalid hex string')
    buf[offset + i] = byte
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function asciiWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function utf16leWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = utf16leWrite(this, string, offset, length)
      break
    default:
      throw new TypeError('Unknown encoding: ' + encoding)
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function binarySlice (buf, start, end) {
  return asciiSlice(buf, start, end)
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len;
    if (start < 0)
      start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0)
      end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start)
    end = start

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0)
    throw new RangeError('offset is not uint')
  if (offset + ext > length)
    throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
      ((this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      this[offset + 3])
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80))
    return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16) |
      (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
      (this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      (this[offset + 3])
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new TypeError('value is out of bounds')
  if (offset + ext > buf.length) throw new TypeError('index out of range')
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = value
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else objectWriteUInt16(this, value, offset, true)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else objectWriteUInt16(this, value, offset, false)
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = value
  } else objectWriteUInt32(this, value, offset, true)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else objectWriteUInt32(this, value, offset, false)
  return offset + 4
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = value
  return offset + 1
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else objectWriteUInt16(this, value, offset, true)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else objectWriteUInt16(this, value, offset, false)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else objectWriteUInt32(this, value, offset, true)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else objectWriteUInt32(this, value, offset, false)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (value > max || value < min) throw new TypeError('value is out of bounds')
  if (offset + ext > buf.length) throw new TypeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert)
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert)
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  if (end < start) throw new TypeError('sourceEnd < sourceStart')
  if (target_start < 0 || target_start >= target.length)
    throw new TypeError('targetStart out of bounds')
  if (start < 0 || start >= source.length) throw new TypeError('sourceStart out of bounds')
  if (end < 0 || end > source.length) throw new TypeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < len; i++) {
      target[i + target_start] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new TypeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new TypeError('start out of bounds')
  if (end < 0 || end > this.length) throw new TypeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-z]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F) {
      byteArray.push(b)
    } else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++) {
        byteArray.push(parseInt(h[j], 16))
      }
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

},{"base64-js":59,"ieee754":60,"is-array":61}],59:[function(require,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS)
			return 62 // '+'
		if (code === SLASH)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],60:[function(require,module,exports){
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

},{}],61:[function(require,module,exports){

/**
 * isArray
 */

var isArray = Array.isArray;

/**
 * toString
 */

var str = Object.prototype.toString;

/**
 * Whether or not the given `val`
 * is an array.
 *
 * example:
 *
 *        isArray([]);
 *        // > true
 *        isArray(arguments);
 *        // > false
 *        isArray('');
 *        // > false
 *
 * @param {mixed} val
 * @return {bool}
 */

module.exports = isArray || function (val) {
  return !! val && '[object Array]' == str.call(val);
};

},{}],62:[function(require,module,exports){
module.exports={
  "O_RDONLY": 0,
  "O_WRONLY": 1,
  "O_RDWR": 2,
  "S_IFMT": 61440,
  "S_IFREG": 32768,
  "S_IFDIR": 16384,
  "S_IFCHR": 8192,
  "S_IFBLK": 24576,
  "S_IFIFO": 4096,
  "S_IFLNK": 40960,
  "S_IFSOCK": 49152,
  "O_CREAT": 512,
  "O_EXCL": 2048,
  "O_NOCTTY": 131072,
  "O_TRUNC": 1024,
  "O_APPEND": 8,
  "O_DIRECTORY": 1048576,
  "O_NOFOLLOW": 256,
  "O_SYNC": 128,
  "O_SYMLINK": 2097152,
  "S_IRWXU": 448,
  "S_IRUSR": 256,
  "S_IWUSR": 128,
  "S_IXUSR": 64,
  "S_IRWXG": 56,
  "S_IRGRP": 32,
  "S_IWGRP": 16,
  "S_IXGRP": 8,
  "S_IRWXO": 7,
  "S_IROTH": 4,
  "S_IWOTH": 2,
  "S_IXOTH": 1,
  "E2BIG": 7,
  "EACCES": 13,
  "EADDRINUSE": 48,
  "EADDRNOTAVAIL": 49,
  "EAFNOSUPPORT": 47,
  "EAGAIN": 35,
  "EALREADY": 37,
  "EBADF": 9,
  "EBADMSG": 94,
  "EBUSY": 16,
  "ECANCELED": 89,
  "ECHILD": 10,
  "ECONNABORTED": 53,
  "ECONNREFUSED": 61,
  "ECONNRESET": 54,
  "EDEADLK": 11,
  "EDESTADDRREQ": 39,
  "EDOM": 33,
  "EDQUOT": 69,
  "EEXIST": 17,
  "EFAULT": 14,
  "EFBIG": 27,
  "EHOSTUNREACH": 65,
  "EIDRM": 90,
  "EILSEQ": 92,
  "EINPROGRESS": 36,
  "EINTR": 4,
  "EINVAL": 22,
  "EIO": 5,
  "EISCONN": 56,
  "EISDIR": 21,
  "ELOOP": 62,
  "EMFILE": 24,
  "EMLINK": 31,
  "EMSGSIZE": 40,
  "EMULTIHOP": 95,
  "ENAMETOOLONG": 63,
  "ENETDOWN": 50,
  "ENETRESET": 52,
  "ENETUNREACH": 51,
  "ENFILE": 23,
  "ENOBUFS": 55,
  "ENODATA": 96,
  "ENODEV": 19,
  "ENOENT": 2,
  "ENOEXEC": 8,
  "ENOLCK": 77,
  "ENOLINK": 97,
  "ENOMEM": 12,
  "ENOMSG": 91,
  "ENOPROTOOPT": 42,
  "ENOSPC": 28,
  "ENOSR": 98,
  "ENOSTR": 99,
  "ENOSYS": 78,
  "ENOTCONN": 57,
  "ENOTDIR": 20,
  "ENOTEMPTY": 66,
  "ENOTSOCK": 38,
  "ENOTSUP": 45,
  "ENOTTY": 25,
  "ENXIO": 6,
  "EOPNOTSUPP": 102,
  "EOVERFLOW": 84,
  "EPERM": 1,
  "EPIPE": 32,
  "EPROTO": 100,
  "EPROTONOSUPPORT": 43,
  "EPROTOTYPE": 41,
  "ERANGE": 34,
  "EROFS": 30,
  "ESPIPE": 29,
  "ESRCH": 3,
  "ESTALE": 70,
  "ETIME": 101,
  "ETIMEDOUT": 60,
  "ETXTBSY": 26,
  "EWOULDBLOCK": 35,
  "EXDEV": 18,
  "SIGHUP": 1,
  "SIGINT": 2,
  "SIGQUIT": 3,
  "SIGILL": 4,
  "SIGTRAP": 5,
  "SIGABRT": 6,
  "SIGIOT": 6,
  "SIGBUS": 10,
  "SIGFPE": 8,
  "SIGKILL": 9,
  "SIGUSR1": 30,
  "SIGSEGV": 11,
  "SIGUSR2": 31,
  "SIGPIPE": 13,
  "SIGALRM": 14,
  "SIGTERM": 15,
  "SIGCHLD": 20,
  "SIGCONT": 19,
  "SIGSTOP": 17,
  "SIGTSTP": 18,
  "SIGTTIN": 21,
  "SIGTTOU": 22,
  "SIGURG": 16,
  "SIGXCPU": 24,
  "SIGXFSZ": 25,
  "SIGVTALRM": 26,
  "SIGPROF": 27,
  "SIGWINCH": 28,
  "SIGIO": 23,
  "SIGSYS": 12,
  "SSL_OP_ALL": 2147486719,
  "SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION": 262144,
  "SSL_OP_CIPHER_SERVER_PREFERENCE": 4194304,
  "SSL_OP_CISCO_ANYCONNECT": 32768,
  "SSL_OP_COOKIE_EXCHANGE": 8192,
  "SSL_OP_CRYPTOPRO_TLSEXT_BUG": 2147483648,
  "SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS": 2048,
  "SSL_OP_EPHEMERAL_RSA": 2097152,
  "SSL_OP_LEGACY_SERVER_CONNECT": 4,
  "SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER": 32,
  "SSL_OP_MICROSOFT_SESS_ID_BUG": 1,
  "SSL_OP_MSIE_SSLV2_RSA_PADDING": 64,
  "SSL_OP_NETSCAPE_CA_DN_BUG": 536870912,
  "SSL_OP_NETSCAPE_CHALLENGE_BUG": 2,
  "SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG": 1073741824,
  "SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG": 8,
  "SSL_OP_NO_COMPRESSION": 131072,
  "SSL_OP_NO_QUERY_MTU": 4096,
  "SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION": 65536,
  "SSL_OP_NO_SSLv2": 16777216,
  "SSL_OP_NO_SSLv3": 33554432,
  "SSL_OP_NO_TICKET": 16384,
  "SSL_OP_NO_TLSv1": 67108864,
  "SSL_OP_NO_TLSv1_1": 268435456,
  "SSL_OP_NO_TLSv1_2": 134217728,
  "SSL_OP_PKCS1_CHECK_1": 0,
  "SSL_OP_PKCS1_CHECK_2": 0,
  "SSL_OP_SINGLE_DH_USE": 1048576,
  "SSL_OP_SINGLE_ECDH_USE": 524288,
  "SSL_OP_SSLEAY_080_CLIENT_DH_BUG": 128,
  "SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG": 16,
  "SSL_OP_TLS_BLOCK_PADDING_BUG": 512,
  "SSL_OP_TLS_D5_BUG": 256,
  "SSL_OP_TLS_ROLLBACK_BUG": 8388608,
  "NPN_ENABLED": 1
}

},{}],63:[function(require,module,exports){
(function (Buffer){
var createHash = require('sha.js')

var md5 = toConstructor(require('./md5'))
var rmd160 = toConstructor(require('ripemd160'))

function toConstructor (fn) {
  return function () {
    var buffers = []
    var m= {
      update: function (data, enc) {
        if(!Buffer.isBuffer(data)) data = new Buffer(data, enc)
        buffers.push(data)
        return this
      },
      digest: function (enc) {
        var buf = Buffer.concat(buffers)
        var r = fn(buf)
        buffers = null
        return enc ? r.toString(enc) : r
      }
    }
    return m
  }
}

module.exports = function (alg) {
  if('md5' === alg) return new md5()
  if('rmd160' === alg) return new rmd160()
  return createHash(alg)
}

}).call(this,require("buffer").Buffer)
},{"./md5":67,"buffer":58,"ripemd160":70,"sha.js":72}],64:[function(require,module,exports){
(function (Buffer){
var createHash = require('./create-hash')

var zeroBuffer = new Buffer(128)
zeroBuffer.fill(0)

module.exports = Hmac

function Hmac (alg, key) {
  if(!(this instanceof Hmac)) return new Hmac(alg, key)
  this._opad = opad
  this._alg = alg

  var blocksize = (alg === 'sha512') ? 128 : 64

  key = this._key = !Buffer.isBuffer(key) ? new Buffer(key) : key

  if(key.length > blocksize) {
    key = createHash(alg).update(key).digest()
  } else if(key.length < blocksize) {
    key = Buffer.concat([key, zeroBuffer], blocksize)
  }

  var ipad = this._ipad = new Buffer(blocksize)
  var opad = this._opad = new Buffer(blocksize)

  for(var i = 0; i < blocksize; i++) {
    ipad[i] = key[i] ^ 0x36
    opad[i] = key[i] ^ 0x5C
  }

  this._hash = createHash(alg).update(ipad)
}

Hmac.prototype.update = function (data, enc) {
  this._hash.update(data, enc)
  return this
}

Hmac.prototype.digest = function (enc) {
  var h = this._hash.digest()
  return createHash(this._alg).update(this._opad).update(h).digest(enc)
}


}).call(this,require("buffer").Buffer)
},{"./create-hash":63,"buffer":58}],65:[function(require,module,exports){
(function (Buffer){
var intSize = 4;
var zeroBuffer = new Buffer(intSize); zeroBuffer.fill(0);
var chrsz = 8;

function toArray(buf, bigEndian) {
  if ((buf.length % intSize) !== 0) {
    var len = buf.length + (intSize - (buf.length % intSize));
    buf = Buffer.concat([buf, zeroBuffer], len);
  }

  var arr = [];
  var fn = bigEndian ? buf.readInt32BE : buf.readInt32LE;
  for (var i = 0; i < buf.length; i += intSize) {
    arr.push(fn.call(buf, i));
  }
  return arr;
}

function toBuffer(arr, size, bigEndian) {
  var buf = new Buffer(size);
  var fn = bigEndian ? buf.writeInt32BE : buf.writeInt32LE;
  for (var i = 0; i < arr.length; i++) {
    fn.call(buf, arr[i], i * 4, true);
  }
  return buf;
}

function hash(buf, fn, hashSize, bigEndian) {
  if (!Buffer.isBuffer(buf)) buf = new Buffer(buf);
  var arr = fn(toArray(buf, bigEndian), buf.length * chrsz);
  return toBuffer(arr, hashSize, bigEndian);
}

module.exports = { hash: hash };

}).call(this,require("buffer").Buffer)
},{"buffer":58}],66:[function(require,module,exports){
(function (Buffer){
var rng = require('./rng')

function error () {
  var m = [].slice.call(arguments).join(' ')
  throw new Error([
    m,
    'we accept pull requests',
    'http://github.com/dominictarr/crypto-browserify'
    ].join('\n'))
}

exports.createHash = require('./create-hash')

exports.createHmac = require('./create-hmac')

exports.randomBytes = function(size, callback) {
  if (callback && callback.call) {
    try {
      callback.call(this, undefined, new Buffer(rng(size)))
    } catch (err) { callback(err) }
  } else {
    return new Buffer(rng(size))
  }
}

function each(a, f) {
  for(var i in a)
    f(a[i], i)
}

exports.getHashes = function () {
  return ['sha1', 'sha256', 'sha512', 'md5', 'rmd160']
}

var p = require('./pbkdf2')(exports)
exports.pbkdf2 = p.pbkdf2
exports.pbkdf2Sync = p.pbkdf2Sync


// the least I can do is make error messages for the rest of the node.js/crypto api.
each(['createCredentials'
, 'createCipher'
, 'createCipheriv'
, 'createDecipher'
, 'createDecipheriv'
, 'createSign'
, 'createVerify'
, 'createDiffieHellman'
], function (name) {
  exports[name] = function () {
    error('sorry,', name, 'is not implemented yet')
  }
})

}).call(this,require("buffer").Buffer)
},{"./create-hash":63,"./create-hmac":64,"./pbkdf2":76,"./rng":77,"buffer":58}],67:[function(require,module,exports){
/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

var helpers = require('./helpers');

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */
function core_md5(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);

}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

module.exports = function md5(buf) {
  return helpers.hash(buf, core_md5, 16);
};

},{"./helpers":65}],68:[function(require,module,exports){
var crypto = require('crypto')

var exportFn = require('./pbkdf2')
var exported = exportFn(crypto)

module.exports = {
  pbkdf2: exported.pbkdf2,
  pbkdf2Sync: exported.pbkdf2Sync,

  // for crypto-browserify
  __pbkdf2Export: exportFn
}

},{"./pbkdf2":69,"crypto":66}],69:[function(require,module,exports){
(function (Buffer){
module.exports = function(crypto) {
  function pbkdf2(password, salt, iterations, keylen, digest, callback) {
    if ('function' === typeof digest) {
      callback = digest
      digest = undefined
    }

    if ('function' !== typeof callback)
      throw new Error('No callback provided to pbkdf2')

    setTimeout(function() {
      var result

      try {
        result = pbkdf2Sync(password, salt, iterations, keylen, digest)
      } catch (e) {
        return callback(e)
      }

      callback(undefined, result)
    })
  }

  function pbkdf2Sync(password, salt, iterations, keylen, digest) {
    if ('number' !== typeof iterations)
      throw new TypeError('Iterations not a number')

    if (iterations < 0)
      throw new TypeError('Bad iterations')

    if ('number' !== typeof keylen)
      throw new TypeError('Key length not a number')

    if (keylen < 0)
      throw new TypeError('Bad key length')

    digest = digest || 'sha1'

    if (!Buffer.isBuffer(password)) password = new Buffer(password)
    if (!Buffer.isBuffer(salt)) salt = new Buffer(salt)

    var hLen, l = 1, r, T
    var DK = new Buffer(keylen)
    var block1 = new Buffer(salt.length + 4)
    salt.copy(block1, 0, 0, salt.length)

    for (var i = 1; i <= l; i++) {
      block1.writeUInt32BE(i, salt.length)

      var U = crypto.createHmac(digest, password).update(block1).digest()

      if (!hLen) {
        hLen = U.length
        T = new Buffer(hLen)
        l = Math.ceil(keylen / hLen)
        r = keylen - (l - 1) * hLen

        if (keylen > (Math.pow(2, 32) - 1) * hLen)
          throw new TypeError('keylen exceeds maximum length')
      }

      U.copy(T, 0, 0, hLen)

      for (var j = 1; j < iterations; j++) {
        U = crypto.createHmac(digest, password).update(U).digest()

        for (var k = 0; k < hLen; k++) {
          T[k] ^= U[k]
        }
      }

      var destPos = (i - 1) * hLen
      var len = (i == l ? r : hLen)
      T.copy(DK, destPos, 0, len)
    }

    return DK
  }

  return {
    pbkdf2: pbkdf2,
    pbkdf2Sync: pbkdf2Sync
  }
}

}).call(this,require("buffer").Buffer)
},{"buffer":58}],70:[function(require,module,exports){
(function (Buffer){

module.exports = ripemd160



/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
/** @preserve
(c) 2012 by Cédric Mesnil. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

// Constants table
var zl = [
    0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
    7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
    3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
    1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
    4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13];
var zr = [
    5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
    6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
    15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
    8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
    12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11];
var sl = [
     11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
    7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
    11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
      11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
    9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ];
var sr = [
    8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
    9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
    9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
    15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
    8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ];

var hl =  [ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E];
var hr =  [ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000];

var bytesToWords = function (bytes) {
  var words = [];
  for (var i = 0, b = 0; i < bytes.length; i++, b += 8) {
    words[b >>> 5] |= bytes[i] << (24 - b % 32);
  }
  return words;
};

var wordsToBytes = function (words) {
  var bytes = [];
  for (var b = 0; b < words.length * 32; b += 8) {
    bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
  }
  return bytes;
};

var processBlock = function (H, M, offset) {

  // Swap endian
  for (var i = 0; i < 16; i++) {
    var offset_i = offset + i;
    var M_offset_i = M[offset_i];

    // Swap
    M[offset_i] = (
        (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
        (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
    );
  }

  // Working variables
  var al, bl, cl, dl, el;
  var ar, br, cr, dr, er;

  ar = al = H[0];
  br = bl = H[1];
  cr = cl = H[2];
  dr = dl = H[3];
  er = el = H[4];
  // Computation
  var t;
  for (var i = 0; i < 80; i += 1) {
    t = (al +  M[offset+zl[i]])|0;
    if (i<16){
        t +=  f1(bl,cl,dl) + hl[0];
    } else if (i<32) {
        t +=  f2(bl,cl,dl) + hl[1];
    } else if (i<48) {
        t +=  f3(bl,cl,dl) + hl[2];
    } else if (i<64) {
        t +=  f4(bl,cl,dl) + hl[3];
    } else {// if (i<80) {
        t +=  f5(bl,cl,dl) + hl[4];
    }
    t = t|0;
    t =  rotl(t,sl[i]);
    t = (t+el)|0;
    al = el;
    el = dl;
    dl = rotl(cl, 10);
    cl = bl;
    bl = t;

    t = (ar + M[offset+zr[i]])|0;
    if (i<16){
        t +=  f5(br,cr,dr) + hr[0];
    } else if (i<32) {
        t +=  f4(br,cr,dr) + hr[1];
    } else if (i<48) {
        t +=  f3(br,cr,dr) + hr[2];
    } else if (i<64) {
        t +=  f2(br,cr,dr) + hr[3];
    } else {// if (i<80) {
        t +=  f1(br,cr,dr) + hr[4];
    }
    t = t|0;
    t =  rotl(t,sr[i]) ;
    t = (t+er)|0;
    ar = er;
    er = dr;
    dr = rotl(cr, 10);
    cr = br;
    br = t;
  }
  // Intermediate hash value
  t    = (H[1] + cl + dr)|0;
  H[1] = (H[2] + dl + er)|0;
  H[2] = (H[3] + el + ar)|0;
  H[3] = (H[4] + al + br)|0;
  H[4] = (H[0] + bl + cr)|0;
  H[0] =  t;
};

function f1(x, y, z) {
  return ((x) ^ (y) ^ (z));
}

function f2(x, y, z) {
  return (((x)&(y)) | ((~x)&(z)));
}

function f3(x, y, z) {
  return (((x) | (~(y))) ^ (z));
}

function f4(x, y, z) {
  return (((x) & (z)) | ((y)&(~(z))));
}

function f5(x, y, z) {
  return ((x) ^ ((y) |(~(z))));
}

function rotl(x,n) {
  return (x<<n) | (x>>>(32-n));
}

function ripemd160(message) {
  var H = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0];

  if (typeof message == 'string')
    message = new Buffer(message, 'utf8');

  var m = bytesToWords(message);

  var nBitsLeft = message.length * 8;
  var nBitsTotal = message.length * 8;

  // Add padding
  m[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
  m[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
      (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
      (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
  );

  for (var i=0 ; i<m.length; i += 16) {
    processBlock(H, m, i);
  }

  // Swap endian
  for (var i = 0; i < 5; i++) {
      // Shortcut
    var H_i = H[i];

    // Swap
    H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
          (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
  }

  var digestbytes = wordsToBytes(H);
  return new Buffer(digestbytes);
}



}).call(this,require("buffer").Buffer)
},{"buffer":58}],71:[function(require,module,exports){
module.exports = function (Buffer) {

  //prototype class for hash functions
  function Hash (blockSize, finalSize) {
    this._block = new Buffer(blockSize) //new Uint32Array(blockSize/4)
    this._finalSize = finalSize
    this._blockSize = blockSize
    this._len = 0
    this._s = 0
  }

  Hash.prototype.init = function () {
    this._s = 0
    this._len = 0
  }

  Hash.prototype.update = function (data, enc) {
    if ("string" === typeof data) {
      enc = enc || "utf8"
      data = new Buffer(data, enc)
    }

    var l = this._len += data.length
    var s = this._s = (this._s || 0)
    var f = 0
    var buffer = this._block

    while (s < l) {
      var t = Math.min(data.length, f + this._blockSize - (s % this._blockSize))
      var ch = (t - f)

      for (var i = 0; i < ch; i++) {
        buffer[(s % this._blockSize) + i] = data[i + f]
      }

      s += ch
      f += ch

      if ((s % this._blockSize) === 0) {
        this._update(buffer)
      }
    }
    this._s = s

    return this
  }

  Hash.prototype.digest = function (enc) {
    // Suppose the length of the message M, in bits, is l
    var l = this._len * 8

    // Append the bit 1 to the end of the message
    this._block[this._len % this._blockSize] = 0x80

    // and then k zero bits, where k is the smallest non-negative solution to the equation (l + 1 + k) === finalSize mod blockSize
    this._block.fill(0, this._len % this._blockSize + 1)

    if (l % (this._blockSize * 8) >= this._finalSize * 8) {
      this._update(this._block)
      this._block.fill(0)
    }

    // to this append the block which is equal to the number l written in binary
    // TODO: handle case where l is > Math.pow(2, 29)
    this._block.writeInt32BE(l, this._blockSize - 4)

    var hash = this._update(this._block) || this._hash()

    return enc ? hash.toString(enc) : hash
  }

  Hash.prototype._update = function () {
    throw new Error('_update must be implemented by subclass')
  }

  return Hash
}

},{}],72:[function(require,module,exports){
var exports = module.exports = function (alg) {
  var Alg = exports[alg]
  if(!Alg) throw new Error(alg + ' is not supported (we accept pull requests)')
  return new Alg()
}

var Buffer = require('buffer').Buffer
var Hash   = require('./hash')(Buffer)

exports.sha1 = require('./sha1')(Buffer, Hash)
exports.sha256 = require('./sha256')(Buffer, Hash)
exports.sha512 = require('./sha512')(Buffer, Hash)

},{"./hash":71,"./sha1":73,"./sha256":74,"./sha512":75,"buffer":58}],73:[function(require,module,exports){
/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */

var inherits = require('util').inherits

module.exports = function (Buffer, Hash) {

  var A = 0|0
  var B = 4|0
  var C = 8|0
  var D = 12|0
  var E = 16|0

  var W = new (typeof Int32Array === 'undefined' ? Array : Int32Array)(80)

  var POOL = []

  function Sha1 () {
    if(POOL.length)
      return POOL.pop().init()

    if(!(this instanceof Sha1)) return new Sha1()
    this._w = W
    Hash.call(this, 16*4, 14*4)

    this._h = null
    this.init()
  }

  inherits(Sha1, Hash)

  Sha1.prototype.init = function () {
    this._a = 0x67452301
    this._b = 0xefcdab89
    this._c = 0x98badcfe
    this._d = 0x10325476
    this._e = 0xc3d2e1f0

    Hash.prototype.init.call(this)
    return this
  }

  Sha1.prototype._POOL = POOL
  Sha1.prototype._update = function (X) {

    var a, b, c, d, e, _a, _b, _c, _d, _e

    a = _a = this._a
    b = _b = this._b
    c = _c = this._c
    d = _d = this._d
    e = _e = this._e

    var w = this._w

    for(var j = 0; j < 80; j++) {
      var W = w[j] = j < 16 ? X.readInt32BE(j*4)
        : rol(w[j - 3] ^ w[j -  8] ^ w[j - 14] ^ w[j - 16], 1)

      var t = add(
        add(rol(a, 5), sha1_ft(j, b, c, d)),
        add(add(e, W), sha1_kt(j))
      )

      e = d
      d = c
      c = rol(b, 30)
      b = a
      a = t
    }

    this._a = add(a, _a)
    this._b = add(b, _b)
    this._c = add(c, _c)
    this._d = add(d, _d)
    this._e = add(e, _e)
  }

  Sha1.prototype._hash = function () {
    if(POOL.length < 100) POOL.push(this)
    var H = new Buffer(20)
    //console.log(this._a|0, this._b|0, this._c|0, this._d|0, this._e|0)
    H.writeInt32BE(this._a|0, A)
    H.writeInt32BE(this._b|0, B)
    H.writeInt32BE(this._c|0, C)
    H.writeInt32BE(this._d|0, D)
    H.writeInt32BE(this._e|0, E)
    return H
  }

  /*
   * Perform the appropriate triplet combination function for the current
   * iteration
   */
  function sha1_ft(t, b, c, d) {
    if(t < 20) return (b & c) | ((~b) & d);
    if(t < 40) return b ^ c ^ d;
    if(t < 60) return (b & c) | (b & d) | (c & d);
    return b ^ c ^ d;
  }

  /*
   * Determine the appropriate additive constant for the current iteration
   */
  function sha1_kt(t) {
    return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
           (t < 60) ? -1894007588 : -899497514;
  }

  /*
   * Add integers, wrapping at 2^32. This uses 16-bit operations internally
   * to work around bugs in some JS interpreters.
   * //dominictarr: this is 10 years old, so maybe this can be dropped?)
   *
   */
  function add(x, y) {
    return (x + y ) | 0
  //lets see how this goes on testling.
  //  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  //  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  //  return (msw << 16) | (lsw & 0xFFFF);
  }

  /*
   * Bitwise rotate a 32-bit number to the left.
   */
  function rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
  }

  return Sha1
}

},{"util":108}],74:[function(require,module,exports){

/**
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
 * in FIPS 180-2
 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 *
 */

var inherits = require('util').inherits

module.exports = function (Buffer, Hash) {

  var K = [
      0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
      0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
      0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
      0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
      0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
      0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
      0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
      0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
      0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
      0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
      0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
      0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
      0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
      0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
      0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
      0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
    ]

  var W = new Array(64)

  function Sha256() {
    this.init()

    this._w = W //new Array(64)

    Hash.call(this, 16*4, 14*4)
  }

  inherits(Sha256, Hash)

  Sha256.prototype.init = function () {

    this._a = 0x6a09e667|0
    this._b = 0xbb67ae85|0
    this._c = 0x3c6ef372|0
    this._d = 0xa54ff53a|0
    this._e = 0x510e527f|0
    this._f = 0x9b05688c|0
    this._g = 0x1f83d9ab|0
    this._h = 0x5be0cd19|0

    this._len = this._s = 0

    return this
  }

  function S (X, n) {
    return (X >>> n) | (X << (32 - n));
  }

  function R (X, n) {
    return (X >>> n);
  }

  function Ch (x, y, z) {
    return ((x & y) ^ ((~x) & z));
  }

  function Maj (x, y, z) {
    return ((x & y) ^ (x & z) ^ (y & z));
  }

  function Sigma0256 (x) {
    return (S(x, 2) ^ S(x, 13) ^ S(x, 22));
  }

  function Sigma1256 (x) {
    return (S(x, 6) ^ S(x, 11) ^ S(x, 25));
  }

  function Gamma0256 (x) {
    return (S(x, 7) ^ S(x, 18) ^ R(x, 3));
  }

  function Gamma1256 (x) {
    return (S(x, 17) ^ S(x, 19) ^ R(x, 10));
  }

  Sha256.prototype._update = function(M) {

    var W = this._w
    var a, b, c, d, e, f, g, h
    var T1, T2

    a = this._a | 0
    b = this._b | 0
    c = this._c | 0
    d = this._d | 0
    e = this._e | 0
    f = this._f | 0
    g = this._g | 0
    h = this._h | 0

    for (var j = 0; j < 64; j++) {
      var w = W[j] = j < 16
        ? M.readInt32BE(j * 4)
        : Gamma1256(W[j - 2]) + W[j - 7] + Gamma0256(W[j - 15]) + W[j - 16]

      T1 = h + Sigma1256(e) + Ch(e, f, g) + K[j] + w

      T2 = Sigma0256(a) + Maj(a, b, c);
      h = g; g = f; f = e; e = d + T1; d = c; c = b; b = a; a = T1 + T2;
    }

    this._a = (a + this._a) | 0
    this._b = (b + this._b) | 0
    this._c = (c + this._c) | 0
    this._d = (d + this._d) | 0
    this._e = (e + this._e) | 0
    this._f = (f + this._f) | 0
    this._g = (g + this._g) | 0
    this._h = (h + this._h) | 0

  };

  Sha256.prototype._hash = function () {
    var H = new Buffer(32)

    H.writeInt32BE(this._a,  0)
    H.writeInt32BE(this._b,  4)
    H.writeInt32BE(this._c,  8)
    H.writeInt32BE(this._d, 12)
    H.writeInt32BE(this._e, 16)
    H.writeInt32BE(this._f, 20)
    H.writeInt32BE(this._g, 24)
    H.writeInt32BE(this._h, 28)

    return H
  }

  return Sha256

}

},{"util":108}],75:[function(require,module,exports){
var inherits = require('util').inherits

module.exports = function (Buffer, Hash) {
  var K = [
    0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
    0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
    0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
    0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
    0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
    0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
    0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
    0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
    0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
    0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
    0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
    0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
    0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
    0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
    0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
    0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
    0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
    0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
    0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
    0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
    0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
    0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
    0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
    0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
    0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
    0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
    0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
    0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
    0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
    0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
    0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
    0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
    0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
    0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
    0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
    0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
    0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
    0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
    0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
    0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
  ]

  var W = new Array(160)

  function Sha512() {
    this.init()
    this._w = W

    Hash.call(this, 128, 112)
  }

  inherits(Sha512, Hash)

  Sha512.prototype.init = function () {

    this._a = 0x6a09e667|0
    this._b = 0xbb67ae85|0
    this._c = 0x3c6ef372|0
    this._d = 0xa54ff53a|0
    this._e = 0x510e527f|0
    this._f = 0x9b05688c|0
    this._g = 0x1f83d9ab|0
    this._h = 0x5be0cd19|0

    this._al = 0xf3bcc908|0
    this._bl = 0x84caa73b|0
    this._cl = 0xfe94f82b|0
    this._dl = 0x5f1d36f1|0
    this._el = 0xade682d1|0
    this._fl = 0x2b3e6c1f|0
    this._gl = 0xfb41bd6b|0
    this._hl = 0x137e2179|0

    this._len = this._s = 0

    return this
  }

  function S (X, Xl, n) {
    return (X >>> n) | (Xl << (32 - n))
  }

  function Ch (x, y, z) {
    return ((x & y) ^ ((~x) & z));
  }

  function Maj (x, y, z) {
    return ((x & y) ^ (x & z) ^ (y & z));
  }

  Sha512.prototype._update = function(M) {

    var W = this._w
    var a, b, c, d, e, f, g, h
    var al, bl, cl, dl, el, fl, gl, hl

    a = this._a | 0
    b = this._b | 0
    c = this._c | 0
    d = this._d | 0
    e = this._e | 0
    f = this._f | 0
    g = this._g | 0
    h = this._h | 0

    al = this._al | 0
    bl = this._bl | 0
    cl = this._cl | 0
    dl = this._dl | 0
    el = this._el | 0
    fl = this._fl | 0
    gl = this._gl | 0
    hl = this._hl | 0

    for (var i = 0; i < 80; i++) {
      var j = i * 2

      var Wi, Wil

      if (i < 16) {
        Wi = W[j] = M.readInt32BE(j * 4)
        Wil = W[j + 1] = M.readInt32BE(j * 4 + 4)

      } else {
        var x  = W[j - 15*2]
        var xl = W[j - 15*2 + 1]
        var gamma0  = S(x, xl, 1) ^ S(x, xl, 8) ^ (x >>> 7)
        var gamma0l = S(xl, x, 1) ^ S(xl, x, 8) ^ S(xl, x, 7)

        x  = W[j - 2*2]
        xl = W[j - 2*2 + 1]
        var gamma1  = S(x, xl, 19) ^ S(xl, x, 29) ^ (x >>> 6)
        var gamma1l = S(xl, x, 19) ^ S(x, xl, 29) ^ S(xl, x, 6)

        // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
        var Wi7  = W[j - 7*2]
        var Wi7l = W[j - 7*2 + 1]

        var Wi16  = W[j - 16*2]
        var Wi16l = W[j - 16*2 + 1]

        Wil = gamma0l + Wi7l
        Wi  = gamma0  + Wi7 + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0)
        Wil = Wil + gamma1l
        Wi  = Wi  + gamma1  + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0)
        Wil = Wil + Wi16l
        Wi  = Wi  + Wi16 + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0)

        W[j] = Wi
        W[j + 1] = Wil
      }

      var maj = Maj(a, b, c)
      var majl = Maj(al, bl, cl)

      var sigma0h = S(a, al, 28) ^ S(al, a, 2) ^ S(al, a, 7)
      var sigma0l = S(al, a, 28) ^ S(a, al, 2) ^ S(a, al, 7)
      var sigma1h = S(e, el, 14) ^ S(e, el, 18) ^ S(el, e, 9)
      var sigma1l = S(el, e, 14) ^ S(el, e, 18) ^ S(e, el, 9)

      // t1 = h + sigma1 + ch + K[i] + W[i]
      var Ki = K[j]
      var Kil = K[j + 1]

      var ch = Ch(e, f, g)
      var chl = Ch(el, fl, gl)

      var t1l = hl + sigma1l
      var t1 = h + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0)
      t1l = t1l + chl
      t1 = t1 + ch + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0)
      t1l = t1l + Kil
      t1 = t1 + Ki + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0)
      t1l = t1l + Wil
      t1 = t1 + Wi + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0)

      // t2 = sigma0 + maj
      var t2l = sigma0l + majl
      var t2 = sigma0h + maj + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0)

      h  = g
      hl = gl
      g  = f
      gl = fl
      f  = e
      fl = el
      el = (dl + t1l) | 0
      e  = (d + t1 + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
      d  = c
      dl = cl
      c  = b
      cl = bl
      b  = a
      bl = al
      al = (t1l + t2l) | 0
      a  = (t1 + t2 + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0
    }

    this._al = (this._al + al) | 0
    this._bl = (this._bl + bl) | 0
    this._cl = (this._cl + cl) | 0
    this._dl = (this._dl + dl) | 0
    this._el = (this._el + el) | 0
    this._fl = (this._fl + fl) | 0
    this._gl = (this._gl + gl) | 0
    this._hl = (this._hl + hl) | 0

    this._a = (this._a + a + ((this._al >>> 0) < (al >>> 0) ? 1 : 0)) | 0
    this._b = (this._b + b + ((this._bl >>> 0) < (bl >>> 0) ? 1 : 0)) | 0
    this._c = (this._c + c + ((this._cl >>> 0) < (cl >>> 0) ? 1 : 0)) | 0
    this._d = (this._d + d + ((this._dl >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
    this._e = (this._e + e + ((this._el >>> 0) < (el >>> 0) ? 1 : 0)) | 0
    this._f = (this._f + f + ((this._fl >>> 0) < (fl >>> 0) ? 1 : 0)) | 0
    this._g = (this._g + g + ((this._gl >>> 0) < (gl >>> 0) ? 1 : 0)) | 0
    this._h = (this._h + h + ((this._hl >>> 0) < (hl >>> 0) ? 1 : 0)) | 0
  }

  Sha512.prototype._hash = function () {
    var H = new Buffer(64)

    function writeInt64BE(h, l, offset) {
      H.writeInt32BE(h, offset)
      H.writeInt32BE(l, offset + 4)
    }

    writeInt64BE(this._a, this._al, 0)
    writeInt64BE(this._b, this._bl, 8)
    writeInt64BE(this._c, this._cl, 16)
    writeInt64BE(this._d, this._dl, 24)
    writeInt64BE(this._e, this._el, 32)
    writeInt64BE(this._f, this._fl, 40)
    writeInt64BE(this._g, this._gl, 48)
    writeInt64BE(this._h, this._hl, 56)

    return H
  }

  return Sha512

}

},{"util":108}],76:[function(require,module,exports){
var pbkdf2Export = require('pbkdf2-compat').__pbkdf2Export

module.exports = function (crypto, exports) {
  exports = exports || {}

  var exported = pbkdf2Export(crypto)

  exports.pbkdf2 = exported.pbkdf2
  exports.pbkdf2Sync = exported.pbkdf2Sync

  return exports
}

},{"pbkdf2-compat":68}],77:[function(require,module,exports){
(function (global,Buffer){
(function() {
  var g = ('undefined' === typeof window ? global : window) || {}
  var foolBrowserify = require
  _crypto = (
    g.crypto || g.msCrypto || foolBrowserify('crypto')
  )
  module.exports = function(size) {
    // Modern Browsers
    if(_crypto.getRandomValues) {
      var bytes = new Buffer(size); //in browserify, this is an extended Uint8Array
      /* This will not work in older browsers.
       * See https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
       */
    
      _crypto.getRandomValues(bytes);
      return bytes;
    }
    else if (_crypto.randomBytes) {
      return _crypto.randomBytes(size)
    }
    else
      throw new Error(
        'secure random number generation not supported by this browser\n'+
        'use chrome, FireFox or Internet Explorer 11'
      )
  }
}())

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer)
},{"buffer":58}],78:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],79:[function(require,module,exports){
var http = module.exports;
var EventEmitter = require('events').EventEmitter;
var Request = require('./lib/request');
var url = require('url')

http.request = function (params, cb) {
    if (typeof params === 'string') {
        params = url.parse(params)
    }
    if (!params) params = {};
    if (!params.host && !params.port) {
        params.port = parseInt(window.location.port, 10);
    }
    if (!params.host && params.hostname) {
        params.host = params.hostname;
    }

    if (!params.protocol) {
        if (params.scheme) {
            params.protocol = params.scheme + ':';
        } else {
            params.protocol = window.location.protocol;
        }
    }

    if (!params.host) {
        params.host = window.location.hostname || window.location.host;
    }
    if (/:/.test(params.host)) {
        if (!params.port) {
            params.port = params.host.split(':')[1];
        }
        params.host = params.host.split(':')[0];
    }
    if (!params.port) params.port = params.protocol == 'https:' ? 443 : 80;
    
    var req = new Request(new xhrHttp, params);
    if (cb) req.on('response', cb);
    return req;
};

http.get = function (params, cb) {
    params.method = 'GET';
    var req = http.request(params, cb);
    req.end();
    return req;
};

http.Agent = function () {};
http.Agent.defaultMaxSockets = 4;

var xhrHttp = (function () {
    if (typeof window === 'undefined') {
        throw new Error('no window object present');
    }
    else if (window.XMLHttpRequest) {
        return window.XMLHttpRequest;
    }
    else if (window.ActiveXObject) {
        var axs = [
            'Msxml2.XMLHTTP.6.0',
            'Msxml2.XMLHTTP.3.0',
            'Microsoft.XMLHTTP'
        ];
        for (var i = 0; i < axs.length; i++) {
            try {
                var ax = new(window.ActiveXObject)(axs[i]);
                return function () {
                    if (ax) {
                        var ax_ = ax;
                        ax = null;
                        return ax_;
                    }
                    else {
                        return new(window.ActiveXObject)(axs[i]);
                    }
                };
            }
            catch (e) {}
        }
        throw new Error('ajax not supported in this browser')
    }
    else {
        throw new Error('ajax not supported in this browser');
    }
})();

http.STATUS_CODES = {
    100 : 'Continue',
    101 : 'Switching Protocols',
    102 : 'Processing',                 // RFC 2518, obsoleted by RFC 4918
    200 : 'OK',
    201 : 'Created',
    202 : 'Accepted',
    203 : 'Non-Authoritative Information',
    204 : 'No Content',
    205 : 'Reset Content',
    206 : 'Partial Content',
    207 : 'Multi-Status',               // RFC 4918
    300 : 'Multiple Choices',
    301 : 'Moved Permanently',
    302 : 'Moved Temporarily',
    303 : 'See Other',
    304 : 'Not Modified',
    305 : 'Use Proxy',
    307 : 'Temporary Redirect',
    400 : 'Bad Request',
    401 : 'Unauthorized',
    402 : 'Payment Required',
    403 : 'Forbidden',
    404 : 'Not Found',
    405 : 'Method Not Allowed',
    406 : 'Not Acceptable',
    407 : 'Proxy Authentication Required',
    408 : 'Request Time-out',
    409 : 'Conflict',
    410 : 'Gone',
    411 : 'Length Required',
    412 : 'Precondition Failed',
    413 : 'Request Entity Too Large',
    414 : 'Request-URI Too Large',
    415 : 'Unsupported Media Type',
    416 : 'Requested Range Not Satisfiable',
    417 : 'Expectation Failed',
    418 : 'I\'m a teapot',              // RFC 2324
    422 : 'Unprocessable Entity',       // RFC 4918
    423 : 'Locked',                     // RFC 4918
    424 : 'Failed Dependency',          // RFC 4918
    425 : 'Unordered Collection',       // RFC 4918
    426 : 'Upgrade Required',           // RFC 2817
    428 : 'Precondition Required',      // RFC 6585
    429 : 'Too Many Requests',          // RFC 6585
    431 : 'Request Header Fields Too Large',// RFC 6585
    500 : 'Internal Server Error',
    501 : 'Not Implemented',
    502 : 'Bad Gateway',
    503 : 'Service Unavailable',
    504 : 'Gateway Time-out',
    505 : 'HTTP Version Not Supported',
    506 : 'Variant Also Negotiates',    // RFC 2295
    507 : 'Insufficient Storage',       // RFC 4918
    509 : 'Bandwidth Limit Exceeded',
    510 : 'Not Extended',               // RFC 2774
    511 : 'Network Authentication Required' // RFC 6585
};
},{"./lib/request":80,"events":78,"url":106}],80:[function(require,module,exports){
var Stream = require('stream');
var Response = require('./response');
var Base64 = require('Base64');
var inherits = require('inherits');

var Request = module.exports = function (xhr, params) {
    var self = this;
    self.writable = true;
    self.xhr = xhr;
    self.body = [];
    
    self.uri = (params.protocol || 'http:') + '//'
        + params.host
        + (params.port ? ':' + params.port : '')
        + (params.path || '/')
    ;
    
    if (typeof params.withCredentials === 'undefined') {
        params.withCredentials = true;
    }

    try { xhr.withCredentials = params.withCredentials }
    catch (e) {}
    
    if (params.responseType) try { xhr.responseType = params.responseType }
    catch (e) {}
    
    xhr.open(
        params.method || 'GET',
        self.uri,
        true
    );

    xhr.onerror = function(event) {
        self.emit('error', new Error('Network error'));
    };

    self._headers = {};
    
    if (params.headers) {
        var keys = objectKeys(params.headers);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (!self.isSafeRequestHeader(key)) continue;
            var value = params.headers[key];
            self.setHeader(key, value);
        }
    }
    
    if (params.auth) {
        //basic auth
        this.setHeader('Authorization', 'Basic ' + Base64.btoa(params.auth));
    }

    var res = new Response;
    res.on('close', function () {
        self.emit('close');
    });
    
    res.on('ready', function () {
        self.emit('response', res);
    });

    res.on('error', function (err) {
        self.emit('error', err);
    });
    
    xhr.onreadystatechange = function () {
        // Fix for IE9 bug
        // SCRIPT575: Could not complete the operation due to error c00c023f
        // It happens when a request is aborted, calling the success callback anyway with readyState === 4
        if (xhr.__aborted) return;
        res.handle(xhr);
    };
};

inherits(Request, Stream);

Request.prototype.setHeader = function (key, value) {
    this._headers[key.toLowerCase()] = value
};

Request.prototype.getHeader = function (key) {
    return this._headers[key.toLowerCase()]
};

Request.prototype.removeHeader = function (key) {
    delete this._headers[key.toLowerCase()]
};

Request.prototype.write = function (s) {
    this.body.push(s);
};

Request.prototype.destroy = function (s) {
    this.xhr.__aborted = true;
    this.xhr.abort();
    this.emit('close');
};

Request.prototype.end = function (s) {
    if (s !== undefined) this.body.push(s);

    var keys = objectKeys(this._headers);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = this._headers[key];
        if (isArray(value)) {
            for (var j = 0; j < value.length; j++) {
                this.xhr.setRequestHeader(key, value[j]);
            }
        }
        else this.xhr.setRequestHeader(key, value)
    }

    if (this.body.length === 0) {
        this.xhr.send('');
    }
    else if (typeof this.body[0] === 'string') {
        this.xhr.send(this.body.join(''));
    }
    else if (isArray(this.body[0])) {
        var body = [];
        for (var i = 0; i < this.body.length; i++) {
            body.push.apply(body, this.body[i]);
        }
        this.xhr.send(body);
    }
    else if (/Array/.test(Object.prototype.toString.call(this.body[0]))) {
        var len = 0;
        for (var i = 0; i < this.body.length; i++) {
            len += this.body[i].length;
        }
        var body = new(this.body[0].constructor)(len);
        var k = 0;
        
        for (var i = 0; i < this.body.length; i++) {
            var b = this.body[i];
            for (var j = 0; j < b.length; j++) {
                body[k++] = b[j];
            }
        }
        this.xhr.send(body);
    }
    else if (isXHR2Compatible(this.body[0])) {
        this.xhr.send(this.body[0]);
    }
    else {
        var body = '';
        for (var i = 0; i < this.body.length; i++) {
            body += this.body[i].toString();
        }
        this.xhr.send(body);
    }
};

// Taken from http://dxr.mozilla.org/mozilla/mozilla-central/content/base/src/nsXMLHttpRequest.cpp.html
Request.unsafeHeaders = [
    "accept-charset",
    "accept-encoding",
    "access-control-request-headers",
    "access-control-request-method",
    "connection",
    "content-length",
    "cookie",
    "cookie2",
    "content-transfer-encoding",
    "date",
    "expect",
    "host",
    "keep-alive",
    "origin",
    "referer",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade",
    "user-agent",
    "via"
];

Request.prototype.isSafeRequestHeader = function (headerName) {
    if (!headerName) return false;
    return indexOf(Request.unsafeHeaders, headerName.toLowerCase()) === -1;
};

var objectKeys = Object.keys || function (obj) {
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};

var indexOf = function (xs, x) {
    if (xs.indexOf) return xs.indexOf(x);
    for (var i = 0; i < xs.length; i++) {
        if (xs[i] === x) return i;
    }
    return -1;
};

var isXHR2Compatible = function (obj) {
    if (typeof Blob !== 'undefined' && obj instanceof Blob) return true;
    if (typeof ArrayBuffer !== 'undefined' && obj instanceof ArrayBuffer) return true;
    if (typeof FormData !== 'undefined' && obj instanceof FormData) return true;
};

},{"./response":81,"Base64":82,"inherits":83,"stream":104}],81:[function(require,module,exports){
var Stream = require('stream');
var util = require('util');

var Response = module.exports = function (res) {
    this.offset = 0;
    this.readable = true;
};

util.inherits(Response, Stream);

var capable = {
    streaming : true,
    status2 : true
};

function parseHeaders (res) {
    var lines = res.getAllResponseHeaders().split(/\r?\n/);
    var headers = {};
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line === '') continue;
        
        var m = line.match(/^([^:]+):\s*(.*)/);
        if (m) {
            var key = m[1].toLowerCase(), value = m[2];
            
            if (headers[key] !== undefined) {
            
                if (isArray(headers[key])) {
                    headers[key].push(value);
                }
                else {
                    headers[key] = [ headers[key], value ];
                }
            }
            else {
                headers[key] = value;
            }
        }
        else {
            headers[line] = true;
        }
    }
    return headers;
}

Response.prototype.getResponse = function (xhr) {
    var respType = String(xhr.responseType).toLowerCase();
    if (respType === 'blob') return xhr.responseBlob || xhr.response;
    if (respType === 'arraybuffer') return xhr.response;
    return xhr.responseText;
}

Response.prototype.getHeader = function (key) {
    return this.headers[key.toLowerCase()];
};

Response.prototype.handle = function (res) {
    if (res.readyState === 2 && capable.status2) {
        try {
            this.statusCode = res.status;
            this.headers = parseHeaders(res);
        }
        catch (err) {
            capable.status2 = false;
        }
        
        if (capable.status2) {
            this.emit('ready');
        }
    }
    else if (capable.streaming && res.readyState === 3) {
        try {
            if (!this.statusCode) {
                this.statusCode = res.status;
                this.headers = parseHeaders(res);
                this.emit('ready');
            }
        }
        catch (err) {}
        
        try {
            this._emitData(res);
        }
        catch (err) {
            capable.streaming = false;
        }
    }
    else if (res.readyState === 4) {
        if (!this.statusCode) {
            this.statusCode = res.status;
            this.emit('ready');
        }
        this._emitData(res);
        
        if (res.error) {
            this.emit('error', this.getResponse(res));
        }
        else this.emit('end');
        
        this.emit('close');
    }
};

Response.prototype._emitData = function (res) {
    var respBody = this.getResponse(res);
    if (respBody.toString().match(/ArrayBuffer/)) {
        this.emit('data', new Uint8Array(respBody, this.offset));
        this.offset = respBody.byteLength;
        return;
    }
    if (respBody.length > this.offset) {
        this.emit('data', respBody.slice(this.offset));
        this.offset = respBody.length;
    }
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};

},{"stream":104,"util":108}],82:[function(require,module,exports){
;(function () {

  var object = typeof exports != 'undefined' ? exports : this; // #8: web workers
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  function InvalidCharacterError(message) {
    this.message = message;
  }
  InvalidCharacterError.prototype = new Error;
  InvalidCharacterError.prototype.name = 'InvalidCharacterError';

  // encoder
  // [https://gist.github.com/999166] by [https://github.com/nignag]
  object.btoa || (
  object.btoa = function (input) {
    for (
      // initialize result and counter
      var block, charCode, idx = 0, map = chars, output = '';
      // if the next input index does not exist:
      //   change the mapping table to "="
      //   check if d has no fractional digits
      input.charAt(idx | 0) || (map = '=', idx % 1);
      // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
      output += map.charAt(63 & block >> 8 - idx % 1 * 8)
    ) {
      charCode = input.charCodeAt(idx += 3/4);
      if (charCode > 0xFF) {
        throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
      }
      block = block << 8 | charCode;
    }
    return output;
  });

  // decoder
  // [https://gist.github.com/1020396] by [https://github.com/atk]
  object.atob || (
  object.atob = function (input) {
    input = input.replace(/=+$/, '');
    if (input.length % 4 == 1) {
      throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (
      // initialize result and counters
      var bc = 0, bs, buffer, idx = 0, output = '';
      // get next character
      buffer = input.charAt(idx++);
      // character found in table? initialize bit storage and add its ascii value;
      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        // and if not first of each 4 characters,
        // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
      // try to find character in table (0-63, not found => -1)
      buffer = chars.indexOf(buffer);
    }
    return output;
  });

}());

},{}],83:[function(require,module,exports){
module.exports=require(27)
},{"/Users/oscarotero/www/stylecow/stylecow.github.io/js/node_modules/stylecow/node_modules/npm/node_modules/inherits/inherits_browser.js":27}],84:[function(require,module,exports){
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],85:[function(require,module,exports){
exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

},{}],86:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":87}],87:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],88:[function(require,module,exports){
(function (global){
/*! http://mths.be/punycode v1.2.4 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports;
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^ -~]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /\x2E|\u3002|\uFF0E|\uFF61/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		while (length--) {
			array[length] = fn(array[length]);
		}
		return array;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings.
	 * @private
	 * @param {String} domain The domain name.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		return map(string.split(regexSeparators), fn).join('.');
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <http://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * http://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols to a Punycode string of ASCII-only
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name to Unicode. Only the
	 * Punycoded parts of the domain name will be converted, i.e. it doesn't
	 * matter if you call it on a string that has already been converted to
	 * Unicode.
	 * @memberOf punycode
	 * @param {String} domain The Punycode domain name to convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(domain) {
		return mapDomain(domain, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name to Punycode. Only the
	 * non-ASCII parts of the domain name will be converted, i.e. it doesn't
	 * matter if you call it with a domain that's already in ASCII.
	 * @memberOf punycode
	 * @param {String} domain The domain name to convert, as a Unicode string.
	 * @returns {String} The Punycode representation of the given domain name.
	 */
	function toASCII(domain) {
		return mapDomain(domain, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.2.4',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <http://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define('punycode', function() {
			return punycode;
		});
	} else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],89:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

},{}],90:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

},{}],91:[function(require,module,exports){
'use strict';

exports.decode = exports.parse = require('./decode');
exports.encode = exports.stringify = require('./encode');

},{"./decode":89,"./encode":90}],92:[function(require,module,exports){
module.exports = require("./lib/_stream_duplex.js")

},{"./lib/_stream_duplex.js":93}],93:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

module.exports = Duplex;

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}
/*</replacement>*/


/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');

util.inherits(Duplex, Readable);

forEach(objectKeys(Writable.prototype), function(method) {
  if (!Duplex.prototype[method])
    Duplex.prototype[method] = Writable.prototype[method];
});

function Duplex(options) {
  if (!(this instanceof Duplex))
    return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false)
    this.readable = false;

  if (options && options.writable === false)
    this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false)
    this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended)
    return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  process.nextTick(this.end.bind(this));
}

function forEach (xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

}).call(this,require('_process'))
},{"./_stream_readable":95,"./_stream_writable":97,"_process":87,"core-util-is":98,"inherits":83}],94:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.

module.exports = PassThrough;

var Transform = require('./_stream_transform');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough))
    return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function(chunk, encoding, cb) {
  cb(null, chunk);
};

},{"./_stream_transform":96,"core-util-is":98,"inherits":83}],95:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Readable;

/*<replacement>*/
var isArray = require('isarray');
/*</replacement>*/


/*<replacement>*/
var Buffer = require('buffer').Buffer;
/*</replacement>*/

Readable.ReadableState = ReadableState;

var EE = require('events').EventEmitter;

/*<replacement>*/
if (!EE.listenerCount) EE.listenerCount = function(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

var Stream = require('stream');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var StringDecoder;

util.inherits(Readable, Stream);

function ReadableState(options, stream) {
  options = options || {};

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  this.highWaterMark = (hwm || hwm === 0) ? hwm : 16 * 1024;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  this.buffer = [];
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = false;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // In streams that never have any data, and do push(null) right away,
  // the consumer can miss the 'end' event if they do some I/O before
  // consuming the stream.  So, we don't emit('end') until some reading
  // happens.
  this.calledRead = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, becuase any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;


  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder)
      StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  if (!(this instanceof Readable))
    return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  Stream.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function(chunk, encoding) {
  var state = this._readableState;

  if (typeof chunk === 'string' && !state.objectMode) {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = new Buffer(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function(chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (chunk === null || chunk === undefined) {
    state.reading = false;
    if (!state.ended)
      onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var e = new Error('stream.unshift() after end event');
      stream.emit('error', e);
    } else {
      if (state.decoder && !addToFront && !encoding)
        chunk = state.decoder.write(chunk);

      // update the buffer info.
      state.length += state.objectMode ? 1 : chunk.length;
      if (addToFront) {
        state.buffer.unshift(chunk);
      } else {
        state.reading = false;
        state.buffer.push(chunk);
      }

      if (state.needReadable)
        emitReadable(stream);

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}



// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended &&
         (state.needReadable ||
          state.length < state.highWaterMark ||
          state.length === 0);
}

// backwards compatibility.
Readable.prototype.setEncoding = function(enc) {
  if (!StringDecoder)
    StringDecoder = require('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
};

// Don't raise the hwm > 128MB
var MAX_HWM = 0x800000;
function roundUpToNextPowerOf2(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2
    n--;
    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
    n++;
  }
  return n;
}

function howMuchToRead(n, state) {
  if (state.length === 0 && state.ended)
    return 0;

  if (state.objectMode)
    return n === 0 ? 0 : 1;

  if (n === null || isNaN(n)) {
    // only flow one buffer at a time
    if (state.flowing && state.buffer.length)
      return state.buffer[0].length;
    else
      return state.length;
  }

  if (n <= 0)
    return 0;

  // If we're asking for more than the target buffer level,
  // then raise the water mark.  Bump up to the next highest
  // power of 2, to prevent increasing it excessively in tiny
  // amounts.
  if (n > state.highWaterMark)
    state.highWaterMark = roundUpToNextPowerOf2(n);

  // don't have that much.  return null, unless we've ended.
  if (n > state.length) {
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    } else
      return state.length;
  }

  return n;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function(n) {
  var state = this._readableState;
  state.calledRead = true;
  var nOrig = n;
  var ret;

  if (typeof n !== 'number' || n > 0)
    state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 &&
      state.needReadable &&
      (state.length >= state.highWaterMark || state.ended)) {
    emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    ret = null;

    // In cases where the decoder did not receive enough data
    // to produce a full chunk, then immediately received an
    // EOF, state.buffer will contain [<Buffer >, <Buffer 00 ...>].
    // howMuchToRead will see this and coerce the amount to
    // read to zero (because it's looking at the length of the
    // first <Buffer > in state.buffer), and we'll end up here.
    //
    // This can only happen via state.decoder -- no other venue
    // exists for pushing a zero-length chunk into state.buffer
    // and triggering this behavior. In this case, we return our
    // remaining data and end the stream, if appropriate.
    if (state.length > 0 && state.decoder) {
      ret = fromList(n, state);
      state.length -= ret.length;
    }

    if (state.length === 0)
      endReadable(this);

    return ret;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;

  // if we currently have less than the highWaterMark, then also read some
  if (state.length - n <= state.highWaterMark)
    doRead = true;

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading)
    doRead = false;

  if (doRead) {
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0)
      state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
  }

  // If _read called its callback synchronously, then `reading`
  // will be false, and we need to re-evaluate how much data we
  // can return to the user.
  if (doRead && !state.reading)
    n = howMuchToRead(nOrig, state);

  if (n > 0)
    ret = fromList(n, state);
  else
    ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  }

  state.length -= n;

  // If we have nothing in the buffer, then we want to know
  // as soon as we *do* get something into the buffer.
  if (state.length === 0 && !state.ended)
    state.needReadable = true;

  // If we happened to read() exactly the remaining amount in the
  // buffer, and the EOF has been seen at this point, then make sure
  // that we emit 'end' on the very next tick.
  if (state.ended && !state.endEmitted && state.length === 0)
    endReadable(this);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!Buffer.isBuffer(chunk) &&
      'string' !== typeof chunk &&
      chunk !== null &&
      chunk !== undefined &&
      !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}


function onEofChunk(stream, state) {
  if (state.decoder && !state.ended) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // if we've ended and we have some data left, then emit
  // 'readable' now to make sure it gets picked up.
  if (state.length > 0)
    emitReadable(stream);
  else
    endReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (state.emittedReadable)
    return;

  state.emittedReadable = true;
  if (state.sync)
    process.nextTick(function() {
      emitReadable_(stream);
    });
  else
    emitReadable_(stream);
}

function emitReadable_(stream) {
  stream.emit('readable');
}


// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(function() {
      maybeReadMore_(stream, state);
    });
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended &&
         state.length < state.highWaterMark) {
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;
    else
      len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function(n) {
  this.emit('error', new Error('not implemented'));
};

Readable.prototype.pipe = function(dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;

  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
              dest !== process.stdout &&
              dest !== process.stderr;

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted)
    process.nextTick(endFn);
  else
    src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    if (readable !== src) return;
    cleanup();
  }

  function onend() {
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  function cleanup() {
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (!dest._writableState || dest._writableState.needDrain)
      ondrain();
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    unpipe();
    dest.removeListener('error', onerror);
    if (EE.listenerCount(dest, 'error') === 0)
      dest.emit('error', er);
  }
  // This is a brutally ugly hack to make sure that our error handler
  // is attached before any userland ones.  NEVER DO THIS.
  if (!dest._events || !dest._events.error)
    dest.on('error', onerror);
  else if (isArray(dest._events.error))
    dest._events.error.unshift(onerror);
  else
    dest._events.error = [onerror, dest._events.error];



  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    // the handler that waits for readable events after all
    // the data gets sucked out in flow.
    // This would be easier to follow with a .once() handler
    // in flow(), but that is too slow.
    this.on('readable', pipeOnReadable);

    state.flowing = true;
    process.nextTick(function() {
      flow(src);
    });
  }

  return dest;
};

function pipeOnDrain(src) {
  return function() {
    var dest = this;
    var state = src._readableState;
    state.awaitDrain--;
    if (state.awaitDrain === 0)
      flow(src);
  };
}

function flow(src) {
  var state = src._readableState;
  var chunk;
  state.awaitDrain = 0;

  function write(dest, i, list) {
    var written = dest.write(chunk);
    if (false === written) {
      state.awaitDrain++;
    }
  }

  while (state.pipesCount && null !== (chunk = src.read())) {

    if (state.pipesCount === 1)
      write(state.pipes, 0, null);
    else
      forEach(state.pipes, write);

    src.emit('data', chunk);

    // if anyone needs a drain, then we have to wait for that.
    if (state.awaitDrain > 0)
      return;
  }

  // if every destination was unpiped, either before entering this
  // function, or in the while loop, then stop flowing.
  //
  // NB: This is a pretty rare edge case.
  if (state.pipesCount === 0) {
    state.flowing = false;

    // if there were data event listeners added, then switch to old mode.
    if (EE.listenerCount(src, 'data') > 0)
      emitDataEvents(src);
    return;
  }

  // at this point, no one needed a drain, so we just ran out of data
  // on the next readable event, start it over again.
  state.ranOut = true;
}

function pipeOnReadable() {
  if (this._readableState.ranOut) {
    this._readableState.ranOut = false;
    flow(this);
  }
}


Readable.prototype.unpipe = function(dest) {
  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0)
    return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes)
      return this;

    if (!dest)
      dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    this.removeListener('readable', pipeOnReadable);
    state.flowing = false;
    if (dest)
      dest.emit('unpipe', this);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    this.removeListener('readable', pipeOnReadable);
    state.flowing = false;

    for (var i = 0; i < len; i++)
      dests[i].emit('unpipe', this);
    return this;
  }

  // try to find the right one.
  var i = indexOf(state.pipes, dest);
  if (i === -1)
    return this;

  state.pipes.splice(i, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1)
    state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function(ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data' && !this._readableState.flowing)
    emitDataEvents(this);

  if (ev === 'readable' && this.readable) {
    var state = this._readableState;
    if (!state.readableListening) {
      state.readableListening = true;
      state.emittedReadable = false;
      state.needReadable = true;
      if (!state.reading) {
        this.read(0);
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function() {
  emitDataEvents(this);
  this.read(0);
  this.emit('resume');
};

Readable.prototype.pause = function() {
  emitDataEvents(this, true);
  this.emit('pause');
};

function emitDataEvents(stream, startPaused) {
  var state = stream._readableState;

  if (state.flowing) {
    // https://github.com/isaacs/readable-stream/issues/16
    throw new Error('Cannot switch to old mode now.');
  }

  var paused = startPaused || false;
  var readable = false;

  // convert to an old-style stream.
  stream.readable = true;
  stream.pipe = Stream.prototype.pipe;
  stream.on = stream.addListener = Stream.prototype.on;

  stream.on('readable', function() {
    readable = true;

    var c;
    while (!paused && (null !== (c = stream.read())))
      stream.emit('data', c);

    if (c === null) {
      readable = false;
      stream._readableState.needReadable = true;
    }
  });

  stream.pause = function() {
    paused = true;
    this.emit('pause');
  };

  stream.resume = function() {
    paused = false;
    if (readable)
      process.nextTick(function() {
        stream.emit('readable');
      });
    else
      this.read(0);
    this.emit('resume');
  };

  // now make it start, just in case it hadn't already.
  stream.emit('readable');
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function(stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function() {
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length)
        self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function(chunk) {
    if (state.decoder)
      chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    //if (state.objectMode && util.isNullOrUndefined(chunk))
    if (state.objectMode && (chunk === null || chunk === undefined))
      return;
    else if (!state.objectMode && (!chunk || !chunk.length))
      return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (typeof stream[i] === 'function' &&
        typeof this[i] === 'undefined') {
      this[i] = function(method) { return function() {
        return stream[method].apply(stream, arguments);
      }}(i);
    }
  }

  // proxy certain important events.
  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach(events, function(ev) {
    stream.on(ev, self.emit.bind(self, ev));
  });

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function(n) {
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};



// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
function fromList(n, state) {
  var list = state.buffer;
  var length = state.length;
  var stringMode = !!state.decoder;
  var objectMode = !!state.objectMode;
  var ret;

  // nothing in the list, definitely empty.
  if (list.length === 0)
    return null;

  if (length === 0)
    ret = null;
  else if (objectMode)
    ret = list.shift();
  else if (!n || n >= length) {
    // read it all, truncate the array.
    if (stringMode)
      ret = list.join('');
    else
      ret = Buffer.concat(list, length);
    list.length = 0;
  } else {
    // read just some of it.
    if (n < list[0].length) {
      // just take a part of the first list item.
      // slice is the same for buffers and strings.
      var buf = list[0];
      ret = buf.slice(0, n);
      list[0] = buf.slice(n);
    } else if (n === list[0].length) {
      // first list is a perfect match
      ret = list.shift();
    } else {
      // complex case.
      // we have enough to cover it, but it spans past the first buffer.
      if (stringMode)
        ret = '';
      else
        ret = new Buffer(n);

      var c = 0;
      for (var i = 0, l = list.length; i < l && c < n; i++) {
        var buf = list[0];
        var cpy = Math.min(n - c, buf.length);

        if (stringMode)
          ret += buf.slice(0, cpy);
        else
          buf.copy(ret, c, 0, cpy);

        if (cpy < buf.length)
          list[0] = buf.slice(cpy);
        else
          list.shift();

        c += cpy;
      }
    }
  }

  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0)
    throw new Error('endReadable called on non-empty stream');

  if (!state.endEmitted && state.calledRead) {
    state.ended = true;
    process.nextTick(function() {
      // Check that we didn't get one last unshift.
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
      }
    });
  }
}

function forEach (xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf (xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}

}).call(this,require('_process'))
},{"_process":87,"buffer":58,"core-util-is":98,"events":78,"inherits":83,"isarray":84,"stream":104,"string_decoder/":99}],96:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

module.exports = Transform;

var Duplex = require('./_stream_duplex');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(Transform, Duplex);


function TransformState(options, stream) {
  this.afterTransform = function(er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb)
    return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined)
    stream.push(data);

  if (cb)
    cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}


function Transform(options) {
  if (!(this instanceof Transform))
    return new Transform(options);

  Duplex.call(this, options);

  var ts = this._transformState = new TransformState(options, this);

  // when the writable side finishes, then flush out anything remaining.
  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  this.once('finish', function() {
    if ('function' === typeof this._flush)
      this._flush(function(er) {
        done(stream, er);
      });
    else
      done(stream);
  });
}

Transform.prototype.push = function(chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function(chunk, encoding, cb) {
  throw new Error('not implemented');
};

Transform.prototype._write = function(chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform ||
        rs.needReadable ||
        rs.length < rs.highWaterMark)
      this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function(n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};


function done(stream, er) {
  if (er)
    return stream.emit('error', er);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var rs = stream._readableState;
  var ts = stream._transformState;

  if (ws.length)
    throw new Error('calling transform done when ws.length != 0');

  if (ts.transforming)
    throw new Error('calling transform done when still transforming');

  return stream.push(null);
}

},{"./_stream_duplex":93,"core-util-is":98,"inherits":83}],97:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, cb), and it'll handle all
// the drain event emission and buffering.

module.exports = Writable;

/*<replacement>*/
var Buffer = require('buffer').Buffer;
/*</replacement>*/

Writable.WritableState = WritableState;


/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var Stream = require('stream');

util.inherits(Writable, Stream);

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
}

function WritableState(options, stream) {
  options = options || {};

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  this.highWaterMark = (hwm || hwm === 0) ? hwm : 16 * 1024;

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, becuase any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function(er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.buffer = [];

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;
}

function Writable(options) {
  var Duplex = require('./_stream_duplex');

  // Writable ctor is applied to Duplexes, though they're not
  // instanceof Writable, they're instanceof Readable.
  if (!(this instanceof Writable) && !(this instanceof Duplex))
    return new Writable(options);

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function() {
  this.emit('error', new Error('Cannot pipe. Not readable.'));
};


function writeAfterEnd(stream, state, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  process.nextTick(function() {
    cb(er);
  });
}

// If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  if (!Buffer.isBuffer(chunk) &&
      'string' !== typeof chunk &&
      chunk !== null &&
      chunk !== undefined &&
      !state.objectMode) {
    var er = new TypeError('Invalid non-string/buffer chunk');
    stream.emit('error', er);
    process.nextTick(function() {
      cb(er);
    });
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function(chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (Buffer.isBuffer(chunk))
    encoding = 'buffer';
  else if (!encoding)
    encoding = state.defaultEncoding;

  if (typeof cb !== 'function')
    cb = function() {};

  if (state.ended)
    writeAfterEnd(this, state, cb);
  else if (validChunk(this, state, chunk, cb))
    ret = writeOrBuffer(this, state, chunk, encoding, cb);

  return ret;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode &&
      state.decodeStrings !== false &&
      typeof chunk === 'string') {
    chunk = new Buffer(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);
  if (Buffer.isBuffer(chunk))
    encoding = 'buffer';
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret)
    state.needDrain = true;

  if (state.writing)
    state.buffer.push(new WriteReq(chunk, encoding, cb));
  else
    doWrite(stream, state, len, chunk, encoding, cb);

  return ret;
}

function doWrite(stream, state, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  if (sync)
    process.nextTick(function() {
      cb(er);
    });
  else
    cb(er);

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er)
    onwriteError(stream, state, sync, er, cb);
  else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(stream, state);

    if (!finished && !state.bufferProcessing && state.buffer.length)
      clearBuffer(stream, state);

    if (sync) {
      process.nextTick(function() {
        afterWrite(stream, state, finished, cb);
      });
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished)
    onwriteDrain(stream, state);
  cb();
  if (finished)
    finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}


// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;

  for (var c = 0; c < state.buffer.length; c++) {
    var entry = state.buffer[c];
    var chunk = entry.chunk;
    var encoding = entry.encoding;
    var cb = entry.callback;
    var len = state.objectMode ? 1 : chunk.length;

    doWrite(stream, state, len, chunk, encoding, cb);

    // if we didn't call the onwrite immediately, then
    // it means that we need to wait until it does.
    // also, that means that the chunk and cb are currently
    // being processed, so move the buffer counter past them.
    if (state.writing) {
      c++;
      break;
    }
  }

  state.bufferProcessing = false;
  if (c < state.buffer.length)
    state.buffer = state.buffer.slice(c);
  else
    state.buffer.length = 0;
}

Writable.prototype._write = function(chunk, encoding, cb) {
  cb(new Error('not implemented'));
};

Writable.prototype.end = function(chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (typeof chunk !== 'undefined' && chunk !== null)
    this.write(chunk, encoding);

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished)
    endWritable(this, state, cb);
};


function needFinish(stream, state) {
  return (state.ending &&
          state.length === 0 &&
          !state.finished &&
          !state.writing);
}

function finishMaybe(stream, state) {
  var need = needFinish(stream, state);
  if (need) {
    state.finished = true;
    stream.emit('finish');
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished)
      process.nextTick(cb);
    else
      stream.once('finish', cb);
  }
  state.ended = true;
}

}).call(this,require('_process'))
},{"./_stream_duplex":93,"_process":87,"buffer":58,"core-util-is":98,"inherits":83,"stream":104}],98:[function(require,module,exports){
(function (Buffer){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

function isBuffer(arg) {
  return Buffer.isBuffer(arg);
}
exports.isBuffer = isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}
}).call(this,require("buffer").Buffer)
},{"buffer":58}],99:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var Buffer = require('buffer').Buffer;

var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     }


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
var StringDecoder = exports.StringDecoder = function(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  // Enough space to store all bytes of a single character. UTF-8 needs 4
  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
  this.charBuffer = new Buffer(6);
  // Number of bytes received for the current incomplete multi-byte character.
  this.charReceived = 0;
  // Number of bytes expected for the current incomplete multi-byte character.
  this.charLength = 0;
};


// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var available = (buffer.length >= this.charLength - this.charReceived) ?
        this.charLength - this.charReceived :
        buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this.charBuffer, this.charReceived, 0, available);
    this.charReceived += available;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // remove bytes belonging to the current character from the buffer
    buffer = buffer.slice(available, buffer.length);

    // get the character that was split
    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (buffer.length === 0) {
      return charStr;
    }
    break;
  }

  // determine and set charLength / charReceived
  this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

// detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.
StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}

},{"buffer":58}],100:[function(require,module,exports){
module.exports = require("./lib/_stream_passthrough.js")

},{"./lib/_stream_passthrough.js":94}],101:[function(require,module,exports){
exports = module.exports = require('./lib/_stream_readable.js');
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');

},{"./lib/_stream_duplex.js":93,"./lib/_stream_passthrough.js":94,"./lib/_stream_readable.js":95,"./lib/_stream_transform.js":96,"./lib/_stream_writable.js":97}],102:[function(require,module,exports){
module.exports = require("./lib/_stream_transform.js")

},{"./lib/_stream_transform.js":96}],103:[function(require,module,exports){
module.exports = require("./lib/_stream_writable.js")

},{"./lib/_stream_writable.js":97}],104:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Stream;

var EE = require('events').EventEmitter;
var inherits = require('inherits');

inherits(Stream, EE);
Stream.Readable = require('readable-stream/readable.js');
Stream.Writable = require('readable-stream/writable.js');
Stream.Duplex = require('readable-stream/duplex.js');
Stream.Transform = require('readable-stream/transform.js');
Stream.PassThrough = require('readable-stream/passthrough.js');

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};

},{"events":78,"inherits":83,"readable-stream/duplex.js":92,"readable-stream/passthrough.js":100,"readable-stream/readable.js":101,"readable-stream/transform.js":102,"readable-stream/writable.js":103}],105:[function(require,module,exports){
exports.isatty = function () { return false; };

function ReadStream() {
  throw new Error('tty.ReadStream is not implemented');
}
exports.ReadStream = ReadStream;

function WriteStream() {
  throw new Error('tty.ReadStream is not implemented');
}
exports.WriteStream = WriteStream;

},{}],106:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var punycode = require('punycode');

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = require('querystring');

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a puny coded representation of "domain".
      // It only converts the part of the domain name that
      // has non ASCII characters. I.e. it dosent matter if
      // you call it with a domain that already is in ASCII.
      var domainArray = this.hostname.split('.');
      var newOut = [];
      for (var i = 0; i < domainArray.length; ++i) {
        var s = domainArray[i];
        newOut.push(s.match(/[^A-Za-z0-9_-]/) ?
            'xn--' + punycode.encode(s) : s);
      }
      this.hostname = newOut.join('.');
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  Object.keys(this).forEach(function(k) {
    result[k] = this[k];
  }, this);

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    Object.keys(relative).forEach(function(k) {
      if (k !== 'protocol')
        result[k] = relative[k];
    });

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      Object.keys(relative).forEach(function(k) {
        result[k] = relative[k];
      });
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especialy happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!isNull(result.pathname) || !isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host) && (last === '.' || last === '..') ||
      last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last == '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especialy happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!isNull(result.pathname) || !isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};

function isString(arg) {
  return typeof arg === "string";
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isNull(arg) {
  return arg === null;
}
function isNullOrUndefined(arg) {
  return  arg == null;
}

},{"punycode":88,"querystring":91}],107:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],108:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":107,"_process":87,"inherits":83}],109:[function(require,module,exports){
var indexOf = require('indexof');

var Object_keys = function (obj) {
    if (Object.keys) return Object.keys(obj)
    else {
        var res = [];
        for (var key in obj) res.push(key)
        return res;
    }
};

var forEach = function (xs, fn) {
    if (xs.forEach) return xs.forEach(fn)
    else for (var i = 0; i < xs.length; i++) {
        fn(xs[i], i, xs);
    }
};

var defineProp = (function() {
    try {
        Object.defineProperty({}, '_', {});
        return function(obj, name, value) {
            Object.defineProperty(obj, name, {
                writable: true,
                enumerable: false,
                configurable: true,
                value: value
            })
        };
    } catch(e) {
        return function(obj, name, value) {
            obj[name] = value;
        };
    }
}());

var globals = ['Array', 'Boolean', 'Date', 'Error', 'EvalError', 'Function',
'Infinity', 'JSON', 'Math', 'NaN', 'Number', 'Object', 'RangeError',
'ReferenceError', 'RegExp', 'String', 'SyntaxError', 'TypeError', 'URIError',
'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape',
'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'undefined', 'unescape'];

function Context() {}
Context.prototype = {};

var Script = exports.Script = function NodeScript (code) {
    if (!(this instanceof Script)) return new Script(code);
    this.code = code;
};

Script.prototype.runInContext = function (context) {
    if (!(context instanceof Context)) {
        throw new TypeError("needs a 'context' argument.");
    }
    
    var iframe = document.createElement('iframe');
    if (!iframe.style) iframe.style = {};
    iframe.style.display = 'none';
    
    document.body.appendChild(iframe);
    
    var win = iframe.contentWindow;
    var wEval = win.eval, wExecScript = win.execScript;

    if (!wEval && wExecScript) {
        // win.eval() magically appears when this is called in IE:
        wExecScript.call(win, 'null');
        wEval = win.eval;
    }
    
    forEach(Object_keys(context), function (key) {
        win[key] = context[key];
    });
    forEach(globals, function (key) {
        if (context[key]) {
            win[key] = context[key];
        }
    });
    
    var winKeys = Object_keys(win);

    var res = wEval.call(win, this.code);
    
    forEach(Object_keys(win), function (key) {
        // Avoid copying circular objects like `top` and `window` by only
        // updating existing context properties or new properties in the `win`
        // that was only introduced after the eval.
        if (key in context || indexOf(winKeys, key) === -1) {
            context[key] = win[key];
        }
    });

    forEach(globals, function (key) {
        if (!(key in context)) {
            defineProp(context, key, win[key]);
        }
    });
    
    document.body.removeChild(iframe);
    
    return res;
};

Script.prototype.runInThisContext = function () {
    return eval(this.code); // maybe...
};

Script.prototype.runInNewContext = function (context) {
    var ctx = Script.createContext(context);
    var res = this.runInContext(ctx);

    forEach(Object_keys(ctx), function (key) {
        context[key] = ctx[key];
    });

    return res;
};

forEach(Object_keys(Script.prototype), function (name) {
    exports[name] = Script[name] = function (code) {
        var s = Script(code);
        return s[name].apply(s, [].slice.call(arguments, 1));
    };
});

exports.createScript = function (code) {
    return exports.Script(code);
};

exports.createContext = Script.createContext = function (context) {
    var copy = new Context();
    if(typeof context === 'object') {
        forEach(Object_keys(context), function (key) {
            copy[key] = context[key];
        });
    }
    return copy;
};

},{"indexof":110}],110:[function(require,module,exports){

var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
},{}],"stylecow-plugin-animation":[function(require,module,exports){
module.exports = [

	//Adds -moz- vendor prefixes
	{
		disable: {
			firefox: 16.0
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^animation/)) {
				declaration.cloneBefore().name = '-moz-' + declaration.name;
			}
		},
		AtRule: {
			"keyframes": function (atrule) {
				atrule.cloneBefore().name = '-moz-' + atrule.name;
			}
		}
	},

	//Adds -o- vendor prefixes
	{
		disable: {
			opera: 12.1
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^animation/)) {
				declaration.cloneBefore().name = '-o-' + declaration.name;
			}
		},
		AtRule: {
			"keyframes": function (atrule) {
				atrule.cloneBefore().name = '-o-' + atrule.name;
			}
		}
	},

	//Adds -webkit- vendor prefixes
	{
		disable: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^animation/)) {
				declaration.cloneBefore().name = '-webkit-' + declaration.name;
			}
		},
		AtRule: {
			"keyframes": function (atrule) {
				atrule.cloneBefore().name = '-webkit-' + atrule.name;
			}
		}
	}
];

},{}],"stylecow-plugin-appearance":[function(require,module,exports){
module.exports = [

	//Adds -moz- vendor prefixes
	{
		disable: {
			firefox: false
		},
		Declaration: {
			"appearance": function (declaration) {
				declaration.cloneBefore().name = '-moz-appearance';
			}
		}
	},

	//Adds -webkit- vendor prefixes
	{
		disable: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		Declaration: {
			"appearance": function (declaration) {
				declaration.cloneBefore().name = '-webkit-appearance';
			}
		}
	}
];

},{}],"stylecow-plugin-background":[function(require,module,exports){
module.exports = [

	//Adds -moz- vendor prefixes
	{
		disable: {
			firefox: 4.0
		},
		Declaration: {
			"background-size": function (declaration) {
				declaration.cloneBefore().name = '-moz-background-size';
			},
			"background-clip": function (declaration) {
				declaration.cloneBefore().name = '-moz-background-clip';
			},
			"background-origin": function (declaration) {
				declaration.cloneBefore().name = '-moz-background-origin';
			}
		}
	},

	//Adds -o- vendor prefixes
	{
		disable: {
			opera: 10.5
		},
		Declaration: {
			"background-size": function (declaration) {
				declaration.cloneBefore().name = '-o-background-size';
			},
			"background-clip": function (declaration) {
				declaration.cloneBefore().name = '-o-background-clip';
			},
			"background-origin": function (declaration) {
				declaration.cloneBefore().name = '-o-background-origin';
			}
		}
	},

	//Adds -webkit- vendor prefixes
	{
		disable: {
			android: 3.0
		},
		Declaration: {
			"background-size": function (declaration) {
				declaration.cloneBefore().name = '-webkit-background-size';
			},
			"background-clip": function (declaration) {
				declaration.cloneBefore().name = '-webkit-background-clip';
			},
			"background-origin": function (declaration) {
				declaration.cloneBefore().name = '-webkit-background-origin';
			}
		}
	}
];

},{}],"stylecow-plugin-border":[function(require,module,exports){
module.exports = [

	//Fix old syntax in firefox <13 in border-radius
	{
		disable: {
			firefox: 13.0
		},
		Declaration: {
			'border-top-left-radius': function (declaration) {
				declaration.cloneBefore().name = '-moz-border-radius-topleft';
			},
			'border-top-right-radius': function (declaration) {
				declaration.cloneBefore().name = '-moz-border-radius-topright';
			},
			'border-bottom-left-radius': function (declaration) {
				declaration.cloneBefore().name = '-moz-border-radius-bottomleft';
			},
			'border-bottom-right-radius': function (declaration) {
				declaration.cloneBefore().name = '-moz-border-radius-bottomright';
			}
		}
	},

	//Adds -moz- vendor prefix to border-radius
	{
		disable: {
			firefox: 4.0
		},
		Declaration: {
			'border-radius': function (declaration) {
				declaration.cloneBefore().name = '-moz-border-radius';
			}
		}
	},

	//Adds -webkit- vendor prefix to border-radius
	{
		disable: { 
			chrome: 5.0,
			safari: 5.0,
			ios: 4.0,
			android: 2.2
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^border-.*radius$/)) {
				declaration.cloneBefore().name = '-webkit-' + declaration.name;
			}
		}
	},

	//Adds -webkit- vendor prefix to border-start,end,after,before
	{
		disable: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^border-(start|end|after|before)/)) {
				declaration.cloneBefore().name = '-webkit-' + declaration.name;
			}
		}
	},

	//Adds -moz- vendor prefix to border-start,end
	{
		disable: { 
			firefox: false
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^border-(start|end)/)) {
				declaration.cloneBefore().name = '-moz-' + declaration.name;
			}
		}
	},

	//Adds -moz- vendor prefix to border-image
	{
		disable: { 
			firefox: 15.0
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^border-image/)) {
				declaration.cloneBefore().name = '-moz-' + declaration.name;
			}
		}
	},

	//Adds -o- vendor prefix to border-image
	{
		disable: { 
			opera: 15.0
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^border-image/)) {
				declaration.cloneBefore().name = '-o-' + declaration.name;
			}
		}
	},

	//Adds -webkit- vendor prefix to border-image
	{
		disable: { 
			chrome: 16.0,
			safari: 6.0,
			android: 4.4
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^border-image/)) {
				declaration.cloneBefore().name = '-webkit-' + declaration.name;
			}
		}
	}
];

},{}],"stylecow-plugin-box-shadow":[function(require,module,exports){
module.exports = [

	//Adds -moz- vendor prefixes
	{
		disable: {
			firefox: 4.0
		},
		Declaration: {
			"box-shadow": function (declaration) {
				declaration.cloneBefore().name = '-moz-box-shadow';
			}
		}
	},

	//Adds -webkit- vendor prefixes
	{
		disable: {
			chrome: 10.0,
			safari: 5.1,
			ios: 5.0,
			android: 4.0
		},
		Declaration: {
			"box-shadow": function (declaration) {
				declaration.cloneBefore().name = '-webkit-box-shadow';
			}
		}
	}
];

},{}],"stylecow-plugin-box-sizing":[function(require,module,exports){
module.exports = [

	//Adds -moz- vendor prefixes
	{
		disable: {
			firefox: 29.0
		},
		Declaration: {
			"box-sizing": function (declaration) {
				declaration.cloneBefore().name = '-moz-box-sizing';
			}
		}
	},

	//Adds -webkit- vendor prefixes
	{
		disable: {
			chrome: 10.0,
			safari: 5.1,
			ios: 5.0,
			android: 4.0
		},
		Declaration: {
			"box-sizing": function (declaration) {
				declaration.cloneBefore().name = '-webkit-box-sizing';
			}
		}
	}
];

},{}],"stylecow-plugin-calc":[function(require,module,exports){
module.exports = [
	//Normalizes the calc
	{
		"Function": {
			calc: function (fn) {
				var keyword = fn[0];
				keyword.name = keyword.name.replace(/([\w\%])\s*([\+\-])\s*/g, '$1 $2 ');
			}
		}
	},

	//Adds -moz- vendor prefix
	{
		disable: {
			firefox: 16.0
		},
		Declaration: function (declaration) {
			if (declaration.has('Function', 'calc')) {
				declaration.cloneBefore().search('Function', 'calc').forEach(function (fn) {
					fn.name = '-moz-' + fn.name;
				});
			}
		}
	},

	//Adds -webkit- vendor prefix
	{
		disable: {
			chrome: 26.0,
			safari: 6.1,
			ios: 7.0
		},
		Declaration: function (declaration) {
			if (declaration.has('Function', 'calc')) {
				declaration.cloneBefore().search('Function', 'calc').forEach(function (fn) {
					fn.name = '-webkit-' + fn.name;
				});
			}
		}
	}
];

},{}],"stylecow-plugin-clip":[function(require,module,exports){
module.exports = {
	disable: {
		explorer: 8.0
	},
	"Function": {
		rect: function (fn) {
			var declaration = fn.ancestor('Declaration', 'clip');

			if (declaration) {
				declaration.insertAfter('*clip: rect(' + fn.join(' ') + ')');
			}
		}
	}
};

},{}],"stylecow-plugin-color":[function(require,module,exports){
//http://dev.w3.org/csswg/css-color/

var color = require('stylecow-color');

module.exports = {

	//Convert hex + alpha values to rgba values
	Keyword: function (keyword) {
		if (keyword.name[0] === '#' && (keyword.name.length === 5 || keyword.name.length === 9) && keyword.ancestor('Declaration')) {
			var rgba = color.toRGBA(keyword.name);

			if (rgba[3] === 1) {
				keyword.name = '#' + color.RGBA_HEX(rgba);
			} else {
				keyword.replaceWith('rgba(' + color.toRGBA(keyword.name).join(',') + ')');
			}
		}
	},

	"Function": {

		//Convert gray() function to rgba/hex values
		gray: function (fn) {
			var rgba = color.toRGBA(fn.content, 'gray');

			if (rgba[3] === 1) {
				fn.replaceWith('#' + color.RGBA_HEX(rgba));
			} else {
				fn.content = rgba;
				fn.name = 'rgba';
			}
		},

		//Convert color() function to rgba/hex values
		color: function (fn) {
			var args = fn[0];
			var rgba;

			if (args.type === 'Value') {
				rgba = color.toRGBA(args[0]);
				args[0].remove();
			} else {
				rgba = color.toRGBA(args);
				args.remove();
				args = [];
			}

			args.forEach(function (adjust) {
				switch (adjust.name) {
					case 'alpha':
					case 'a':
						rgba[3] = modify(rgba[3], adjust[0].name, 1);
						break;

					case 'red':
						rgba[0] = modify(rgba[0], adjust[0].name, 255);
						break;

					case 'green':
						rgba[1] = modify(rgba[1], adjust[0].name, 255);
						break;

					case 'blue':
						rgba[2] = modify(rgba[2], adjust[0].name, 255);
						break;

					case 'rgb':
						rgba[0] = modify(rgba[0], adjust[0].name, 255);
						rgba[1] = modify(rgba[1], adjust[1].name, 255);
						rgba[2] = modify(rgba[2], adjust[2].name, 255);
						break;

					case 'saturation':
					case 's':
						var hsla = color.RGBA_HSLA(rgba);
						hsla[1] = modify(hsla[1], adjust[0].name, 100);
						rgba = color.HSLA_RGBA(hsla);
						break;

					case 'lightness':
					case 'l':
						var hsla = color.RGBA_HSLA(rgba);
						hsla[2] = modify(hsla[2], adjust[0].name, 100);
						rgba = color.HSLA_RGBA(hsla);
						break;

					case 'whiteness':
					case 'w':
						var hwba = color.RGBA_HWBA(rgba);
						hwba[1] = modify(hwba[1], adjust[0].name, 100);
						rgba = color.HWBA_RGBA(hwba);
						break;

					case 'blackness':
					case 'b':
						var hwba = color.RGBA_HWBA(rgba);
						hwba[2] = modify(hwba[2], adjust[0].name, 100);
						rgba = color.HWBA_RGBA(hwba);
						break;

					case 'blend':
						var c = color.toRGBA(adjust[0][0]);

						rgba[0] = blend(rgba[0], c[0], adjust[0][1].name, 255);
						rgba[1] = blend(rgba[1], c[1], adjust[0][1].name, 255);
						rgba[2] = blend(rgba[2], c[2], adjust[0][1].name, 255);
						break;

					case 'blenda':
						var c = color.toRGBA(adjust[0][0]);

						rgba[0] = blend(rgba[0], c[0], adjust[0][1].name, 255);
						rgba[1] = blend(rgba[1], c[1], adjust[0][1].name, 255);
						rgba[2] = blend(rgba[2], c[2], adjust[0][1].name, 255);
						rgba[3] = blend(rgba[3], c[3], adjust[0][1].name, 1);
						break;

					case 'tint':
						rgba[0] = blend(rgba[0], 255, adjust[0].name, 255);
						rgba[1] = blend(rgba[1], 255, adjust[0].name, 255);
						rgba[2] = blend(rgba[2], 255, adjust[0].name, 255);
						break;

					case 'shade':
						rgba[0] = blend(rgba[0], 0, adjust[0].name, 255);
						rgba[1] = blend(rgba[1], 0, adjust[0].name, 255);
						rgba[2] = blend(rgba[2], 0, adjust[0].name, 255);
						break;

					case 'contrast':
						var hsla = color.RGBA_HSLA(rgba);
						var hwba = color.RGBA_HWBA(rgba);

						if (hsla[2] < 50) { //is dark +50%
							hwba[1] = modify(hwba[1], adjust[0].name, 100);
						} else {
							hwba[2] = modify(hwba[2], adjust[0].name, 100);
						}
						rgba = color.HWBA_RGBA(hwba);
				}
			});

			if (rgba[3] === 1) {
				fn.replaceWith('#' + color.RGBA_HEX(rgba));
			} else {
				fn.content = rgba;
				fn.name = 'rgba';
			}
		}
	}
};


function modify (base, value, max) {
	var mode;

	if (value[0] === '+' || value[0] === '-') {
		mode = value[0];
		value = value.substr(1);
	}

	if (value.indexOf('%') !== -1) {
		value = ((max / 100) * parseFloat(value, 10));
	} else {
		value = parseFloat(value, 10);
	}

	if (max === 1) {
		value = parseFloat(value.toFixed(2));
	} else {
		value = Math.round(value);
	}

	if (mode === '+') {
		base += value;
	} else if (mode === '-') {
		base -= value;
	} else {
		base = value;
	}

	if (base > max) {
		return max;
	}

	if (base < 0) {
		return 0;
	}

	return base;
}

function blend (base, value, percentage, max) {
	percentage = parseFloat(percentage);

	base = (base / 100) * percentage;
	value = (value / 100) * (100 - percentage);
	
	base += value;

	if (max === 1) {
		base = parseFloat(base.toFixed(2));
	} else {
		base = Math.round(base);
	}

	if (base > max) {
		return max;
	}

	if (base < 0) {
		return 0;
	}

	return base;
}

},{"stylecow-color":1}],"stylecow-plugin-column":[function(require,module,exports){
module.exports = [

	// Adds -moz- vendor prefixes
	{
		disable: {
			firefox: false
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^column/)) {
				declaration.cloneBefore().name = '-moz-' + declaration.name;
			}
		}
	},

	// Adds -webkit- vendor prefixes
	{
		disable: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^column/)) {
				declaration.cloneBefore().name = '-webkit-' + declaration.name;
			}
		}
	},

	//Adds support of break-before, break-after, break-inside in webkit using the non-standard -webkit-column-break-
	{
		disable: {
			chrome: 21.0,
			safari: 6.1,
			android: 4.4,
			ios: 7.0
		},
		Declaration: function (declaration) {
			if (declaration.is(null, ['break-before', 'break-after', 'break-inside'], 'column')) {
				declaration.insertBefore('-webkit-column-' + declaration.name + ':always');
			}
		}
	}
];

},{}],"stylecow-plugin-cursor":[function(require,module,exports){
module.exports = [
	
	//Adds -moz- vendor prefix to cursor: zoom-in / zoom-out
	{
		disable: {
			firefox: 24.0
		},
		Declaration: {
			'cursor': function (declaration) {
				if (declaration.has('Keyword', ['zoom-in', 'zoom-out'])) {
					declaration.cloneBefore().search('Keyword', ['zoom-in', 'zoom-out']).forEach(function (keyword) {
						keyword.name = '-moz-' + keyword;
					});
				}
			}
		}
	},

	//Adds -moz- vendor prefix to cursor: grab / grabbing
	{
		disable: {
			firefox: 27.0
		},
		Declaration: {
			'cursor': function (declaration) {
				if (declaration.has('Keyword', ['grab', 'grabbing'])) {
					declaration.cloneBefore().search('Keyword', ['grab', 'grabbing']).forEach(function (keyword) {
						keyword.name = '-moz-' + keyword;
					});
				}
			}
		}
	},

	//Adds -webkit- vendor prefix to some cursor values
	{
		disable: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		Declaration: {
			'cursor': function (declaration) {
				if (declaration.has('Keyword', ['zoom-in', 'zoom-out', 'grab', 'grabbing'])) {
					declaration.cloneBefore().search('Keyword', ['zoom-in', 'zoom-out', 'grab', 'grabbing']).forEach(function (keyword) {
						keyword.name = '-webkit-' + keyword;
					});
				}
			}
		}
	}
];

},{}],"stylecow-plugin-document":[function(require,module,exports){
module.exports = {
	disable: {
		firefox: false
	},
	AtRule: {
		"document": function (atrule) {
			atrule.cloneBefore().name = '-moz-document';
		}
	}
};

},{}],"stylecow-plugin-flex":[function(require,module,exports){
module.exports = [
	
	// Old ms flex syntax
	{
		disable: {
			explorer: 11.0
		},
		Declaration: function (declaration) {
			if (declaration.is(null, 'display', ['flex', 'inline-flex'])) {
				return declaration.insertBefore('display: -ms-' + declaration.value + 'box');
			}
			
			if (declaration.name === 'flex-wrap') {
				return declaration.insertBefore('-ms-flex-wrap: ' + (declaration.value === 'nowrap' ? 'none' : declaration.value));
			}
			
			if (declaration.name === 'flex-grow') {
				return declaration.cloneBefore().name = '-ms-flex-positive';
			}
			
			if (declaration.name === 'flex-shrink') {
				return declaration.cloneBefore().name = '-ms-flex-negative';
			}
			
			if (declaration.name === 'order') {
				return declaration.cloneBefore().name = '-ms-flex-order';
			}
			
			if (declaration.name === 'justify-content') {
				return declaration.insertBefore('-ms-flex-pack: ' + alignmentValue(declaration.value));
			}
			
			if (declaration.name === 'align-items') {
				return declaration.insertBefore('-ms-flex-align: ' + alignmentValue(declaration.value));
			}
			
			if (declaration.name === 'align-self') {
				return declaration.insertBefore('-ms-flex-item-align: ' + alignmentValue(declaration.value));
			}
			
			if (declaration.name === 'align-content') {
				return declaration.insertBefore('-ms-flex-line-pack: ' + alignmentValue(declaration.value));
			}

			if (declaration.is(null, /^flex/)) {
				return declaration.cloneBefore().name = '-ms-' + declaration.name;
			}
		}
	},

	// Old webkit flex syntax
	{
		disable: {
			chrome: 21.0,
			safari: 6.1,
			android: 4.4,
			ios: 7.0
		},
		Declaration: {
			display: function (declaration) {
				if (declaration.is(null, null, ['flex', 'inline-flex'])) {
					declaration.insertBefore('display: -webkit-' + declaration.value.replace('flex', 'box'));
				}
			},
			"flex-direction": function (declaration) {
				var orient, direction;

				switch (declaration.value) {
					case 'row':
						orient = 'horizontal';
						break;

					case 'row-reverse':
						orient = 'horizontal';
						direction = 'reverse';
						break;

					case 'column':
						orient = 'vertical';
						break;

					case 'column-reverse':
						orient = 'vertical';
						direction = 'reverse';
						break;

					default:
						return false;
				}

				declaration.insertBefore('-webkit-box-orient:' + orient);

				if (direction) {
					declaration.insertBefore('-webkit-box-direction:' + direction);
				}
			},
			order: function (declaration) {
				var value = (declaration.value == 0) ? 1 : property.value;

				declaration.insertBefore('-webkit-box-ordinal-group:' + value);
			},
			"justify-content": function (declaration) {
				var value = alignmentValue(declaration.value);

				if ((value === 'space-between') || (value === 'space-around')) {
					value = 'justify';
				}

				declaration.insertBefore('-webkit-box-pack:' + value);
			},
			"align-items": function (declaration) {
				declaration.insertBefore('-webkit-box-align:' + alignmentValue(declaration.value));
			},
			"flex-grow": function (declaration) {
				declaration.insertBefore('-webkit-box-flex:' + declaration.value);
			},
			"flex": function (declaration) {
				declaration.insertBefore('-webkit-box-flex:' + declaration.value);
			}
		}
	},

	// -webkit- vendor prefixes to new sintax
	{
		disable: {
			chrome: 21.0,
			safari: 6.1,
			android: 4.4,
			ios: 7.0
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^(flex.*|align.*|justify-content|order)$/)) {
				return declaration.cloneBefore().name = '-webkit-' + declaration.name;
			}

			if (declaration.is(null, 'display', ['flex', 'inline-flex'])) {
				return declaration.cloneBefore().value = '-webkit-' + declaration.value;
			}
		}
	}
];

function alignmentValue (value) {
	if (value === 'flex-start') {
		return 'start';
	}

	if (value === 'flex-end') {
		return 'end';
	}

	return value;
}
},{}],"stylecow-plugin-float":[function(require,module,exports){
module.exports = {
	disable: {
		explorer: 7.0
	},
	Declaration: {
		float: function (declaration) {
			if (declaration.is(null, null, ['left', 'right'])) {
				declaration.insertAfter('_display: inline');
			}
		}
	}
};

},{}],"stylecow-plugin-fullscreen":[function(require,module,exports){
module.exports = [

	//Adds -moz-full-screen vendor prefix
	{
		disable: {
			firefox: false
		},
		Rule: function (rule) {
			if (rule.has('Keyword', ':fullscreen')) {
				rule.cloneBefore().search('Keyword', ':fullscreen').forEach(function (keyword) {
					keyword.name = ':-moz-full-screen';
				});
			}
		}
	},

	//Adds -webkit-full-screen vendor prefix
	{
		disable: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		Rule: function (rule) {
			if (rule.has('Keyword', ':fullscreen')) {
				rule.cloneBefore().search('Keyword', ':fullscreen').forEach(function (keyword) {
					keyword.name = ':-webkit-full-screen';
				});
			}
		}
	},

	//Adds -ms-fullscreen vendor prefix
	{
		disable: {
			explorer: false
		},
		Rule: function (rule) {
			if (rule.has('Keyword', ':fullscreen')) {
				rule.cloneBefore().search('Keyword', ':fullscreen').forEach(function (keyword) {
					keyword.name = ':-ms-fullscreen';
				});
			}
		}
	}
];

},{}],"stylecow-plugin-grid":[function(require,module,exports){
module.exports = {
	disable: {
		explorer: false
	},
	Declaration: function (declaration) {
		if (declaration.is(null, 'display', 'grid')) {
			return declaration.cloneBefore().value = '-ms-grid';
		}

		if (declaration.is(null, /^grid.*$/)) {
			return declaration.cloneBefore().name = '-ms-' + declaration.name;
		}
	}
};

},{}],"stylecow-plugin-initial":[function(require,module,exports){
var initials = {
	'animation': 'none',
	'animation-delay': '0',
	'animation-direction': 'normal',
	'animation-duration': '0',
	'animation-fill-mode': 'none',
	'animation-iteration-count': '1',
	'animation-name': 'none',
	'animation-play-state': 'running',
	'animation-timing-function': 'ease',
	'backface-visibility': 'visible',
	'background': '0',
	'background-attachment': 'scroll',
	'background-clip': 'border-box',
	'background-color': 'transparent',
	'background-image': 'none',
	'background-origin': 'padding-box',
	'background-position': '0 0',
	'background-repeat': 'repeat',
	'background-size': 'auto auto',
	'border': '0',
	'border-style': 'none',
	'border-width': 'medium',
	'border-color': 'inherit',
	'border-bottom': '0',
	'border-bottom-color': 'inherit',
	'border-bottom-left-radius': '0',
	'border-bottom-right-radius': '0',
	'border-bottom-style': 'none',
	'border-bottom-width': 'medium',
	'border-collapse': 'separate',
	'border-image': 'none',
	'border-left': '0',
	'border-left-color': 'inherit',
	'border-left-style': 'none',
	'border-left-width': 'medium',
	'border-radius': '0',
	'border-right': '0',
	'border-right-color': 'inherit',
	'border-right-style': 'none',
	'border-right-width': 'medium',
	'border-spacing': '0',
	'border-top': '0',
	'border-top-color': 'inherit',
	'border-top-left-radius': '0',
	'border-top-right-radius': '0',
	'border-top-style': 'none',
	'border-top-width': 'medium',
	'bottom': 'auto',
	'box-shadow': 'none',
	'box-sizing': 'content-box',
	'caption-side': 'top',
	'clear': 'none',
	'clip': 'auto',
	'color': 'inherit',
	'columns': 'auto',
	'column-count': 'auto',
	'column-fill': 'balance',
	'column-gap': 'normal',
	'column-rule': 'medium none currentColor',
	'column-rule-color': 'currentColor',
	'column-rule-style': 'none',
	'column-rule-width': 'none',
	'column-span': '1',
	'column-width': 'auto',
	'content': 'normal',
	'counter-increment': 'none',
	'counter-reset': 'none',
	'cursor': 'auto',
	'direction': 'ltr',
	'display': 'inline',
	'empty-cells': 'show',
	'float': 'none',
	'font': 'normal',
	'font-family': 'inherit',
	'font-size': 'medium',
	'font-style': 'normal',
	'font-variant': 'normal',
	'font-weight': 'normal',
	'height': 'auto',
	'hyphens': 'none',
	'left': 'auto',
	'letter-spacing': 'normal',
	'line-height': 'normal',
	'list-style': 'none',
	'list-style-image': 'none',
	'list-style-position': 'outside',
	'list-style-type': 'disc',
	'margin': '0',
	'margin-bottom': '0',
	'margin-left': '0',
	'margin-right': '0',
	'margin-top': '0',
	'max-height': 'none',
	'max-width': 'none',
	'min-height': '0',
	'min-width': '0',
	'opacity': '1',
	'orphans': '0',
	'outline': '0',
	'outline-color': 'invert',
	'outline-style': 'none',
	'outline-width': 'medium',
	'overflow': 'visible',
	'padding': '0',
	'padding-bottom': '0',
	'padding-left': '0',
	'padding-right': '0',
	'padding-top': '0',
	'page-break-after': 'auto',
	'page-break-before': 'auto',
	'page-break-inside': 'auto',
	'perspective': 'none',
	'perspective-origin': '50% 50%',
	'position': 'static',
	'right': 'auto',
	'tab-size': '8',
	'table-layout': 'auto',
	'text-align': 'inherit',
	'text-align-last': 'auto',
	'text-decoration': 'none',
	'text-decoration-color': 'inherit',
	'text-decoration-line': 'none',
	'text-decoration-style': 'solid',
	'text-indent': '0',
	'text-shadow': 'none',
	'text-transform': 'none',
	'top': 'auto',
	'transform': 'none',
	'transform-style': 'flat',
	'transition': 'none',
	'transition-delay': '0s',
	'transition-duration': '0s',
	'transition-property': 'none',
	'transition-timing-function': 'ease',
	'unicode-bidi': 'normal',
	'vertical-align': 'baseline',
	'visibility': 'visible',
	'white-space': 'normal',
	'widows': '0',
	'width': 'auto',
	'word-spacing': 'normal',
	'z-index': 'auto'
};

module.exports = {
	disable: {
		firefox: 19.0,
		chrome: 1.0,
		safari: 1.2,
		opera: 15.0,
		explorer: false
	},
	Declaration: function (declaration) {
		if (declaration.value === 'initial') {
			declaration.value = initials[declaration.name] || 'inherit';
		}
	}
};

},{}],"stylecow-plugin-inline-block":[function(require,module,exports){
module.exports = [

	//Adds support in explorer < 8
	{
		disable: {
			explorer: 8.0
		},
		Declaration: {
			display: function (declaration) {
				if (declaration.is(null, null, 'inline-block')) {
					declaration.insertAfter('*zoom: 1').insertAfter('*display: inline');
				}
			}
		}
	},

	//Adds -moz- vendor prefix
	{
		disable: {
			firefox: 3.0
		},
		Declaration: {
			display: function (declaration) {
				if (declaration.is(null, null, 'inline-block')) {
					declaration.insertAfter('display: -moz-inline-block');
				}
			}
		}
	}
];

},{}],"stylecow-plugin-linear-gradient":[function(require,module,exports){
module.exports = [

	// adds -moz- vendor prefix
	{
		disable: {
			firefox: 10.0
		},
		"Function": {
			'linear-gradient': function (fn) {
				fn.ancestor('Declaration').cloneBefore().search('Function', 'linear-gradient').forEach(function (fn) {
					fn.name = '-moz-linear-gradient';
					fn[0].replaceWith(fixDirection(fn[0]));
				});
			}
		}
	},

	// adds -o- vendor prefix
	{
		disable: {
			opera: 12.1
		},
		"Function": {
			'linear-gradient': function (fn) {
				fn.ancestor('Declaration').cloneBefore().search('Function', 'linear-gradient').forEach(function (fn) {
					fn.name = '-o-linear-gradient';
					fn[0].replaceWith(fixDirection(fn[0]));
				});
			}
		}
	},

	// adds -webkit- vendor prefix
	{
		disable: {
			chrome: 26.0,
			safari: 6.1,
			ios: 7.0,
			android: 4.4
		},
		"Function": {
			'linear-gradient': function (fn) {
				fn.ancestor('Declaration').cloneBefore().search('Function', 'linear-gradient').forEach(function (fn) {
					fn.name = '-webkit-linear-gradient';
					fn[0].replaceWith(fixDirection(fn[0]));
				});
			}
		}
	},

	// adds the old syntax -webkit-gradient
	{
		disable: {
			chrome: 10.0,
			safari: 5.1,
			android: 4.0
		},
		"Function": {
			'linear-gradient': function (fn) {
				fn.ancestor('Declaration').cloneBefore().search('Function', 'linear-gradient').forEach(function (fn) {
					var newArgs = ['linear'];

					//Calculate the gradient direction
					var point = 'to bottom';

					if (fn[0].is(null, /(top|bottom|left|right|deg)/)) {
						point = fn.shift().toString();
					}

					switch (point) {
						case 'to bottom':
							newArgs.push('left top', 'left bottom');
							break;

						case 'to top':
							newArgs.push('left bottom', 'left top');
							break;

						case 'to right':
							newArgs.push('left top', 'right top');
							break;

						case 'to left':
							newArgs.push('right top', 'left top');
							break;

						default:
							if (/^\ddeg$/.test(point)) {
								newArgs.push(parseInt(point, 10) + 'deg');
							} else {
								newArgs.push('left top', 'left bottom');
							}
					}

					//Gradient colors and color stops
					var total = fn.length - 1;

					fn.forEach(function (param, i) {
						var text;

						if (i === 0) {
							text = 'from';
						} else if (i === total) {
							text = 'to';
						} else {
							text = 'color-stop';
						}

						if (param.is('Keyword')) {
							newArgs.push(text + '(' + param + ')');
						} else {
							newArgs.push(text + '(' + param[0] + param[1] + ')');
						}
					});

					//Apply the changes
					fn.name = '-webkit-gradient';
					fn.content = newArgs;
				});
			}
		}
	}
];

function fixDirection (direction) {
	switch (direction.toString()) {
		case 'to top':
			return 'bottom';

		case 'to bottom':
			return 'top';

		case 'to left':
			return 'right';

		case 'to right':
			return 'left';

		default:
			return direction;
	}
}

},{}],"stylecow-plugin-mask":[function(require,module,exports){
module.exports = {
	disable: {
		chrome: false,
		safari: false,
		android: false,
		ios: false
	},
	Declaration: function (declaration) {
		if (declaration.is(null, /^mask/)) {
			declaration.cloneBefore().name = '-webkit-' + declaration.name;
		}
	}
};

},{}],"stylecow-plugin-matches":[function(require,module,exports){
module.exports = function (stylecow) {
	return {
		"Function": {
			":matches": function (fn) {
				var selector = fn.ancestor('Selector');
				var value = selector.name;
				var search = fn.toString();

				fn.content.forEach(function (replace) {
					selector.insertBefore(stylecow.Selector.create(value.replace(search, replace)));
				});

				selector.remove();
			}
		}
	}
};

},{}],"stylecow-plugin-min-height":[function(require,module,exports){
module.exports = {
	disable: {
		explorer: 7.0
	},
	Declaration: {
		'min-height': function (declaration) {
			declaration.insertBefore('_height:' + declaration.value);
		}
	}
};

},{}],"stylecow-plugin-nested-rules":[function(require,module,exports){
module.exports = function (stylecow) {
	return {
		Rule: function (rule) {
			var ruleSelectors = rule.children('Selector');
			var index = rule.index();

			rule.children('Rule').forEach(function (child, i) {
				child.children('Selector').forEach(function (childSelector) {
					var space = ' ';
					var prepend = false;

					if (childSelector.name[0] === '&') {
						childSelector[0].name = childSelector[0].name.substr(1);
						space = '';

						if (/^\w/.test(childSelector[0].name)) {
							prepend = true;
						}
					}

					ruleSelectors.forEach(function (ruleSelector) {
						var code;

						if (prepend) {
							var content = ruleSelector.content;

							code = content.slice(0, -1);
							code.push(childSelector[0].name);
							code.push(content.slice(-1));
							code = code.concat(childSelector.slice(1)).join('');
						} else {
							code = ruleSelector.name + space + childSelector.name;
						}

						child.add(stylecow.Selector.create(code));
					});

					childSelector.detach();
				});

				rule.parent.add(child, index + i, true);
			});

			if (rule.children('Selector').length === rule.length) {
				rule.remove();
			}
		}
	}
};

},{}],"stylecow-plugin-object":[function(require,module,exports){
module.exports = {
	disable: {
		opera: 15.0
	},
	Declaration: {
		"object-fit": function (declaration) {
			declaration.cloneBefore().name = '-o-object-fit';
		},
		"object-position": function (declaration) {
			declaration.cloneBefore().name = '-o-object-position';
		}
	}
};

},{}],"stylecow-plugin-opacity":[function(require,module,exports){
module.exports = {
	disable: {
		explorer: 9.0
	},
	Declaration: {
		opacity: function (declaration) {
			var rule = declaration.ancestor('Rule');

			if (rule) {
				rule.addOldMsFilter('alpha(opacity=' + (parseFloat(declaration.value, 10) * 100) + ')');
			}
		}
	}
};

},{}],"stylecow-plugin-pseudoelements":[function(require,module,exports){
module.exports = [

	/* Convert two-colon pseudoelements to one-colon for explorer < 9 */
	{
		disable: {
			explorer: 9.0
		},
		Keyword: {
			"::after": function (keyword) {
				keyword.name = ':after';
			},
			"::before": function (keyword) {
				keyword.name = ':before';
			},
			"::first-line": function (keyword) {
				keyword.name = ':first-line';
			},
			"::first-letter": function (keyword) {
				keyword.name = ':first-letter';
			}
		}
	},

	// Add -moz- vendor prefix in ::input-placeholder for Firefox <= 18
	{
		disable: {
			firefox: 19.0
		},
		RuleBefore: function (rule) {
			if (rule.has('Keyword', '::input-placeholder')) {
				rule.cloneBefore().search('Keyword', '::input-placeholder').forEach(function (keyword) {
					keyword.name = ':-moz-placeholder';
				});
			}
		}
	},

	// Add -moz- vendor prefix in ::input-placeholder for Firefox > 18 and ::selection
	{
		disable: {
			firefox: false
		},
		RuleBefore: function (rule) {
			if (rule.has('Keyword', ['::input-placeholder', '::selection'])) {
				var clone = rule.cloneBefore();

				clone.search('Keyword', ['::input-placeholder', '::selection']).forEach(function (keyword) {
					keyword.name = (keyword.name === '::input-placeholder') ? '::-moz-placeholder' : '::-moz-selection';
				});
			}
		}
	},

	// Add -webkit- vendor prefix in ::input-placeholder
	{
		disable: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		RuleBefore: function (rule) {
			if (rule.has('Keyword', '::input-placeholder')) {
				rule.cloneBefore().search('Keyword', '::input-placeholder').forEach(function (keyword) {
					keyword.name = '::-webkit-input-placeholder';
				});
			}
		}
	},

	// Add -ms- vendor prefix in ::input-placeholder
	{
		disable: {
			explorer: false
		},
		RuleBefore: function (rule) {
			if (rule.has('Keyword', '::input-placeholder')) {
				rule.cloneBefore().search('Keyword', '::input-placeholder').forEach(function (keyword) {
					keyword.name = ':-ms-input-placeholder';
				});
			}
		}
	}
];

},{}],"stylecow-plugin-region":[function(require,module,exports){
module.exports = [

	// Adds -webkit- vendor prefix
	{
		disable: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		Declaration: function (declaration) {
			if (declaration.is(null, 'region-fragment')) {
				return declaration.cloneBefore().name = '-webkit-region-fragment';
			}

			if (declaration.is(null, /^flow/)) {
				return declaration.cloneBefore().name = '-webkit-' + declaration.name;
			}
		}
	},

	// Adds -ms- vendor prefix
	{
		disable: {
			explorer: false
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^flow/)) {
				return declaration.cloneBefore().name = '-ms-' + declaration.name;
			}
		}
	}
];

},{}],"stylecow-plugin-rem":[function(require,module,exports){
module.exports = {
	disable: {
		firefox: 3.6,
		explorer: 9.0,
		safari: 5.0,
		opera: 11.6,
		ios: 4.0
	},

	//Set the default value of a rem (16px)
	RootBefore: function (root) {
		root.setData('rem', 16);
	},

	//Changes the default value on :root or html selectors
	RuleBefore: function (rule) {
		if (rule.hasChild('Selector', [':root', 'html'])) {
			rule.children('Declaration', 'font-size').forEach(function (declaration) {
				rule.ancestor('Root').setData('rem', toPixels(declaration.value));
			});
		}
	},

	//Add the fallback
	Declaration: function (declaration) {
		var value = declaration.value;

		if (value.indexOf('rem') === -1) {
			return false;
		}

		declaration.cloneBefore().value = value.replace(/([0-9\.]+)rem/, function (match) {
			if (match[0] === '.') {
				match = '0' + match;
			}

			return (declaration.getData('rem') * parseFloat(match, 10)) + 'px';
		});
	}
};

function toPixels (value) {
	if (value[0] === '.') {
		value = '0' + value;
	}

	if (value.indexOf('px') !== -1) {
		return parseInt(value, 10);
	}

	if (value.indexOf('em') !== -1) {
		return parseFloat(value, 10) * 16;
	}

	if (value.indexOf('pt') !== -1) {
		return parseFloat(value, 10) * 14;
	}

	if (value.indexOf('%') !== -1) {
		return parseFloat(value, 10)/100 * 16;
	}

	return 16;
};

},{}],"stylecow-plugin-sizing":[function(require,module,exports){
module.exports = [

	//Firefox supports "-moz-available" property rather than "-moz-fill-available"',
	{
		disable: {
			firefox: false
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^(min-|max-)?(width|height)$/, 'fill-available')) {
				declaration.cloneBefore().value = '-moz-available';
			}
		}
	},

	//Adds -moz- vendor prefix to max|min|fit-content
	{
		disable: { firefox: false },
		Declaration: function (declaration) {
			if (declaration.is(null, /^(min-|max-)?(width|height)$/, ['max-content', 'min-content', 'fit-content'])) {
				declaration.cloneBefore().value = '-moz-' + declaration.value;
			}
		}
	},

	//Adds -webkit- vendor prefixes
	{
		disable: {
			chrome: false,
			safari: false,
			opera: false,
			android: false,
			ios: false
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^(min-|max-)?(width|height)$/, ['fill-available', 'max-content', 'min-content', 'fit-content'])) {
				declaration.cloneBefore().value = '-webkit-' + declaration.value;
			}
		}
	}
];

},{}],"stylecow-plugin-source-comment":[function(require,module,exports){
module.exports = function (stylecow) {
	return {
		Rule: function (rule) {
			var comment = stylecow.Comment.create('/* !' + rule.getData('sourceFile') + ':' + rule.getData('sourceLine') + '*/');

			rule.insertBefore(comment);
		}
	}
};

},{}],"stylecow-plugin-sticky":[function(require,module,exports){
module.exports = {
	disable: {
		chrome: false,
		safari: false,
		android: false,
		ios: false
	},
	Declaration: {
		position: function (declaration) {
			if (declaration.value === 'sticky') {
				declaration.insertBefore('position: -webkit-sticky');
			}
		}
	}
};

},{}],"stylecow-plugin-transform":[function(require,module,exports){
module.exports = [

	//Add -moz- vendor prefix
	{
		disable: {
			firefox: 16.0
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^(transform.*|perspective.*|backface-visibility)$/)) {
				declaration.cloneBefore().name = '-moz-' + declaration.name;
			}
		}
	},

	//Add -webkit- vendor prefix
	{
		disable: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^(transform.*|perspective.*|backface-visibility)$/)) {
				declaration.cloneBefore().name = '-webkit-' + declaration.name;
			}
		}
	},

	//Add -o- vendor prefix
	{
		disable: { opera:
			12.1
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^transform/)) {
				declaration.cloneBefore().name = '-o-' + declaration.name;
			}
		}
	},

	//Add -ms- vendor prefix
	{
		disable: {
			explorer: 10.0
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^transform/)) {
				declaration.cloneBefore().name = '-ms-' + declaration.name;
			}
		}
	}
];

},{}],"stylecow-plugin-transition":[function(require,module,exports){
module.exports = [

	// Adds -moz- vendor prefix
	{
		disable: {
			firefox: 16.0
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^transition/) && !declaration.has(null, null, null, true)) {
				declaration.cloneBefore().name = '-moz-' + declaration.name;
			}
		}
	},

	// Adds -webkit- vendor prefix
	{
		disable: {
			chrome: 26.0,
			safari: 6.1,
			android: 4.4
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^transition/) && !declaration.has(null, null, null, true)) {
				declaration.cloneBefore().name = '-webkit-' + declaration.name;
			}
		}
	},

	// Adds -o- vendor prefix
	{
		disable: {
			opera: 12.1
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^transition/) && !declaration.has(null, null, null, true)) {
				declaration.cloneBefore().name = '-o-' + declaration.name;
			}
		}
	},

	// Adds -moz- vendor prefix to transition-property: transform|transform-origin
	{
		disable: {
			firefox: 16.0
		},
		Declaration: function (declaration) {
			if (declaration.is(null, ['-moz-transition', '-moz-transition-property'])) {
				declaration.search('Keyword', ['transform', 'transform-origin']).forEach(function (keyword) {
					keyword.name = '-moz-' + keyword.name;
				});
			}
		}
	},

	// Adds -webkit- vendor prefix to transition-property: transform|transform-origin
	{
		disable: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		Declaration: function (declaration) {
			if (declaration.is(null, ['-webkit-transition', '-webkit-transition-property'])) {
				declaration.search('Keyword', ['transform', 'transform-origin']).forEach(function (keyword) {
					keyword.name = '-webkit-' + keyword.name;
				});
			}
		}
	},

	// Adds -o- vendor prefix to transition-property: transform|transform-origin
	{
		disable: {
			opera: 12.1
		},
		Declaration: function (declaration) {
			if (declaration.is(null, ['-o-transition', '-o-transition-property'])) {
				declaration.search('Keyword', ['transform', 'transform-origin']).forEach(function (keyword) {
					keyword.name = '-o-' + keyword.name;
				});
			}
		}
	},

	// Adds -ms- vendor prefix to transition-property: transform|transform-origin
	{
		disable: {
			explorer: 10.0
		},
		Declaration: function (declaration) {
			if (declaration.is(null, ['transition', 'transition-property']) && declaration.has('Keyword', ['transform', 'transform-origin'])) {
				declaration.cloneBefore().search('Keyword', ['transform', 'transform-origin']).forEach(function (keyword) {
					keyword.name = '-ms-' + keyword.name;
				});
			}
		}
	}
];

},{}],"stylecow-plugin-type":[function(require,module,exports){
module.exports = [

	// Adds -moz- vendor prefix
	{
		disable: {
			firefox: false
		},
		Declaration: {
			"text-align-last": function (declaration) {
				declaration.cloneBefore().name = '-moz-text-align-last';
			},
			"font-feature-settings": function (declaration) {
				declaration.cloneBefore().name = '-moz-font-feature-settings';
			},
			"hyphens": function (declaration) {
				declaration.cloneBefore().name = '-moz-hyphens';
			},
			"tab-size": function (declaration) {
				declaration.cloneBefore().name = '-moz-tab-size';
			}
		}
	},

	// Adds -webkit- vendor prefix
	{
		disable: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		Declaration: {
			"font-feature-settings": function (declaration) {
				declaration.cloneBefore().name = '-webkit-font-feature-settings';
			},
			"text-size-adjust": function (declaration) {
				declaration.cloneBefore().name = '-webkit-text-size-adjust';
			},
			"hyphens": function (declaration) {
				declaration.cloneBefore().name = '-webkit-hyphens';
			}
		}
	},

	// Adds -ms- vendor prefix to text-size-adjust
	{
		disable: {
			explorer: false
		},
		Declaration: {
			"text-size-adjust": function (declaration) {
				declaration.cloneBefore().name = '-ms-text-size-adjust';
			},
			"hyphens": function (declaration) {
				declaration.cloneBefore().name = '-ms-hyphens';
			}
		}
	},

	// Adds -o- vendor prefix to text-overflow
	{
		disable: {
			opera: 11.0
		},
		Declaration: {
			"text-overflow": function (declaration) {
				declaration.cloneBefore().name = '-o-text-overflow';
			}
		}
	},

	// Adds -o- vendor prefix to tab-size
	{
		disable: {
			opera: 15.0
		},
		Declaration: {
			"tab-size": function (declaration) {
				declaration.cloneBefore().name = '-o-tab-size';
			}
		}
	}
];

},{}],"stylecow-plugin-user-select":[function(require,module,exports){
module.exports = [

	// Adds -moz- vendor prefix
	{
		disable: {
			firefox: false
		},
		Declaration: {
			"user-select": function (declaration) {
				declaration.cloneBefore().name = '-moz-user-select';
			}
		}
	},

	// Adds -webkit- vendor prefix
	{
		disable: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		Declaration: {
			"user-select": function (declaration) {
				declaration.cloneBefore().name = '-webkit-user-select';
			}
		}
	},

	// Adds -ms- vendor prefix
	{
		disable: {
			explorer: false
		},
		Declaration: {
			"user-select": function (declaration) {
				declaration.cloneBefore().name = '-ms-user-select';
			}
		}
	}
];
},{}],"stylecow-plugin-variables":[function(require,module,exports){
module.exports = {

	//Use var() function
	"Function": {
		var: function (fn) {
			var arguments = fn.content;
			var value = fn.ancestor('Rule').getData(arguments[0]) || arguments[1];

			if (value) {
				fn.replaceWith(value);
			}
		}
	},

	//Save new --variables
	Declaration: function (declaration) {
		if (declaration.name.indexOf('--') === 0) {
			var rule = declaration.ancestor('Rule');

			if (rule.hasChild('Selector', [':root', 'html'])) {
				rule.ancestor('Root').setData(declaration.name, declaration.value);
			} else {
				rule.setData(declaration.name, declaration.value);
			}

			declaration.remove();
		}
	}
};

},{}],"stylecow-plugin-vmin":[function(require,module,exports){
module.exports = {
	disable: {
		explorer: 10.0
	},
	Declaration: function (declaration) {
		if (declaration.value.indexOf('vmin') !== -1) {
			var clone = declaration.cloneBefore();

			clone.search('Keyword', /([0-9\.]+)vmin/).forEach(function (keyword) {
				keyword.name = keyword.name.slice(0, -2);
			});
			clone.vendor = 'ms';
		}
	}
};

},{}]},{},[]);
