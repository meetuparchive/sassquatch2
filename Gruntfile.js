module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-shell');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
				"dist/sassquatch.css": "sass/sassquatch.scss"
				}
			}
		}
	});

	grunt.registerTask('default', ['sass']);
};
