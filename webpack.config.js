/**
 * Created by Rafael on 3/8/2017.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: `${__dirname}/app/index.html`,
	filename: 'index.html',
	inject: 'body',
});

module.exports = {
	entry: ['./app/index.jsx'],
	output: {
		filename: 'index_bundle.js',
		path: `${__dirname}/dist`,
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
		],
	},
	plugins: [HtmlWebpackPluginConfig],
};
