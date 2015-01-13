module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-hologram');
	grunt.loadNpmTasks('grunt-gh-pages');

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
					config: 'docs/config.yml'
				}
			}
		},
		'gh-pages': {
			options: {
				base: 'docs/build/'
			},
			src: ['**']
		}
	});

	grunt.registerTask('default', ['sass', 'hologram']);
	grunt.registerTask('ghpages', ['sass', 'hologram', 'gh-pages']);
};
