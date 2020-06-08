import express from "express";

const expressApp = express();

expressApp.set("view engine", "pug");
expressApp.set("views", "./templates");

// Add routing here when you write a new pug file
expressApp.get("", (_req, res)=>{
	res.render("index");
})

expressApp.listen(3000);

console.log("Server is ready: access to http://localhost:3000 !")
