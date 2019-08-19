//const http = require('http');
const path = require('path');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const express = require('express');
const logger = (req,res,next) => {
	console.log('logging...');
	next();
};
const bodyParser = require('body-parser');

var app = express();
var person = {
	name:'Jeff',
	age: 30
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:false}));
//app.use(express.static(path.join(__dirname, 'public')));

//app.use(logger);
app.get('/',(req, res)=>{
	res.json(person);
});

app.listen(port,()=>{
	console.log('express start with ' + port);
});