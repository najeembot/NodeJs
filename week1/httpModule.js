const http = require('http');
const url = require('url');
let text = "";

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type':'text/html'})
	if (req.url.match(/normalmode/ig)) {
		text = "<html><head></head><body><h1>This is the normal page</h1></body></html>";
	} else if (req.url.match(/mobilemode/ig)) {
		text = "<html><head></head><body><h1>This is the Mobile page</h1></body></html>";
	}
	let q = url.parse(req.url, true).query;
	text += q.month + " " + q.year;
	res.write(text);
	res.end();
}).listen(3000, "127.0.0.1", function() {
	console.log("Server is running at port {3000} on host {192.168.1.1}");
});