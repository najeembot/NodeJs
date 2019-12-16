const http = require("http")
const lc = require("lower-case")


http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/html'})
	res.write(lc("Hello World!"))
	res.end()
}).listen(8000)