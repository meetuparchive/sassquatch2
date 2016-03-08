var Seldon = require('seldon');

module.exports = function(grunt) {

	grunt.registerTask('seldon', "Compiles documentation", function() {
		if (arguments.length === 0) {
			grunt.log.writeln(this.name + ", no args");
		} else {
			Seldon.compile(this.options().configPath);
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-gh-pages');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-preprocess');

	var DIR_DOC_SRC = 'docs/',
		DIR_BUILD = DIR_DOC_SRC + 'build/';

	grunt.initConfig({
		bower: grunt.file.readJSON('bower.json'),
		'sass': {
			options: {
				precision: 3,
				sourceMap: false
			},
			dist: {
				files: {
					"docs/templates/css/sassquatch.css": "sass/sassquatch.scss"
				}
			}
		},
		'seldon': {
			options: {
				configPath: DIR_DOC_SRC + 'config.json'
			}
		},
		'gh-pages': {
			options: {
				base: DIR_BUILD
			},
			src: ['**']
		},
		'clean': {
			docs: [DIR_BUILD],
			css: [DIR_DOC_SRC + 'templates/css/sassquatch.css']
		},
		'wiredep': {
			'sass': {
				src: ["sass/_util.scss"]
			}
		},
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
		}
	});

	grunt.registerTask('default', ['clean', 'wiredep', 'sass', 'seldon', 'preprocess']);
	grunt.registerTask('ghpages', ['default', 'gh-pages']);
};
