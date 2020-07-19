import express from "express";
import Vue from "vue";
import { createRenderer } from "vue-server-renderer";

const server = express();
const renderer = createRenderer();

const PORT_NO = 3000;

const ERR_HTML = `<div>500 Internal Server Error</div>`;
const wrapInDefaultLayout = (html:string) => {
	return `
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<title>Hello</title>
			<meta charset="utf-8">
		</head>
		<body>${html}</body>
	</html>`;
}

server.get("*", (req, res)=>{
	const app = new Vue({
		data: {
			url: req.url
		},
		template: `<div>The visited URL is: {{ url }}</div>`
	});
	renderer.renderToString(app).then((html)=>{
		res.end(wrapInDefaultLayout(html));
	}).catch((_err)=>{
		res.status(500).end(wrapInDefaultLayout(ERR_HTML));
	})
})

server.listen(PORT_NO);

console.log(`Server is ready: access to http://localhost:${PORT_NO} !`);
