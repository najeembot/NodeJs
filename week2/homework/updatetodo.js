const fs = require("fs")
const file = require("./todos.json")

let data, JsonData, id
module.exports.update = function(id, text) { // updatting the todos.json file with specific value
	if (file.todos.length != 0) { 
		    id = id
		    file.todos[id] = text
		    JsonData = JSON.stringify(file, null, 2)
		    fs.writeFile("./todos.json", JsonData, function(err){console.log(err)})
		    console.log("The todos item: "+id+" is changed to new value: "+file.todos[id])
	} else {
		console.log("Todos list is empty!")
	}
}