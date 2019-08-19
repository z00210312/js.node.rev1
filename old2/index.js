/*
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res)=>{
	if(req.url == '/'){
		fs.readFile(path.join(__dirname, 'home.html'),(err,data)=>{
			if(err) throw err;
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
			
		});
	}
	else if(req.url == '/about'){
		fs.readFile(path.join(__dirname, 'about.html'),(err,data)=>{
			if(err) throw err;
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
			
		});
	}
	else if(req.url == '/user'){
		const users = [{name: 'Alice', age:20},{name: 'Bob', age:35},{name: 'Catelyn', age:41}];
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(users));
	}
});
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

server.listen(port, ()=>console.log('server running on port : ' + port));
*/
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res)=>{
	let filePath = path.join(__dirname, req.url === '/' ? 'home.html' : req.url);
	let extname = path.extname(filePath);
	let contentType = 'text/html';
	switch(extname){
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.json':
			contentType = 'application/json';
			break;
		case '.css':
			contentType = 'text/css';
			break;
	}
	
	fs.readFile(filePath, (err, data) => {
		if(err){
			if(err.code == 'ENOENT'){
				fs.readFile(path.join(__dirname,'404.html'),(err,data) => {
					res.writeHead(200,{'Content-Type': 'text/html'});
					console.log(filePath);
					res.end(data,'utf8');
				});
			}
			else {
				res.writeHead(500);
				console.log(filePath);
				res.end('Server Error : ' + err);
			}
		}
		else{
			res.writeHead(200,{'Content-Type': contentType});
			console.log(filePath);
			res.end(data,'utf8');
		}
	})
});

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

server.listen(port, ()=>console.log('server running on port : ' + port));