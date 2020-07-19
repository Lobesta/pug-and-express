const path = require('path') // output.pathに絶対パスを指定する必要があるため必要

// Module not found: Error: Can't resolve ... の対処
const fs = require('fs');
let nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
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
