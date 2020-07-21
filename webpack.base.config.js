const path = require('path') // to set absolute path at output.path

// to avoid error saying "Module not found: Error: Can't resolve ..."
const nodeExternals = require("webpack-node-externals")

module.exports = {
	target: "node",
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader'
			}/*,
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					compilerOptions: {
						preserveWhitespace: false
					}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: '[name].[ext]?[hash]'
				}
			},
			{
				test: /\.styl(us)?$/,
				use: isProd
					? ExtractTextPlugin.extract({
						use: [
							{
								loader: 'css-loader',
								options: { minimize: true }
							},
							'stylus-loader'
						],
						fallback: 'vue-style-loader'
					})
					: ['vue-style-loader', 'css-loader', 'stylus-loader']
			}*/
		]
	},
	resolve: {
		extensions: [
			'.ts'
		]
	},/*
	plugins: isProd
		? [
			new VueLoaderPlugin(),
			new webpack.optimize.UglifyJsPlugin({
				compress: { warnings: false }
			}),
			new webpack.optimize.ModuleConcatenationPlugin(),
			new ExtractTextPlugin({
				filename: 'common.[chunkhash].css'
			})
		]
		: [
			new VueLoaderPlugin(),
			new FriendlyErrorsPlugin()
		],*/
	output: {
		filename: "[name].js",
		path: path.join(__dirname, 'dist')
	},
	// externals: nodeExternals()
}
