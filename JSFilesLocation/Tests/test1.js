"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const exceljs_1 = require("exceljs");
const FunctionLib_1 = require("../Functions/FunctionLib");
describe('User shall be able to Get A Quote', function () {
    protractor_1.browser.ignoreSynchronization = true; // for non-angular websites
    var fn = new FunctionLib_1.ReusableFun();
    it('AAFMAA Website', function () {
        var wb = new exceljs_1.Workbook();
        wb.xlsx.readFile("./Data/KDT.xlsx").then(function () {
            let sheet = wb.getWorksheet("NewMember");
            let row = sheet.rowCount;
            let col = sheet.columnCount;
            for (let i = 8; i < row + 1; i++) {
                var keys = sheet.getRow(i).getCell(8).toString();
                var locType = sheet.getRow(i).getCell(9).toString();
                var locValue = sheet.getRow(i).getCell(10).toString();
                var parm = sheet.getRow(i).getCell(11).toString();
                switch (keys) {
                    case 'navigateUrl':
                        fn.navigateUrl(parm);
                        break;
                    case 'fileUpload':
                        fn.fileUpload(locType, locValue, parm);
                        break;
                    case 'selectElement':
                        fn.selectElement(locType, locValue, parm);
                        break;
                    case 'clickElement':
                        fn.clickElement(locType, locValue);
                        break;
                    case 'sendText':
                        fn.sendText(locType, locValue, parm);
                        break;
                    case 'clearElement':
                        fn.clearElement(locType, locValue);
                        break;
                    case 'quitDriver':
                        fn.quitDriver(protractor_1.browser);
                        break;
                    case 'getTextMain':
                        fn.getTextMain(locType, locValue, parm);
                        break;
                    case 'getAttributeValue':
                        fn.getAttributeValue(locType, locValue, parm);
                        break;
                    case 'getAttributeText':
                        fn.getAttributeText(locType, locValue, parm);
                        break;
                    case 'hovering':
                        fn.hovering(locType, locValue);
                        break;
                    case 'selectComboBox':
                        fn.selectComboBox(locType, locValue, parm);
                        break;
                    default:
                        console.log('No key to select');
                        break;
                }
            }
        });
    });
    it('test scenario', () => {
        console.log('test all automated test');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9UZXN0cy90ZXN0MS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFpRDtBQUNqRCxxQ0FBdUQ7QUFDdkQsMERBQXVEO0FBRXZELFFBQVEsQ0FBQyxtQ0FBbUMsRUFBRTtJQUM3QyxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxDQUFDLDJCQUEyQjtJQUNqRSxJQUFJLEVBQUUsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztJQUMzQixFQUFFLENBQUMsZ0JBQWdCLEVBQUU7UUFDcEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxrQkFBUSxFQUFFLENBQUM7UUFDeEIsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDeEMsSUFBSSxLQUFLLEdBQWEsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuRCxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFBO1lBQ3hCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNqRCxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDcEQsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RELElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUVsRCxRQUFRLElBQUksRUFBRTtvQkFDYixLQUFLLGFBQWE7d0JBQ2xCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0gsTUFBTTtvQkFFTixLQUFLLFlBQVk7d0JBQ2pCLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDdkMsTUFBTTtvQkFFeEIsS0FBSyxlQUFlO3dCQUNwQixFQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQzFDLE1BQU07b0JBRU4sS0FBSyxjQUFjO3dCQUNuQixFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQzt3QkFDbkMsTUFBTTtvQkFFTixLQUFLLFVBQVU7d0JBQ2YsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNyQyxNQUFNO29CQUVOLEtBQUssY0FBYzt3QkFDbkIsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBQ25DLE1BQU07b0JBRU4sS0FBSyxZQUFZO3dCQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFPLENBQUMsQ0FBQzt3QkFDdkIsTUFBTTtvQkFFTixLQUFLLGFBQWE7d0JBQ2xCLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDeEMsTUFBTTtvQkFFTixLQUFLLG1CQUFtQjt3QkFDeEIsRUFBRSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQzlDLE1BQU07b0JBRU4sS0FBSyxrQkFBa0I7d0JBQ3ZCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUM3QyxNQUFNO29CQUVOLEtBQUssVUFBVTt3QkFDZixFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQzt3QkFDL0IsTUFBTTtvQkFFTixLQUFLLGdCQUFnQjt3QkFDckIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN6QyxNQUFNO29CQUVOO3dCQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQzt3QkFDaEMsTUFBTTtpQkFFUDthQUNEO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxlQUFlLEVBQUUsR0FBRSxFQUFFO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQTtJQUN2QyxDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyxDQUFDIn0=