const express = require('express');
const router = express.Router();

//get a list of employees from the database
router.get('/employees', function(req,res){
    res.send({type: 'GET'});
    
});
//add an employee to the data base
router.post('/employees', function(req,res){
    res.send({type: 'POST'});
    
});

module.exports = router;