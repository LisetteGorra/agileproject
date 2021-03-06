const express = require('express');


//set up express app
const app = express();

app.use( require('./app.js'));

app.get('/api', function(req, res){
    console.log('GET request');   
    res.send({name: 'Lisette'});
});

app.post('/api', function(req, res){
    console.log('POST request');   
    res.send({name: 'Lisette'});
});

//listen for requests 

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Now listening for requests");
});

