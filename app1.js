const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const router = express.Router();
const Schema = mongoose.Schema;
const Employees = require('../employees');

//create employee Schema 
const EmployeeSchema = new Schema({
    
});


//get a clock in from the database 
router.get('/employees', function(req, res){
    res.send({type: 'GET'});
});
//add a clock in to the data base
router.post('/employees', function(req, res, next){
    Employees.create(req.body).then(function(ninja){
        res.send(Employees);
    }).catch(next);

});
//set up express app 
const app= express();

//connect to mongod
app.listen(process.ENV.PORT, ENV.PORT.IP);
// mongoose.connect("mongod://localhost/employees", {useNewUrlParser:true});
mongoose.Promise = global.Promise; // use this because mongoose is deprecated 

//To serve static files such as images, CSS files and JavaScript files, use the express.static built in middleware function in Express
app.use(express.static(__dirname + '/public'));

//Set the app to use ejs files 
app.set("view engine", "ejs");

//You need to use bodyParser() if you want the form data to be available in req.body 
app.use(bodyParser.json());

// When we need to initialize and use routing, use this. Remove the <> symbols and add your directory name 
<<<<<<< HEAD
// app.use ("/<<directory name here>>", require("./routes/<<directory name here>>")); 

//create employee model and schema 
const EmployeeSchema = new Schema({
    name: {
        type: String, 
        required: [true, 'Name field is requred']
    },
    identification: {
        type: Number, 
        required: [true, 'Identification field is requred']
    },
});
=======
// app.use ("/<<directory name here>>", require("./routes/<<directory name here>>"));

//error handling middleware if needed 
app.use(function(err, req, res, next){
    console.log("Now listening for requests");
});

>>>>>>> version6.0
