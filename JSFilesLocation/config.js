
exports.config = {
    
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./JSFilesLocation/Tests/submitTrp.js'],
  multiCapabilities: {
    browserName: 'chrome'
  },

  onPrepare: function() {
      return browser.getProcessedConfig().then((config)=>{
        var ChercherTechJasmineReporter = require('chercher-tech-jasmine-reporter');
        jasmine.getEnv().addReporter(new ChercherTechJasmineReporter({
            screenshotOnFail :true,
            reportName:'TestRunResult',
            showSkipped:true,
            browser:browser,
            showLineChart:true
    
        }));        
      });
   }
}
 