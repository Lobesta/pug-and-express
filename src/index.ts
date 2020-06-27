import express from "express";
import sassMiddleware from "node-sass-middleware";
import path from "path";

const expressApp = express();

const PORT_NO = 3000;
const SASS_SRC = path.join(__dirname, "../styles");  // In this case __dirname points ./src directory
const SASS_DIST = path.join(__dirname, "../dist-styles");

expressApp.set("view engine", "pug");
expressApp.set("views", "./templates");

expressApp.use(sassMiddleware({
	src: SASS_SRC,
    dest: SASS_DIST,
    // debug: true,
	outputStyle: 'compressed',
	prefix: "/static"
})/*, express.static(path.join(__dirname, "dist-styles"))*/);
expressApp.use(express.static(SASS_DIST));

// Add routing here when you write a new pug file
expressApp.get("", (_req, res)=>{
	res.render("index");
});

expressApp.listen(PORT_NO);

console.log(`Server is ready: access to http://localhost:${PORT_NO} !`);
