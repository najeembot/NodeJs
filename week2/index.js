const express = require("express")
const app = express()
const port = 3000
app.get("/home", (req,res) => {res.send("Hello express world")})
app.listen(process.argv[2])