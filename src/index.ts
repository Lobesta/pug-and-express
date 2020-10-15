import express from "express";
import sassMiddleware from "node-sass-middleware";
import serveStatic from "serve-static"
import path from "path";
import { createEngine } from "./createEngine";

const expressApp = express();

const PORT_NO = 3000;
const SASS_SRC = path.join(__dirname, "../styles");  // In this case __dirname points ./src directory
const SASS_DIST = path.join(__dirname, "../dist-styles");
const IS_DEV = Object.keys(require.cache).some(path => path.includes('ts-node'));
const VIEW_EXT = IS_DEV ? "tsx" : "js";

expressApp.set("view engine", VIEW_EXT);
expressApp.set("views", IS_DEV ? "./src/templates" : "./dist/templates");
expressApp.engine(VIEW_EXT, createEngine());

expressApp.use(sassMiddleware({
	src: SASS_SRC,
	dest: SASS_DIST,
	// debug: true,
	outputStyle: 'compressed',
	prefix: "/static"
}));
expressApp.use("/static", serveStatic(SASS_DIST));

// Add routing here when you write a new page file
expressApp.get("", (_req, res) => {
	res.render("top", { name: "World" });
});

expressApp.listen(PORT_NO);

console.log(`Server is ready: access to http://localhost:${PORT_NO} !`);
