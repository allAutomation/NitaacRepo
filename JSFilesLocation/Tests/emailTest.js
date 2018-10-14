var nodemailer = require("nodemailer");
describe('Outer Describe block', function () {
    afterAll(function () {
        var transport = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: "autotestprotractor@gmail.com",
                pass: "Autotest3*"
            }
        });
        var mailOptions = {
            from: 'autotestprotractor@gmail.com',
            to: 'scplc2007@gmail.com',
            subject: 'Test Result Reports',
            //text: info.body,
            text: 'Contains the test result for the smoke test in html file',
            attachments: [
                {
                    'path': './Reports/screenshots/report.html',
                }
            ]
        };
        transport.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                //response.send(error);
            }
            else {
                console.log("Message sent: " + info.response);
                //response.send(info);
            }
        });
        console.log('enatachu tibeda');
    });
    it('first it block in top describe block', function () {
        console.log("test One in top describe block");
    });
    it('second it block in top describe block', function () {
        console.log("test two in top describe block");
    });
    describe('inner describe block one', function () {
        beforeAll(function () {
            console.log("Before All block in inner describe block one");
        });
        it('inner it block', function () {
            console.log("test One in inner describe block one");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWxUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVGVzdHMvZW1haWxUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxRQUFRLENBQUMsc0JBQXNCLEVBQUU7SUFFaEMsUUFBUSxDQUFDO1FBRVYsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQztZQUMxQyxPQUFPLEVBQUUsT0FBTztZQUNiLElBQUksRUFBRTtnQkFDRixJQUFJLEVBQUUsOEJBQThCO2dCQUNwQyxJQUFJLEVBQUUsWUFBWTthQUNyQjtTQUNKLENBQUMsQ0FBQztRQUNILElBQUksV0FBVyxHQUFHO1lBQ2QsSUFBSSxFQUFFLDhCQUE4QjtZQUNwQyxFQUFFLEVBQUUscUJBQXFCO1lBQ3pCLE9BQU8sRUFBRSxxQkFBcUI7WUFDakMsa0JBQWtCO1lBQ2YsSUFBSSxFQUFFLDBEQUEwRDtZQUNoRSxXQUFXLEVBQUU7Z0JBQ1Q7b0JBQ0ksTUFBTSxFQUFFLG1DQUFtQztpQkFDOUM7YUFBQztTQUNULENBQUM7UUFDRixTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxVQUFVLEtBQUssRUFBRSxJQUFJO1lBQ2pELElBQUksS0FBSyxFQUFFO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RCLHVCQUF1QjthQUV2QjtpQkFBTTtnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDcEQsc0JBQXNCO2FBQ25CO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFOUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0NBQXNDLEVBQUU7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLHVDQUF1QyxFQUFFO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNILFFBQVEsQ0FBQywwQkFBMEIsRUFBRTtRQUNwQyxTQUFTLENBQUM7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLENBQUE7UUFDNUQsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsZ0JBQWdCLEVBQUU7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyJ9