require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./js/main":[function(require,module,exports){
var stylecow = require('stylecow');

module.exports = function (code, plugins, support) {
	stylecow.setConfig({
		support: support,
		plugins: plugins,
	});

	return stylecow.convert(code).toString();
}

},{"stylecow":47}],1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
module.exports = function (stylecow) {
	
	//Normalizes the calc function

	stylecow.addTask({
		"Function": {
			calc: function (fn) {
				var keyword = fn[0];
				keyword.name = keyword.name.replace(/([\w\%])\s*([\+\-])\s*/g, '$1 $2 ');
			}
		}
	});
};

},{}],4:[function(require,module,exports){
module.exports = function (stylecow) {
	
	//Add the old syntax of rect()

	stylecow.addTask({
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
	});
};

},{}],5:[function(require,module,exports){
module.exports = function (stylecow) {
	
	//Adds support of break-before, break-after, break-inside in webkit using the non-standard -webkit-column-break-

	stylecow.addTask({
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
	});
};

},{}],6:[function(require,module,exports){
module.exports = function (stylecow) {
	
	//Fix the double margin bug in ie6 on float block elements

	stylecow.addTask({
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
	});
};

},{}],7:[function(require,module,exports){
module.exports = function (stylecow) {
	
	//Adds support in explorer < 8

	stylecow.addTask({
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
	});
};

},{}],8:[function(require,module,exports){
module.exports = function (stylecow) {
	
	//Adds support in explorer < 8

	stylecow.addTask({
		disable: {
			explorer: 7.0
		},
		Declaration: {
			'min-height': function (declaration) {
				declaration.insertBefore('_height:' + declaration.value);
			}
		}
	});
};

},{}],9:[function(require,module,exports){
module.exports = function (stylecow) {
	
	//Adds support in explorer < 9

	stylecow.addTask({
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
	});
};

},{}],10:[function(require,module,exports){
module.exports = function (stylecow) {
	
	//Convert two-colon pseudoelements to one-colon for explorer < 9

	stylecow.addTask({
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
	});
};

},{}],11:[function(require,module,exports){
module.exports = function (stylecow) {
	
	//add ie9 fallback that support vm instead vmin

	stylecow.addTask({
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
	});
};

},{}],12:[function(require,module,exports){
module.exports = function (stylecow) {
	stylecow.addTask([
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
	]);
};

},{}],13:[function(require,module,exports){
module.exports = function (stylecow) {
	stylecow.addTask([
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
	]);
};

},{}],14:[function(require,module,exports){
module.exports = function (stylecow) {
	stylecow.addTask([
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
	]);
};

},{}],15:[function(require,module,exports){
module.exports = function (stylecow) {
	stylecow.addTask([
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
	]);
};

},{}],16:[function(require,module,exports){
module.exports = function (stylecow) {
	stylecow.addTask([
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
	]);
};

},{}],17:[function(require,module,exports){
module.exports = function (stylecow) {
	stylecow.addTask([
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
	]);
};

},{}],18:[function(require,module,exports){
module.exports = function (stylecow) {
	stylecow.addTask([
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
	]);
};

},{}],19:[function(require,module,exports){
module.exports = function (stylecow) {
	stylecow.addTask([
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
		}
	]);
};

},{}],20:[function(require,module,exports){
module.exports = function (stylecow) {
	stylecow.addTask([
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
	]);
};

},{}],21:[function(require,module,exports){
module.exports = function (stylecow) {
	
	//Adds -moz- vendor prefix

	stylecow.addTask({
		disable: {
			firefox: false
		},
		AtRule: {
			"document": function (atrule) {
				atrule.cloneBefore().name = '-moz-document';
			}
		}
	});
};

},{}],22:[function(require,module,exports){
module.exports = function (stylecow) {
	stylecow.addTask([
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
	]);
};

},{}],23:[function(require,module,exports){
module.exports = function (stylecow) {
	
	//Adds -ms- vendor prefix

	stylecow.addTask({
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
	});
};

},{}],24:[function(require,module,exports){
module.exports = function (stylecow) {
	
	//Adds -moz- vendor prefix

	stylecow.addTask({
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
	});
};

},{}],25:[function(require,module,exports){
module.exports = function (stylecow) {
	
	//Adds -webkit- vendor prefix

	stylecow.addTask({
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
	});
};

},{}],26:[function(require,module,exports){
module.exports = function (stylecow) {
	
	//Adds -o- vendor prefix

	stylecow.addTask({
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
	});
};

},{}],27:[function(require,module,exports){
module.exports = function (stylecow) {
	stylecow.addTask([
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
	]);
};

},{}],28:[function(require,module,exports){
module.exports = function (stylecow) {
	stylecow.addTask([
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
	]);
};

},{}],29:[function(require,module,exports){
module.exports = function (stylecow) {
	stylecow.addTask([
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
	]);
};

},{}],30:[function(require,module,exports){
module.exports = function (stylecow) {
	
	//Adds -webkit- vendor prefix

	stylecow.addTask({
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
	});
};

},{}],31:[function(require,module,exports){
module.exports = function (stylecow) {
	stylecow.addTask([
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
	]);
};

},{}],32:[function(require,module,exports){
module.exports = function (stylecow) {
	stylecow.addTask([
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
	]);
};

},{}],33:[function(require,module,exports){
module.exports = function (stylecow) {
	stylecow.addTask([
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
	]);
};

},{}],34:[function(require,module,exports){
module.exports = function (stylecow) {
	stylecow.addTask([
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
	]);
};

},{}],35:[function(require,module,exports){
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
				"firefox": 30.0,
				"chrome": 35.0,
				"safari": 6.0,
				"opera": 22.0,
				"android": 4.0,
				"ios": 6.0
			},
			plugins: []
		}
	};

})(require('./index'));

},{"./index":47}],36:[function(require,module,exports){
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
			value: function () {
				var code = stylecow.Rule.prototype.toCode.call(this);

				return code ? ('@' + this.name + ' ' + code) : '';
			}
		}
	});
})(require('../index'));

},{"../index":47}],37:[function(require,module,exports){
(function (stylecow) {

	stylecow.Base = Object.create(Array.prototype, {
		executeTasks: {
			value: function (tasks, vendor) {
				if (vendor) {
					if (this.vendor && this.vendor !== vendor) {
						return this.remove();
					}
				} else {
					vendor = this.vendor;
				}

				stylecow.utils.forEach(tasks[this.type + 'Before'], function (functions, name) {
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

					child.executeTasks(tasks, vendor);

					k = 0;
				}

				stylecow.utils.forEach(tasks[this.type], function (functions, name) {
					if ((name === '*') || (name === this.name)) {
						functions.forEach(function (fn) {
							fn(this);
						}, this);
					}
				}, this);

				this.executed = true;
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

		files: {
			get: function () {
				var files = {};

				this.search()
					.filter(function (child) {
						return (child._data && child._data['sourceFile']);
					})
					.map(function (child) {
						return child._data['sourceFile'];
					})
					.forEach(function (file) {
						files[file] = null;
					});

				return Object.getOwnPropertyNames(files);
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

})(require('../index'));

},{"../index":47}],38:[function(require,module,exports){
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
			value: function () {
				if (!this._text || stylecow.codeStyle.comments === 'none' || (stylecow.codeStyle.comments === 'important' && !this.important)) {
					return '';
				}

				return stylecow.codeStyle.commentStart + (this.important ? '! ' : '') + this._text + stylecow.codeStyle.commentEnd;
			}
		}
	});
})(require('../index'));

},{"../index":47}],39:[function(require,module,exports){
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
			value: function () {
				var value = this.map(function (child) {
					return child.toCode();
				}).join(stylecow.codeStyle.valueJoiner);

				if (this.name === '-ms-filter') {
					value = "'" + value + "'";
				}

				return this.name + stylecow.codeStyle.ruleColon + value + stylecow.codeStyle.ruleEnd;
			}
		}
	});
})(require('../index'));

},{"../index":47}],40:[function(require,module,exports){
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
			value: function () {
				return this.name + '(' + this.map(function (child) {
					return child.toCode();
				}).join(stylecow.codeStyle.argumentJoiner) + ')';
			}
		}
	});
})(require('../index'));

},{"../index":47}],41:[function(require,module,exports){
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
			value: function () {
				return this.toString() + stylecow.codeStyle.ruleEnd;
			}
		}
	});
})(require('../index'));

},{"../index":47}],42:[function(require,module,exports){
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

},{"../index":47}],43:[function(require,module,exports){
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
			value: function () {
				return this.map(function (child) {
					return child.toCode();
				}).filter(function (string) {
					return string ? true : false;
				}).join(stylecow.codeStyle.linebreak);
			}
		}
	});
})(require('../index'));

},{"../index":47}],44:[function(require,module,exports){
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
			value: function () {
				var declarations = [];
				var selectors = [];

				this.forEach(function (child) {
					var string = child.toCode();

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

				declarations = declarations.join(stylecow.codeStyle.linebreak);

				if (stylecow.codeStyle.indent) {
					declarations = stylecow.codeStyle.indent + declarations.replace(/\n/g, '\n' + stylecow.codeStyle.indent);
				}

				return selectors.join(stylecow.codeStyle.selectorJoiner) + stylecow.codeStyle.rulesetStart + declarations + stylecow.codeStyle.rulesetEnd;
			}
		}
	});
})(require('../index'));

},{"../index":47}],45:[function(require,module,exports){
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
			value: function () {
				return this.map(function (child) {
					return child.toCode();
				}).join('');
			}
		}
	});
})(require('../index'));

},{"../index":47}],46:[function(require,module,exports){
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

},{"../index":47}],47:[function(require,module,exports){
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
	stylecow.support = {};
	stylecow.tasks = {};
	stylecow.codeStyle = stylecow.config.codeStyles[stylecow.config.defaults.code];


	//Create from code string
	stylecow.create = function (code) {
		return stylecow.Root.create(code);
	};


	//Read a css file
	stylecow.createFromFile = function (file) {
		return stylecow.create(fs.readFileSync(file, 'utf8')).setData('sourceFile', file);
	};


	//Register new tasks
	stylecow.addTask = function (task) {
		if (task instanceof Array) {
			return task.forEach(stylecow.addTask);
		}

		if (stylecow.utils.needFix(stylecow.support, task.disable)) {
			var name, val, k;

			stylecow.utils.forEach(task, function (val, name) {
				if (name === 'disable') {
					return;
				}

				if (val instanceof Function) {
					val = {'*': val};
				}

				if (!stylecow.tasks[name]) {
					stylecow.tasks[name] = {};
				}

				stylecow.utils.forEach(val, function (v, k) {
					if (!stylecow.tasks[name][k]) {
						stylecow.tasks[name][k] = [];
					}

					stylecow.tasks[name][k].push(v);
				});
			});
		}
	};


	//Set configuration
	stylecow.setConfig = function (config) {
		stylecow.tasks = {};

		config.plugins.forEach(function (name) {
			require(stylecow.pluginPrefix + name)(stylecow);
		});

		stylecow.support = config.support;
		stylecow.codeStyle = stylecow.config.codeStyles[config.code];
	};


	//Convert a string
	stylecow.convert = function (code) {
		var css = stylecow.create(code);

		css.executeTasks(stylecow.tasks);

		return css;
	};


	//Convert from a file
	stylecow.convertFromFile = function (file) {
		var css = stylecow.createFromFile(file);

		css.executeTasks(stylecow.tasks);

		return css;
	};


})(require('./index'));

},{"./config":35,"./css/at-rule":36,"./css/base":37,"./css/comment":38,"./css/declaration":39,"./css/function":40,"./css/import":41,"./css/keyword":42,"./css/root":43,"./css/rule":44,"./css/selector":45,"./css/value":46,"./index":47,"./utils":48,"fs":1}],48:[function(require,module,exports){
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

		needFix: function (minSupport, disablePlugin) {
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

},{"./index":47}],"stylecow-plugin-color":[function(require,module,exports){
//http://dev.w3.org/csswg/css-color/

var color = require('stylecow-color');

module.exports = function (stylecow) {

	stylecow.addTask({

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
	});
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

},{"stylecow-color":2}],"stylecow-plugin-fixes":[function(require,module,exports){
module.exports = function (stylecow) {
	require('./src/calc')(stylecow);
	require('./src/clip')(stylecow);
	require('./src/column-break')(stylecow);
	require('./src/float')(stylecow);
	require('./src/inline-block')(stylecow);
	require('./src/min-height')(stylecow);
	require('./src/opacity')(stylecow);
	require('./src/pseudoelements')(stylecow);
	require('./src/vmin')(stylecow);
};

},{"./src/calc":3,"./src/clip":4,"./src/column-break":5,"./src/float":6,"./src/inline-block":7,"./src/min-height":8,"./src/opacity":9,"./src/pseudoelements":10,"./src/vmin":11}],"stylecow-plugin-flex":[function(require,module,exports){
module.exports = function (stylecow) {

	stylecow.addTask([
		
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
	]);
};

function alignmentValue (value) {
	if (value === 'flex-start') {
		return 'start';
	}

	if (value === 'flex-end') {
		return 'end';
	}

	return value;
}

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

module.exports = function (stylecow) {

	stylecow.addTask({
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
	});
};

},{}],"stylecow-plugin-linear-gradient":[function(require,module,exports){
module.exports = function (stylecow) {

	stylecow.addTask([

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
	]);
};

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

},{}],"stylecow-plugin-matches":[function(require,module,exports){
module.exports = function (stylecow) {

	stylecow.addTask({
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
	});
};

},{}],"stylecow-plugin-nested-rules":[function(require,module,exports){
module.exports = function (stylecow) {

	stylecow.addTask({
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
	});
};

},{}],"stylecow-plugin-prefixes":[function(require,module,exports){
module.exports = function (stylecow) {
	require('./src/animation')(stylecow);
	require('./src/appearance')(stylecow);
	require('./src/background')(stylecow);
	require('./src/border')(stylecow);
	require('./src/box-shadow')(stylecow);
	require('./src/box-sizing')(stylecow);
	require('./src/calc')(stylecow);
	require('./src/column')(stylecow);
	require('./src/cursor')(stylecow);
	require('./src/document')(stylecow);
	require('./src/fullscreen')(stylecow);
	require('./src/inline-block')(stylecow);
	require('./src/grid')(stylecow);
	require('./src/mask')(stylecow);
	require('./src/object')(stylecow);
	require('./src/pseudoelements')(stylecow);
	require('./src/region')(stylecow);
	require('./src/sizing')(stylecow);
	require('./src/sticky')(stylecow);
	require('./src/transform')(stylecow);
	require('./src/transition')(stylecow);
	require('./src/typography')(stylecow);
	require('./src/user-select')(stylecow);
};

},{"./src/animation":12,"./src/appearance":13,"./src/background":14,"./src/border":15,"./src/box-shadow":16,"./src/box-sizing":17,"./src/calc":18,"./src/column":19,"./src/cursor":20,"./src/document":21,"./src/fullscreen":22,"./src/grid":23,"./src/inline-block":24,"./src/mask":25,"./src/object":26,"./src/pseudoelements":27,"./src/region":28,"./src/sizing":29,"./src/sticky":30,"./src/transform":31,"./src/transition":32,"./src/typography":33,"./src/user-select":34}],"stylecow-plugin-rem":[function(require,module,exports){
module.exports = function (stylecow) {

	stylecow.addTask({
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
	});
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

},{}],"stylecow-plugin-variables":[function(require,module,exports){
module.exports = function (stylecow) {

	stylecow.addTask({
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
	});
};

},{}]},{},["./js/main"]);
