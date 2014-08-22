var nodeStatic = require('node-static');
var http = require('http');

var port = 3000;
var publicDir = './public';

var file = new nodeStatic.Server(publicDir);

http.createServer(function (request, response) {
  request.addListener('end', function () {
    file.serve(request, response);
  }).resume();
}).listen(port);

console.log('Server running at http://localhost:' + port);