import express from "express";
import Vue from "vue";
import * as VueRenderer from "vue-server-renderer";
import fs from "fs";

const expressApp = express();
const renderer = VueRenderer.createRenderer(
	{template:fs.readFileSync("./base.template.html", "utf-8")}
);

const PORT_NO = 3000;
const context = {
	title: "Hello",
	metas: `<meta charset="utf-8">`
}

expressApp.get("*", (req, res)=>{
	const app = new Vue({
		data: {
			url: req.url
		},
		template: `<div>The visited URL is: {{ url }}</div>`
	});
	renderer.renderToString(app, context).then((html)=>{
		res.end(html);
	}).catch((_err)=>{
		res.status(500).end("500: Internal Server Error");
	})
})

expressApp.listen(PORT_NO);

console.log(`Server is ready: access to http://localhost:${PORT_NO} !`);
