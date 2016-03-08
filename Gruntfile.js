var Seldon = require('seldon');

module.exports = function(grunt) {

	// TODO: for a cli, see https://raw.githubusercontent.com/jchild3rs/grunt-hologram/master/tasks/hologram.js
	grunt.registerMultiTask('seldon', 'Generate Seldon CSS documentation', function () {
		var done = this.async();
		var options = this.options();
		var configPath;

		// Null check config option
		if (options.config) {
			configPath = options.config;
		} else {
			return grunt.warn(
				'\nYou must provide a path to your seldon config file.\n'
			);
		}

		// Make sure config file exists
		if (!grunt.file.exists(configPath)) {
			return grunt.warn('Config file "' + configPath + '" not found.');
		}

		// Run seldon
		Seldon.compile(configPath);
		done();
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
				config: DIR_DOC_SRC + 'config.json'
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
