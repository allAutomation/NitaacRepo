
exports.config = {
    
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['./JSFilesLocation/Tests/submitTrp.js'],

  //test suites
  suites:{ 
  smoke:['tes1.js', 'test2.js', 'test3.js'], 
  regression:'test8.js',
  functional:['test7.js','test9.js', 'test10.js']
  },

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
            showLineChart:false
    
        }));        
      });
   }
}
 