const webpack = require('webpack')
const { merge } = require('webpack-merge')
const base = require('./webpack.base.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const { config } = require('process')

module.exports = merge(base, {
	entry: './src/entry-client.ts',
	plugins: [
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: "manifest",
		// 	minChunks: Infinity
		// }),
		new VueSSRClientPlugin()
	],
	optimization: {
		splitChunks: {
			name: "manifest",
			minChunks: Infinity
		}
	}
})
