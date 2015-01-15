module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-hologram');
	grunt.loadNpmTasks('grunt-gh-pages');
	grunt.loadNpmTasks('grunt-contrib-clean');

	var DIR_DOC_SRC = 'docs/',
		DIR_BUILD = DIR_DOC_SRC + 'build/';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		'sass': {
			dist: {
				files: {
					"docs/templates/css/sassquatch.css": "sass/sassquatch.scss"
				}
			}
		},
		'hologram': {
			generate: {
				options: {
					config: DIR_DOC_SRC+'/config.yml'
				}
			}
		},
		'gh-pages': {
			options: {
				base: DIR_BUILD
			},
			src: ['**']
		},
		'clean': [DIR_BUILD]
	});

	grunt.registerTask('default', ['clean', 'sass', 'hologram']);
	grunt.registerTask('ghpages', ['default', 'gh-pages']);
};
