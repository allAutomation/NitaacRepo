var HtmlReporter = require('protractor-beautiful-reporter');
var reporter = new HtmlReporter({
  baseDirectory: 'Reports/screenshots'
});

exports.config = {
    // launch locally when fields directConnect and seleniumAddress are not provided

  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./JSFilesLocation/Tests/submitTrp.js'],
  capabilities: {
    browserName: 'chrome'
  },
  

  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'Reports/screenshots'
    }).getJasmine2Reporter());

    var fs = require('fs-extra');
 
fs.emptyDir('screenshots/', function (err) {
        console.log(err);
    });
 
    jasmine.getEnv().addReporter({
        specDone: function(result) {
            if (result.status == 'failed') {
                browser.getCapabilities().then(function (caps) {
                    var browserName = caps.get('browserName');
 
                    browser.takeScreenshot().then(function (png) {
                        var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName+ '.png');
                        stream.write(new Buffer(png, 'base64'));
                        stream.end();
                    });
                });
            }
        }
    });
  }

}