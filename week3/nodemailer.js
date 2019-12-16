const nm = require("nodemailer")
let transport = nm.createTransport({
	service: 'gmail',
	auth: {
		user: 'testdwork7@gmail.com',
		pass: 'Qwerty123456!@#$%^'
	}
})

let mailoptions = {
	from: 'testdwork7@gmail.com',
	to: 'najeemb18@gmail.com, najeemb18@gmail.com', // sending for multiple receivers
	subject: 'Test html email',
	html: '<html><head></head><body><h1>Test email</h1><br /><p>This is a sample paragraph</p></body></html>' // using html instead of plain text (html: '<html></html>')
}

transport.sendMail(mailoptions, function(err, info){
	if (err) console.log(err)
	console.log("Email sent "+info.response)
})


