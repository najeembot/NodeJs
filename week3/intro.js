let express = require("express")

 
let app = express()

app.get("/", function(req, res){ // normal routing based on mount point / 
	res.send("Welcome to express world")
	res.end("\nIt was a message by express")
})

app.listen(3000)