const http = require("http")
const url = require("url")
// the url and the state variables
let state = 10

let text = ""

const stateUrl = '/state'

const addUrl = '/add'

const subtractUrl = '/subtract'

const resetUrl = '/reset'

const badUrl = '/bad'

const port = 8080

const host = "127.0.0.1"

// creating a dynamic http server which routes
http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'text/html'})
	if (req.url.match(stateUrl)) {
		console.log("The current state is: "+state)
		text = "<html><head></head><body><h1>The current state is: "+state+"</h1></body></html>"
	} else if (req.url.match(addUrl)) {
		state += 1;
		console.log("The current state is: "+state)
		text = "<html><head></head><body><h1>The current state is: "+state+"</h1></body></html>"
	} else if (req.url.match(subtractUrl)) {
		state -= 1;
		console.log("The current state is: "+state)
		text = "<html><head></head><body><h1>The current state is: "+state+"</h1></body></html>"
	} else if (req.url.match(resetUrl)) {
		state = 10
		console.log("The current state is: "+state)
		text = "<html><head></head><body><h1>The current state is: "+state+"</h1></body></html>"
	} else if (req.url.match(badUrl)) {
		console.log("Error 404 url not found")
		text = "<html><head></head><body><h1>404 url not found</h1></body></html>"
	}
	res.write(text)
	res.end()
}).listen(port, host, function() {
	console.log(`Server is running at: ${port} on ${host}`)
})