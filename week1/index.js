const fs = require('fs');
const mfd = require("./myfirstmodules");
console.log(mfd.myDateTime());

// reading the files
fs.readFile("text.txt", "utf8", (err, data) => {
	if (err) throw err;
	console.log(data);
})
// writing files 

fs.writeFile("hello.txt", "sample text", (err) => {
	if (err) console.log(err);
	console.log("the file has been created");
})
fs.appendFile("hello.txt", "Sample text", (err) => {
	if (err) throw err;
	console.log("The file has been updated successfully...");
})
fs.rename("oldfile.txt", "newfile.txt", (err) => {
	if (err) console.log(err)
	console.log("File has been renamed");
})
fs.unlink("delete.txt", (err) => {
	if (err) throw err;
	console.log("File is deleted")
})
