const fs = require("fs")
const file = require("./todos.json")
let jsonString, text, id = 1
module.exports.add = function (text) {  // adding todos into todos.json file
    file.todos.push(text)
    jsonString = JSON.stringify(file, null, 2)
    fs.writeFile("./todos.json", jsonString, function(err){console.log(err)})
    console.log("Todo is added to the todos list")
};

