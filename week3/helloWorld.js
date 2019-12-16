let express = require("express")

 
let app = express()

app.get("/", function(req, res){ // normal routing based on mount point / 
	res.send("Welcome to express world")
})

app.get("/profile/:id/:name", function(req, res){ // route params
	res.send("You have requested the profile id:"+req.params.id+", and name:"+req.params.name)
})
app.listen(3000)
