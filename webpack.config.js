/**
 * Created by Rafael on 3/8/2017.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: `${__dirname}/app/index.html`,
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./app/index.jsx'
	],
	output: {
		filename: 'index_bundle.js',
		path: `${__dirname}/dist`,
		publicPath: '/'
	},
	module: {
		rules: [
			{ test: /\.jsx?$/, exclude: /node_modules/, use: ['babel-loader'] },
			{
				test: /\.scss$/,
				use: [
				{ loader: 'style-loader' },
				{
					loader: 'css-loader'
				},
				{
					loader: 'sass-loader',
					options: { includePaths: ['./node_modules'], outputStyle: 'compressed' }
				}
			] }
		],
	},
	devtool: 'inline-source-map',
	resolve: {
		modules: [
			`${__dirname}/app`,
			'node_modules'
		],
		extensions: ['.js', '.jsx', '.css', '.scss', '.json'],
		alias: {
			assets: `${__dirname}/assets`
		}
	},
	plugins: [
		HtmlWebpackPluginConfig,
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	],
	devServer: {
		hot: true,
		contentBase: `${__dirname}/dist`,
		publicPath: '/'
	}
};
