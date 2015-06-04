(function(exports){

	'use strict';

	// nsオブジェクトを作成
	var ns = exports.ns || {};

	function Game() {

	}
	Game.prototype.waitOneHour = function(date) {
		this.startDate = date;
	};
	Game.prototype.canProceedNextStage = function() {

		// 現在時刻を取得
		var now = new Date();

		// 1時間以上経過していたらtrueを返す
		if((now.getTime() - this.startDate.getTime()) >= 1000 * 60 * 60 * 1) {
			return true;
		}

		return false;
	};

	ns.Game = Game;
	exports.ns = ns;
})(this);