var path = require('path');
var webpack = require('webpack');
var preprocess = require('preprocess');

var ExtractPlugin = require('extract-text-webpack-plugin');

var PATH_ENTRY = path.resolve(__dirname, 'sass', 'sassquatch.scss');
var PATH_BUNDLE_DEST = path.resolve(__dirname, 'docs', 'templates', 'bundle');

var sassLoader = ExtractPlugin.extract("style-loader", "css-loader!sass-loader");


module.exports = {
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: "style-loader!css-loader!sass-loader"
			}
		]
	},

	debug: true,

	/*
	 *plugins: [
	 *   new ExtractPlugin("sassquatch.css", {allChunks: false})
	 *],
	 */

	// webpack requires a js entry point
	// and bundle location
	entry: PATH_ENTRY,
	output: {
		path: PATH_BUNDLE_DEST
	}
};
