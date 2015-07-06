module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-sassdoc');
	grunt.loadNpmTasks('grunt-gh-pages');

	grunt.initConfig({
		bower: grunt.file.readJSON('bower.json'),
		'sass': {
			dist: {
				files: {
					"scss/julep.css": "scss/julep.scss"
				}
			}
		},
		'sassdoc': {
			default: {
				src: 'scss/**/*.scss'
			}
		},
		'clean': {
			css: ["scss/*.css", "scss/*.css.map", "!scss/*.scss"]
		},
		'gh-pages': {
			options: {
				base: 'sassdoc/'
			},
			src: ['**']
		}
	});

	grunt.registerTask('default', ['sass', 'sassdoc', 'clean']);
	grunt.registerTask('ghpages', ['sass', 'sassdoc', 'gh-pages', 'clean']);
};
