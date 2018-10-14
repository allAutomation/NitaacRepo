import { browser, element, by, WebElement, WebDriver} from 'protractor';
import {Workbook, Row, Cell, Worksheet} from 'exceljs';
import * as remote from 'selenium-webdriver/remote';
import { cleanSession } from 'selenium-webdriver/safari';
import { ReusableFun } from './FunctionLib';

export class DriverCodes{

    deliveryScripts(filePath:string, sheetName:string){
        browser.ignoreSynchronization = true; // for non-angular websites
        var fn = new ReusableFun();
        var wb = new Workbook();
		wb.xlsx.readFile(filePath).then(function(){
			let sheet:Worksheet = wb.getWorksheet(sheetName);
			let row = sheet.rowCount;
			let col = sheet.columnCount;		
            for (let i = 8; i < row +1; i++) {
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
						fn.quitDriver(browser);
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
						fn.selectComboBox(locType,locValue,parm);
						break;				
				
						default:
						console.log('No key options select');
						break;
					
				}														                               
			}
		});
    }
}