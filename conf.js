
var HtmlReporter = require('protractor-beautiful-reporter');
var reporter = new HtmlReporter({
  baseDirectory: 'Reports/screenshots'
});

exports.config = {
    // launch locally when fields directConnect and seleniumAddress are not provided

  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['C:\\Users\\sbeyou\\ProtractorDemo\\JSFilesLocation\\testOne.js'],
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }],

  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'Reports/screenshots'
    }).getJasmine2Reporter());
  }

}