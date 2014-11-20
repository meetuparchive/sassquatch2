module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					"dist/sassquatch.css": "sass/base.scss"
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['sass']);
};
