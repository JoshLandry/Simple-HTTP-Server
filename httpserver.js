'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/plain',
	});
	var pathArray = req.url.split('/');
	console.log(pathArray);
	switch(pathArray[1]) {
		case 'time':
			var sysDateTime = new Date();
			res.write(sysDateTime.toString() + '\n');
			break;
		case 'greet':
			var url = req.url
			var name = url.slice(7, 11);
			res.write('Hello ' + pathArray[2] + '\n');
			break;
		default :
			res.write('did not hit a route\n');
	}
	res.end();
});

server.listen(3000);