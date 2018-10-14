
var nodemailer = require("nodemailer");
describe('Outer Describe block', function() {

	afterAll(function(){

var transport = nodemailer.createTransport({
	service: 'Gmail',
    auth: {
        user: "autotestprotractor@gmail.com",
        pass: "Autotest3*"
    }
});
var mailOptions = {
    from: 'autotestprotractor@gmail.com', // sender address
    to: 'scplc2007@gmail.com', // list of receivers
    subject: 'Test Result Reports', // Subject line
	//text: info.body,
    text: 'Contains the test result for the smoke test in html file', // plaintext body
    attachments: [
        {
            'path': './Reports/screenshots/report.html',
        }]
};
transport.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
	    //response.send(error);
		
    } else {
        console.log("Message sent: " + info.response);
		//response.send(info);
    }
});

console.log('enatachu tibeda');

	});

	it('first it block in top describe block', function() {
		console.log("test One in top describe block");
	});
	it('second it block in top describe block', function() {
		console.log("test two in top describe block");
	});
	describe('inner describe block one', function() {
		beforeAll(function(){
			console.log("Before All block in inner describe block one")
		})
		it('inner it block', function() {
			console.log("test One in inner describe block one");
		});
	});
});