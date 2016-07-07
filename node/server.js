var http = require('http');
var url = require('url');
var port=80;
http.createServer(function(req,res){
	console.log(req.url);
}).listen(port);
console.log('listen in port '+port+' !')