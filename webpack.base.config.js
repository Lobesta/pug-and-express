const path = require('path') // to set absolute path at output.path
const nodeExternals = require("webpack-node-externals") // to avoid error saying "Module not found: Error: Can't resolve ..."

const isDev = process.env.NODE_ENV === "development";

module.exports = {
	mode: isDev ? 'development' : "production",
	module: {
		rules: [
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
				test: /\.ts$/,
				use: 'ts-loader'
			},
			{
				test: /\.pug$/,
				use: 'pug-loader'
			}/*,
			{
				test: /\.sass$/,
				use: 'sass-loader'
			}*/
		]
	},
	resolve: {
		extensions: [
			'.ts', '.vue'
		]
	},
	output: {
		filename: "[name].js",
		path: path.join(__dirname, 'dist')
	}
}
