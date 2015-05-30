(function(exports) {

	'use strict';

	var ns = exports.ns || {};

	ns.b = 20;

	if(ns.b > 10) {
		ns.c = 0;
	} else {
		ns.c = ns.b + 30;
	}

	exports.ns = ns;

})(this);