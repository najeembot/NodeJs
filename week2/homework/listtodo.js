const fs = require("fs")
let data, jsonData

module.exports.list = function() { // listing all todos from todos.json file
	data = fs.readFileSync("./todos.json", "utf8")
	jsonData = JSON.parse(data)
	if (jsonData.length != 0) {
		jsonData.todos.map(function(value, index) {
			console.log("Item: " + index + ", Todo: " + value)
		})
	} else {
		console.log("Todo list is empty!")
	}    

}