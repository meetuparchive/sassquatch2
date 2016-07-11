var path = require('path');
var preprocess = require('preprocess');

var ExtractPlugin = require('extract-text-webpack-plugin');
var HologramPlugin = require('hologram-webpack-plugin');

var PATH_SRC = path.resolve(__dirname, 'docs');
var PATH_CSS_DEST = path.resolve(__dirname, 'docs', 'templates', 'css');
var PATH_DOCS = path.resolve(__dirname, 'build');


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

	plugins: [
		new ExtractPlugin([PATH_CSS_DEST, "sassquatch.css"].join(''))
	]
};
