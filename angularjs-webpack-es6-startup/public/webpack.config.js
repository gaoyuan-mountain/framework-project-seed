var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	entry: {
		intro: path.resolve('app', 'intro', 'app.js'),
		todo: path.resolve('app', 'todo', 'app.js')
	},
	output: {
		path: path.resolve('../dist'),
		filename: '[name].bundle.js',
		hash: true
	},
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel', include: path.resolve('app')},
			{test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap')},
			{test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')},
			{test: /\.(png|jpg)$/, loader: 'url?limit=32768'},
			{test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff"},
      		{test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"},
			{test: /\.html$/, loader: 'ngtemplate!html'}
		]
	},
	plugins: [
		commonsPlugin,
        new ExtractTextPlugin('[name].css'),
		new HtmlWebpackPlugin({
			filename: 'intro.html',
			template: path.resolve('app', 'intro.html'),
			inject: 'body',
			chunks: ['common.js', 'intro']
		}),
		new HtmlWebpackPlugin({
			filename: 'todo.html',
			template: path.resolve('app', 'todo.html'),
			inject: 'body',
			chunks: ['common.js', 'todo']
		})
    ],
	devtool: 'source-map'
}