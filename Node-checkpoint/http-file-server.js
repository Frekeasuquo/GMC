const fs = require('fs');
const http = require('http');

server = http.createServer(function(req, res) {
	fs.createReadStream(process.argv[3]).pipe(res);
})
server.listen(process.argv[2])