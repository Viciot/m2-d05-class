/**
 * TOC Express POST, body
 * 
 */

 const express = require("express");
 const hbs = require("hbs");
 const app = express();
 const path = require('path')
 const PORT = 3001;
 
 // SET THE TEMPLATE ENGINE
 app.set("view engine", "hbs");
 app.set("views", __dirname + "/views");
 
 // SET THE STATIC FOLDER FOR PUBLIC FILES
 app.use(express.static(__dirname + "/public"));
 
 // REGISTER THE PARTIAL
 hbs.registerPartials(__dirname + "/views/partials");
 
 // MIDDLEWARE
 
 // ROUTES
 app.get("/", (req, res) => {
   console.log(req);
   res.render("index");
 });

 app.post("/search", (req, res)=> {
   res.render('search')
 })



 app.listen(PORT)
