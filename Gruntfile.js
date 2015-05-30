module.exports = function(grunt) {

	grunt.initConfig({
		karma: {
			options: {
				configFile: 'karma.conf.js'
			},
			single: {
				singleRun: true,
				browsers: ['PhantomJS']
			},
			auto: {
				singleRun: false
			}
		}
	});

	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('default', []);
	grunt.registerTask('autotest', ['karma:auto']);
	grunt.registerTask('singletest', ['karma:single']);
};