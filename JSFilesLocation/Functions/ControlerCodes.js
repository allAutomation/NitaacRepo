"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const exceljs_1 = require("exceljs");
const FunctionLib_1 = require("./FunctionLib");
class DriverCodes {
    deliveryScripts(filePath, sheetName) {
        protractor_1.browser.ignoreSynchronization = true; // for non-angular websites
        var fn = new FunctionLib_1.ReusableFun();
        var wb = new exceljs_1.Workbook();
        wb.xlsx.readFile(filePath).then(function () {
            let sheet = wb.getWorksheet(sheetName);
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
                        console.log('No key options select');
                        break;
                }
            }
        });
    }
}
exports.DriverCodes = DriverCodes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbGVyQ29kZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9GdW5jdGlvbnMvQ29udHJvbGVyQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBd0U7QUFDeEUscUNBQXVEO0FBR3ZELCtDQUE0QztBQUU1QyxNQUFhLFdBQVc7SUFFcEIsZUFBZSxDQUFDLFFBQWUsRUFBRSxTQUFnQjtRQUM3QyxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxDQUFDLDJCQUEyQjtRQUNqRSxJQUFJLEVBQUUsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQUMzQixJQUFJLEVBQUUsR0FBRyxJQUFJLGtCQUFRLEVBQUUsQ0FBQztRQUM5QixFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDL0IsSUFBSSxLQUFLLEdBQWEsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqRCxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ3pCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNqRCxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDcEQsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3ZDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUVqRSxRQUFRLElBQUksRUFBRTtvQkFDYixLQUFLLGFBQWE7d0JBQ2xCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0gsTUFBTTtvQkFFTixLQUFLLFlBQVk7d0JBQ2pCLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDdkMsTUFBTTtvQkFFeEIsS0FBSyxlQUFlO3dCQUNwQixFQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQzFDLE1BQU07b0JBRU4sS0FBSyxjQUFjO3dCQUNuQixFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQzt3QkFDbkMsTUFBTTtvQkFFTixLQUFLLFVBQVU7d0JBQ2YsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNyQyxNQUFNO29CQUVOLEtBQUssY0FBYzt3QkFDbkIsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBQ25DLE1BQU07b0JBRU4sS0FBSyxZQUFZO3dCQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFPLENBQUMsQ0FBQzt3QkFDdkIsTUFBTTtvQkFFTixLQUFLLGFBQWE7d0JBQ2xCLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDeEMsTUFBTTtvQkFFTixLQUFLLG1CQUFtQjt3QkFDeEIsRUFBRSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQzlDLE1BQU07b0JBRU4sS0FBSyxrQkFBa0I7d0JBQ3ZCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUM3QyxNQUFNO29CQUVOLEtBQUssVUFBVTt3QkFDZixFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQzt3QkFDL0IsTUFBTTtvQkFFTixLQUFLLGdCQUFnQjt3QkFDckIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN6QyxNQUFNO29CQUVOO3dCQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQzt3QkFDckMsTUFBTTtpQkFFUDthQUNEO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDRCxDQUFDO0NBQ0o7QUF6RUQsa0NBeUVDIn0=