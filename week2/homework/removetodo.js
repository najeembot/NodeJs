const fs = require('fs')
let file = require("./todos.json")

module.exports.remove = function(id) { // removing a specific todo from todos.json file
	
    if (file.todos.length != 0) {
        file.todos.splice(id, 1)
    	fs.writeFile("./todos.json", JSON.stringify(file, null, 2), function (err) {console.log(err)})
    	console.log("Item has been removed")
    } else {
    	console.log("Todos list is empty!")
    }
}
