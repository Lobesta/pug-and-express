const path = require('path') // to set absolute path at output.path
const { merge } = require("webpack-merge")
const base = require("./webpack.base.config")
// to avoid error saying "Module not found: Error: Can't resolve ..."
const nodeExternals = require("webpack-node-externals")
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(base, {
	target: "node",
	mode: 'development',
	entry: {
		server_bundle: './src/entry-server.ts'
	},
	externals: nodeExternals(),
	output: {
		libraryTarget: 'commonjs2'
	},
	plugins: [
		new VueSSRServerPlugin()
	]
})
