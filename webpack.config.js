var path = require('path');
var preprocess = require('preprocess');

var ExtractPlugin = require('extract-text-webpack-plugin');
var HologramPlugin = require('hologram-webpack-plugin');

var PATH_SRC = path.resolve(__dirname, 'docs');
var PATH_BUNDLE_DEST = path.resolve(__dirname, 'docs', 'templates', 'bundle');


module.exports = {
	module: {
		loaders: [
			{
				test: /\.scss$/,
				include: [PATH_SRC],
				loader: ExtractPlugin.extract("style-loader", "css-loader", "sass-loader")
			}
		]
	},

	debug: true,

	plugins: [
		new ExtractPlugin([PATH_BUNDLE_DEST, "/sassquatch.css"].join(''))
	],

	// webpack requires a js entry point
	// and bundle location
	entry: "./webpack.entry.js",
	output: {
		path: PATH_BUNDLE_DEST,
		filename: 'bundle.js'
	}
};
