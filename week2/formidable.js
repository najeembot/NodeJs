const http = require("http")
const fu = require("formidable")
const fs = require("fs")
// creating basic html page as response
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/html'})
	if (req.url == "/fileupload") {
		let form = fu.IncomingForm()
		form.parse(req, function(err, fields, files){
			let oldpath = files.filetoupload.path
			let newpath = "Uploaded/"+files.filetoupload.name
			fs.rename(oldpath, newpath, function(err){
				if (err) throw err
				res.write("uploaded")
			    res.end()
			})
		})
		res.write("ok")
		res.end()
		
	} else {
	    res.write("<html><head><title>File Upload</title></head><body><center><fieldset><legend>Upload Files</legend><form action='fileupload' method='post' enctype='multipart/form-data'><input type='file' name='file' />&nbsp;<input type='submit' value='Submit' /></form></fieldset></center></body></html>")
	    res.end()
	}

}).listen(3000)
// handling the file upload


