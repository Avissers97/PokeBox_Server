const express = require('express');
const routes = express.Router();
const trainerController = require('../../db/trainerController');

//get trainers
routes.get('/', function(req, res){
    res.statusCode = 200;
    return res.json({Test : 'Server Online'});
})

//add user
//routes.post('/', trainerController.AddTrainer);

//change password
//routes.put('/:id', trainerController.ChangePassword);

//delete user
//routes.delete('/:id', trainerController.DeleteTrainer);

//get specific trainer
//routes.get('/:id', function(req,res){
//    var temp = req.params.id;

//    res.statusCode = 200;
//    return res.json({eyyy : 'eeyyy' + temp});
//})

module.exports = routes;
