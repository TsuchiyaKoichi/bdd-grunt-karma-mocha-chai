(function() {

	describe('nsのテスト', function() {
		it('aは10である', function() {
			expect(ns.a).to.equal(10);
		});

		it('bは20である', function() {
			expect(ns.b).to.equal(20);
		});

		// Sinon.jsのFakeTimerの使用方法
		describe('Gameクラスのテスト', function() {

			// 2015/1/1でFakeTimerを作成する
			var clock = sinon.useFakeTimers((new Date(2015, 0, 1)).getTime());
			
			// 現在のFakeTimer時刻をセットする
			var game = new ns.Game();
			game.waitOneHour(new Date());

			it('exports.nsが未定義の時は、空のオブジェクトをセットする', function() {
				//module('../src/srcipts/game.js')(undefine);
			});

			// 時間は進んでいないので先に進むことはできないことをテスト
			it('次のステージに進めない', function() {
				expect(game.canProceedNextStage()).to.equal(false);
			});

			// FakeTimerを1時間進めて、次のステージに進むことができることをテスト
			it('次のステージに進むことができる', function() {

				// FakeTimerを1時間進める(※itの外に書くと並列処理されて上のテストが失敗してしまった)
				clock.tick(1000 * 60 * 60 * 1);
				expect(game.canProceedNextStage()).to.equal(true);
			});

			// テストが終わったらFakeTimerを解除しておく
			after(function() {
				clock.restore();
			});
		});

		// chaiの記述方法確認
		describe('chaiの記述方法確認', function() {

			it('fooはstring型である', function() {
				expect(ns.foo).to.be.a('string');
			});

			it('fooはbarである', function() {
				expect(ns.foo).to.equal('bar');
			});

			it('fooは3文字である', function() {
				expect(ns.foo).to.have.length(3);
			});

			it('bevaragesはteaという要素を持ち、その要素の長さは3である', function() {
				expect(ns.bevarages).to.have.property('tea').with.length(3);
			});
		});
	});
})();