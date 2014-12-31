module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-hologram');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
				"dist/sassquatch.css": "sass/sassquatch.scss"
				}
			}
		},
		hologram: {
			generate: {
				options: {
					config: 'hologram_config.yml'
				}
			}
		}
	});

	grunt.registerTask('default', ['sass', 'hologram']);
};
