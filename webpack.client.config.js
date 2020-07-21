const webpack = require('webpack')
const { merge } = require('webpack-merge')
const base = require('./webpack.base.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(base, {
	entry: {
		client: './src/entry-client.ts'
	},
	plugins: [
		// 重要: webpack ランタイムを先頭のチャンクに分割して、
		// 直後に非同期チャンクを挿入できるようにする
		// これにより、アプリ/ベンダーコードのキャッシングも改善される
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: "manifest",
		// 	minChunks: Infinity
		// }),
		// このプラグインは、出力ディレクトリに
		// `vue-ssr-client-manifest.json` を生成する
		new VueSSRClientPlugin()
	]
})
