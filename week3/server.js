// server.js
// load the things we need
let express = require('express');
let app = express();
let router = require("./router")

app.use("/router", router)
// set the view engine to ejs
app.set('view engine', 'ejs');
// setting the middleware function for assets to make it static directory
app.use("/assets", express.static("assets"))
// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');