module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-hologram');
	grunt.loadNpmTasks('grunt-gh-pages');
	grunt.loadNpmTasks('grunt-text-replace');

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
					config: './docs/config.yml'
				}
			}
		},
		'gh-pages': {
			options: {
				base: './docs/build/'
			},
			src: ['**']
		},
		'replace': {
			version: {
				src: ['./docs/build/*.html'],
				overwrite: true,
				replacements: [{
					from: '__VERSION__',
					to: 'nope'
				}]
			}
		},
		pkg: grunt.file.readJSON('bower.json')
	});

	grunt.registerTask('default', ['sass', 'hologram', 'replace:version']);
	grunt.registerTask('ghpages', ['default', 'gh-pages']);
};
