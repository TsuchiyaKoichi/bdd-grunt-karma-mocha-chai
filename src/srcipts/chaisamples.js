(function(exports) {

	'use strict';

	var ns = exports.ns || {};

	ns.foo = 'bar';
	ns.bevarages = { tea: ['chai', 'matcha', 'oolong']};

	exports.ns = ns;

})(this);