const commander = require("commander")
const program = new commander.Command()
const addtodo = require("./addtodo.js")
const listtodo = require("./listtodo.js")
const removetodo = require("./removetodo.js")
const resettodo = require("./resettodo.js")
const updatetodo = require("./updatetodo.js")
 // instance of command object our command line program

program.version('0.0.1')


program // help command 
.command('help').alias("h").description("shows help section").action(function() {console.log("<help> For help section </help>\n<add> To add a todo in todo list </add>\n<list> To list all todos </list>\n<remove> To remove a todo from the list based on id(0-9)</remove>\n<reset> To remove all the todos from the list </reset>\n<update> To update a todo from the list based on id (0-9)</update>")})
program // add command
.command('add <text>')
.alias('a')
.description("adds todo text to our todo list")
.action(function(text) {
	if (typeof text === 'string') {
	    addtodo.add(text)	
	} else {
		console.log("Please provide a valid todo!")
	}
})
program // list command
.command('list')
.alias('l')
.description('Lists all todos from the todos list')
.action(function() {
	listtodo.list()
})
program
.command("remove")
.alias("r")
.description("removes a specific todo from the todos list")
.action(function(id) {
	if (id < 0 && isNaN(id)) {
		console.log("Please specify a valid decimal number!")
	} else {
		removetodo.remove(id)
	}
})
program
.command("reset")
.alias("r")
.description("resets the todos list and removes all the todos")
.action(function() {
	resettodo.reset()
})
program
.command("update <id> <text>")
.alias("u")
.description("updates the todos list and set the todo to a new value")
.action(function(id, text) {
	if (!isNaN(id) && id >= 0) {
		if (typeof text === 'string') {
			updatetodo.update(id, text)
		} else {
			console.log("Please provide a valid todo!")
		}
	} else {
		console.log("Please provide a valid todo id!")
	}
})
program.parse(process.argv)

