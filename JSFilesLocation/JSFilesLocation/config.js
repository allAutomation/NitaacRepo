"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./JSFilesLocation/Tests/submitTrp.js'],
    multiCapabilities: [{
            browserName: 'firefox'
        }, {
            browserName: 'chrome'
        }],
    onPrepare: function () {
        return protractor_1.browser.getProcessedConfig().then((config) => {
            var ChercherTechJasmineReporter = require('chercher-tech-jasmine-reporter');
            jasmine.getEnv().addReporter(new ChercherTechJasmineReporter({
                screenshotOnFail: true,
                reportName: 'TestRunResult',
                showSkipped: true,
                browser: protractor_1.browser,
                showLineChart: true
            }));
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXFDO0FBQ3JDLE9BQU8sQ0FBQyxNQUFNLEdBQUc7SUFFZixTQUFTLEVBQUUsU0FBUztJQUNwQixlQUFlLEVBQUUsOEJBQThCO0lBQy9DLEtBQUssRUFBRSxDQUFDLHNDQUFzQyxDQUFDO0lBQy9DLGlCQUFpQixFQUFFLENBQUM7WUFDbEIsV0FBVyxFQUFFLFNBQVM7U0FDdkIsRUFBRTtZQUNELFdBQVcsRUFBRSxRQUFRO1NBQ3RCLENBQUM7SUFFRixTQUFTLEVBQUU7UUFDUCxPQUFPLG9CQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUMsRUFBRTtZQUNqRCxJQUFJLDJCQUEyQixHQUFHLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1lBQzVFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSwyQkFBMkIsQ0FBQztnQkFDekQsZ0JBQWdCLEVBQUUsSUFBSTtnQkFDdEIsVUFBVSxFQUFDLGVBQWU7Z0JBQzFCLFdBQVcsRUFBQyxJQUFJO2dCQUNoQixPQUFPLEVBQUMsb0JBQU87Z0JBQ2YsYUFBYSxFQUFDLElBQUk7YUFFckIsQ0FBQyxDQUFDLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7Q0FDSCxDQUFBIn0=