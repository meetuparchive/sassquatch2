module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-sassdoc');
	grunt.loadNpmTasks('grunt-gh-pages');
	grunt.loadNpmTasks('grunt-wiredep');

	grunt.initConfig({
		bower: grunt.file.readJSON('bower.json'),
		'sass': {
			dist: {
				files: {
					"sass/julep.css": "sass/julep.scss"
				}
			}
		},
		'sassdoc': {
			default: {
				src: 'sass/**/*.scss'
			}
		},
		'clean': {
			css: ["sass/*.css", "sass/*.css.map", "!sass/*.scss"]
		},
		'wiredep': {
			'sass': {
				src: ["sass/julep.scss"]
			}
		},
		'gh-pages': {
			options: {
				base: 'sassdoc/'
			},
			src: ['**']
		}
	});

	grunt.registerTask('compile', ['clean', 'wiredep', 'sass', 'sassdoc']);
	grunt.registerTask('default', ['compile', 'clean']);
	grunt.registerTask('ghpages', ['compile', 'gh-pages', 'clean']);
};
