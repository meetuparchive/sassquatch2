module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-hologram');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
				"docs/templates/css/sassquatch.css": "sass/sassquatch.scss"
				}
			}
		},
		hologram: {
			generate: {
				options: {
					config: 'docs/config.yml'
				}
			}
		}
	});

	grunt.registerTask('default', ['sass', 'hologram']);
};
