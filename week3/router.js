let express = require('express')
let app = express()
let router = express.Router()

// normal routing with application middleware callbacks system

/*app.all("./ab?cd", function(req, res, next){
	res.send("acd and abcd")
	res.next('route')
})

app.all("./ab+cd", function(req, res, next) {
	res.send('abcd, abbcd, abbbcd, abbccd, so on')
	next('route')
})

app.all('/ab*cd', function (req, res, next) {
  res.send("This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on")
  next('route')
})

app.all('/ab(cd)?e', function (req, res, next) {
  res.send("This route path will match /abe and /abcde")
  next('route')
})

app.all(/a/, function (req, res, next) {
  res.send('This route path will match anything with an “a” in it reqular expression')
  next('route')
})

app.all(/.*fly$/, function (req, res, next) {
  res.send('This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on')
  next('route')
})

app.all("/fparams/:id-:name", function(req, res, next) {
	res.send("Your id is: " + req.params.id + ", and you name is: " + req.params.name)
	next('route')
}, function(req, res, next) {
	res.send(req.url)
})

// multiple route callbacks for the middleware
let r1 = function (req, res, next) {
  console.log('Route 1')
  next()
}

let  r2 = function (req, res, next) {
  console.log('Route 2')
  next()
}

let r3 = function (req, res) {
  res.send('Hello from route3!')
}

app.get('/example/c', [r1, r2, r3], function(req, res, next) {
	res.redirect("https://www.google.com")
	next('route')
}, function(req, res) {
	res.send("Hello from router.js ")
})

app.route("/download")
.get(function(req, res, next){
	res.send("To download") 
	next('route')
})
.post(function(req, res, next){
	res.send("To download") 
	next('route')
})
.delete(function(req, res, next){
	res.send("To download") 
	next('route')
})
.put(function(req, res, next){
	res.send("To download")
	next('route')
})
.all(function(req,res,next){
	res.download("./assets/style.css", "style.css", function(err) {
		if (err) {
			console.log("Error occured downloading...")
		} else {
			console.log("File has been downloaded")
		}
	}) 
	next('route')
})
.all(function(req, res){
	res.send("File has been downloaded!")
})
*/
// router middleware specifically with router object
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.all('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

app.listen(4000)

module.exports = router