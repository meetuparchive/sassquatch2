'use strict';
var spawn = require('win-spawn');
var which = require('which');

module.exports = function (grunt) {

	grunt.registerMultiTask('hologram', 'Generate Hologram style guides with Grunt', function () {

		var done = this.async();
		var options = this.options();
		var configPath;
		var cmd = options.bin || 'seldon';

		try {
			grunt.file.isFile(cmd) || which.sync('seldon');
		} catch (err) {
			return grunt.warn(
				'npm module "seldon" not found'
			);
		}

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

		// Run hologram
		var cp = spawn(cmd, [configPath], {stdio: 'inherit'});

		cp.on('error', function (err) {
			done(err);
		});

		cp.on('close', function (code) {
			if (code > 0) {
				done(new Error('Exited with error code ' + code));
			} else {
				done();
			}
		});

	});

};
