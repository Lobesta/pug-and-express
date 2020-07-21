import express from "express";
import * as VueRenderer from "vue-server-renderer";
import fs from "fs";
// import createView from "./entry-server";

const expressApp = express();
const renderer = VueRenderer.createBundleRenderer(eval('require("./vue-ssr-server-bundle.json")'),{
	template:fs.readFileSync("./base.template.html", "utf-8"),
	clientManifest:eval('require("./vue-ssr-client-manifest.json")')
});

const PORT_NO = 3000;
let context = {
	title: "Hello",
	metas: `<meta charset="utf-8">`,
	url: ""
}

expressApp.get("*", (req, res)=>{
	context.url = req.url;
	renderer.renderToString(context)
	/*createView(context).then((_vue)=>{
		renderer.renderToString(inj);
	})*/.then((html)=>{
		res.end(html);
	}).catch((err)=>{
		if(err.code===404){
			res.status(404).end("404: Page Not Found");
		} else{
			res.status(500).end("500: Internal Server Error");
		}
	})
})

expressApp.listen(PORT_NO);

console.log(`Server is ready: access to http://localhost:${PORT_NO} !`);
