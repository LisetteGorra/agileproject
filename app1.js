const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');


//set up express app 
const app= express();

//connect to mongod
mongoose.connect("mongod://localhost/employees", {useNewUrlParser:true});
mongoose.Promise = global.Promise; // use this because mongoose is deprecated 



