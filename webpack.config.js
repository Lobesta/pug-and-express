const path = require('path') // to set absolute path at output.path

// to avoid error saying "Module not found: Error: Can't resolve ..."
const nodeExternals = require("webpack-node-externals")

module.exports = {
	target: "node",
	mode: 'development',
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader'
			}
		]
	},
	resolve: {
		extensions: [
			'.ts'
		]
	},
	output: {
		filename: "serverBundle.js",
		path: path.join(__dirname, 'dist')
	},
	externals: nodeExternals()
}
