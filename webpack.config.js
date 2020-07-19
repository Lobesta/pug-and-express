const path = require('path') // to set absolute path at output.path

// to avoid error saying "Module not found: Error: Can't resolve ..."
const fs = require('fs');
let nodeModules = {};
fs.readdirSync('node_modules')
	.filter(function (x) {
		return ['.bin'].indexOf(x) === -1;
	})
	.forEach(function (mod) {
		nodeModules[mod] = 'commonjs ' + mod;
	});

module.exports = {
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
	externals: nodeModules
}
