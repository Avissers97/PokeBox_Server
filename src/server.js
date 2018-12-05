const http = require('http');
const express = require('express');
const trainerRoutes = require('../src/api/trainer/trainerRoutes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

//json as content type
app.use('*', function(req, res, next){
	res.contentType('application/json');
	next();
});

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//mongoose config
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/PokeBoxDB', {useNewUrlParser: true});

//set api routes
app.use('/api/trainers', trainerRoutes);

//Returns a 400 error for all non existing endpoints
app.use('*', function(req, res, next){
	res.status(400);
	res.json({Error: 'No matching endpoints'});
	res.end();
});

//Returns a 404 error for everything else
app.use('*', function(err, req, res, next){
	console.log('Error: ' + err);
	res.status(404).json({error: err}).end();
});

app.listen(port, function() {
	console.log('Server listens on port ' + port);
});

module.exports = app;