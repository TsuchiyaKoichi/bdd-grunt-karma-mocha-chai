(function() {
	describe('nsのテスト', function() {
		it('aは10である', function() {
			expect(ns.a).to.equal(10);
		});

		it('bは20である', function() {
			expect(ns.b).to.equal(20);
		});
	});
})();