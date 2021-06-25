/**
 * TOC Express GET, query and params
 * 
 */

 const express = require("express");
 const hbs = require("hbs");
 const app = express();
 const path = require('path')
 const PORT = 3001;
 
 // REGISTER THE PARTIAL
 hbs.registerPartials(path.join(__dirname +  "/views/partials"));

 // SET THE TEMPLATE ENGINE
 app.set("view engine", "hbs");
 app.set("views", path.join(__dirname + "/views"));
 
 // SET THE STATIC FOLDER FOR PUBLIC FILES
 app.use(express.static(path.join(__dirname + "/public")));
 
 
 // MIDDLEWARE
 
 // ROUTES
 // localhost:3000?q=how%20are%20you&username=Marco
 app.get("/", (req, res) => {
   console.log(req.query);
   const q = req.query.q
   const username = req.query.username
   res.render("index", {q, username});
 });

app.get("/", (req,res) => {

})

 app.listen(PORT)
