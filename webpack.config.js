const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = env => ({
	mode: env.mode,
	entry: {
		app: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],
		vendors: [
			'@babel/polyfill',
			'react-hot-loader/patch',
		],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[hash].js',
	},
	devtool: env.mode === 'development' ? 'inline-source-map' : '',
	devServer: {
		inline: true,
		contentBase: path.resolve(__dirname, 'dist'),
		host: '0.0.0.0',
		disableHostCheck: true,
		historyApiFallback: true,
		port: 3000,
		hot: true,
		compress: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: true,
							reloadAll: true,
						},
					},
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpg|svg|gif)/,
				loader: 'file-loader'
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
		alias: {
			"@root": path.resolve('src'),
			"@assets": path.resolve('src/Assets'),
			"@components": path.resolve('src/Components'),
			"@pages": path.resolve('src/Pages'),
			"@router": path.resolve('src/Router'),
			"@store": path.resolve('src/Store'),
			"@system": path.resolve('src/System'),
			"@templates": path.resolve('src/Templates'),
			"@utils": path.resolve('src/Utils')
		},
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'webpack-react-start-kit',
			template: './public/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(env.mode),
		}),
	],
	optimization: {
		minimizer: [new UglifyJsPlugin()],
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
	},
});
