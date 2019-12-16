// process object 

console.log("Enter your name:\n")
process.argv.forEach((value, index) => { // looping through arguments passed for the node command 
	console.log("Index:"+index+" & value:"+value+"\n")
})

let text = "These are the runtime envoironment information:\r"
let callback = (text) => {
	console.log(text)
	console.log(process.env) // envoirmental information
	console.log(process.versions) // version of Node.js and its depedencies
	console.log(process.cwd) // current directory of our script file
	console.log(__dirname) // director of the module
	console.log(__filename) // filename of the module
	console.log(process.argv) // passed arguments to node command as an array 
	
}
process.nextTick(callback)