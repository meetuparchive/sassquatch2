module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-hologram');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-preprocess');
	grunt.loadNpmTasks('grunt-exec');

	var DIR_DOC_SRC = 'docs/',
		DIR_BUILD = DIR_DOC_SRC + 'build/';

	grunt.initConfig({
		bower: grunt.file.readJSON('bower.json'),
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
		'clean': [DIR_BUILD],
		'preprocess': {
			inline: {
				src: [ 'docs/build/*.html' ],
				options: {
					inline: true,
					context: {
						DEBUG: false,
						'VERSION': '<%= bower.version %>'
					}
				}
			}
		},
		"exec": {
			ghpages: './update_docs.sh'
		}
	});

	grunt.registerTask('default', ['clean', 'sass', 'hologram', 'preprocess']);
	grunt.registerTask('ghpages', ['exec:ghpages']);
};
