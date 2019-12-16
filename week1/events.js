const fs = require("fs")
const events = require("events")
const rs = fs.createReadStream("hello.txt")
rs.on("open", function() {
	console.log("The file is open!")
})
const emitter = new events.EventEmitter()
let myHandler = () => {
	console.log("Screamed!")
}
emitter.on("scream", myHandler)
emitter.emit("scream")