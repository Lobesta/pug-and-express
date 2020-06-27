import express from "express";

const expressApp = express();

const PORT_NO = 3000;
expressApp.set("view engine", "pug");
expressApp.set("views", "./templates");

// Add routing here when you write a new pug file
expressApp.get("", (_req, res)=>{
	res.render("index");
});

expressApp.listen(PORT_NO);

console.log(`Server is ready: access to http://localhost:${PORT_NO} !`);
