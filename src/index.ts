import express from "express";
import * as VueRenderer from "vue-server-renderer";
import fs from "fs";
import entryServer from "./entry-server";

const expressApp = express();
const renderer = VueRenderer.createRenderer({
	template: fs.readFileSync("./base.template.html", "utf-8")
	// clientManifest: require('./data/vue-ssr-client-manifest.json')
});

const PORT_NO = 3000;
const context = {
	title: "Hello",
	metas: `<meta charset="utf-8">`,
	url: ""
}

expressApp.get("*", (req, res)=>{
	context.url = req.url;
	entryServer(context).then((app)=>{
		renderer.renderToString(app).then((html)=>{
			res.end(html);
		}).catch((err)=>{
			console.log("error at renderToString")
			if(err.code===404){
				res.status(404).end('404: Page not found');
			} else {
				res.status(500).end('500: Internal Server Error');
			}
		})
	}).catch((err)=>{
		console.log("error at entryServer")
		if(err.code===404){
			res.status(404).end('404: Page not found');
		} else {
			res.status(500).end('500: Internal Server Error');
		}
	})
})

expressApp.listen(PORT_NO);

console.log(`Server is ready: access to http://localhost:${PORT_NO} !`);
