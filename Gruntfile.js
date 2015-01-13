module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-hologram');
	grunt.loadNpmTasks('grunt-shell');

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
		},
		shell: {
			options: {
				stderr: false
			},
			target: {
				command: './ghpages.sh'
			}
		}
	});

	grunt.registerTask('default', ['sass', 'hologram']);
	grunt.registerTask('ghpages', ['sass', 'hologram', 'shell']);
};
