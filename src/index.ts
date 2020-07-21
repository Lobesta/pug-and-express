import express from "express";
import * as VueRenderer from "vue-server-renderer";
import fs from "fs";
import createView from "./vue-app";

const expressApp = express();
const renderer = VueRenderer.createRenderer(
	{template:fs.readFileSync("./base.template.html", "utf-8")}
);

const PORT_NO = 3000;
const inj = {
	title: "Hello",
	metas: `<meta charset="utf-8">`
}

expressApp.get("*", (req, res)=>{
	const context = {
		url: req.url
	}
	const app = createView(context);
	renderer.renderToString(app, inj).then((html)=>{
		res.end(html);
	}).catch((_err)=>{
		res.status(500).end("500: Internal Server Error");
	})
})

expressApp.listen(PORT_NO);

console.log(`Server is ready: access to http://localhost:${PORT_NO} !`);
