(function(exports) {
	
	'use strict';
	
	// nsオブジェクトを作成
	var ns = exports.ns || {};

	// 変数aを宣言
	ns.a = 10;

	// nsオブジェクトをグローバル化
	exports.ns = ns;

})(this);