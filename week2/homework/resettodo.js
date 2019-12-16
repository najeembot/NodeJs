const fs = require('fs')
let file = require("./todos.json")

module.exports.reset = function() { // resetting and removing all todos from todos.json

	file.todos = []
	fs.writeFile("./todos.json", JSON.stringify(file, null, 2), function (err) {console.log(err)})
}
