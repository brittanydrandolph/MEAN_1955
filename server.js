//IMPORTS
const express = require("express");
const app = express();
const mongoose = require("mongoose")
const json = require("json")
app.use(express.json());

//DATABASE
mongoose.connect("mongodb://localhost/1955");
require("./server/configs/mongoose")

//ROUTES
require("./server/configs/routes")(app)

//PORT
app.listen(8000, function(){
    console.log("Listening on port: 8000");
})