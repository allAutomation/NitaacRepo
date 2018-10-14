import { browser, element, by, WebElement, WebDriver} from 'protractor';
import {Workbook, Row, Cell, Worksheet} from 'exceljs';
let path = require("path");
var nodemailer = require("nodemailer");

export class ReusableFun{

    quitDriver(browser:WebDriver){
        browser.quit();
    }

    sendEmail(attachment:string){
        var transport = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: "autotestprotractor@gmail.com",
                pass: "Autotest3*"
            }
        });
        var mailOptions = {
            from: 'autotestprotractor@gmail.com', // sender address
            to: 'jordanhernandez532@gmail.com', // list of receivers
            subject: 'Test Run Result', // Subject line
            //text: info.body,
            text: 'Contains the test result for the smoke test in html file', // plaintext body
            attachments: [
                {
                    'path': attachment,
                }]
        };
        transport.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Message sent: " + info.response);
            }
        });
    }

    fileUpload(locType:string, locValue:string, filePath:string){
        var oElement;
        switch (locType) {
            case "css":
            oElement = element(by.css(locValue));
            var ele = element(by.css('input[type=file]'));
            ele.sendKeys(filePath);
            oElement.submit();
            browser.sleep(3000);
            break;

            case "xpath":
            oElement = element(by.xpath(locValue));
            var ele = element(by.css('input[type=file]'));
            ele.sendKeys(filePath);
            oElement.submit();
            browser.sleep(3000);
            break;


            case "name":
            oElement = element(by.name(locValue));
            var ele = element(by.css('input[type=file]'));
            ele.sendKeys(filePath);
            oElement.submit();
            browser.sleep(3000);
            break;

            case "id":
            oElement = element(by.id(locValue));
            var ele = element(by.css('input[type=file]'));
            ele.sendKeys(filePath);
            oElement.submit();
            browser.sleep(3000);
            break;

            case "model":
            oElement = element(by.model(locValue));
            var ele = element(by.css('input[type=file]'));
            ele.sendKeys(filePath);
            oElement.submit();
            browser.sleep(3000);
            break;

            case "binding":
            oElement = element(by.binding(locValue));
            var ele = element(by.css('input[type=file]'));
            ele.sendKeys(filePath);
            oElement.submit();
            browser.sleep(3000);
            break;

            case "linkText":
            oElement = element(by.linkText(locValue));
            var ele = element(by.css('input[type=file]'));
            ele.sendKeys(filePath);
            oElement.submit();
            browser.sleep(3000);
            break;

            case "partialLinkText":
            oElement = element(by.partialLinkText(locValue));
            var ele = element(by.css('input[type=file]'));
            ele.sendKeys(filePath);
            oElement.submit();
            browser.sleep(3000);
            break;

            case "buttonText":
            oElement = element(by.buttonText(locValue));
            var ele = element(by.css('input[type=file]'));
            ele.sendKeys(filePath);
            oElement.submit();
            browser.sleep(3000);
            break;

        }
    }

    navigateUrl(url:string){
        browser.ignoreSynchronization = true;
        browser.get(url);
        browser.manage().window().maximize();
        browser.manage().deleteAllCookies();
        browser.manage().timeouts().implicitlyWait(10000);
        browser.manage().timeouts().pageLoadTimeout(10000);      
    }

    excelReaderMain(filePath:string, sheetName:string){
        browser.manage().timeouts().implicitlyWait(30000);
		// create object for workbook
		var wb = new Workbook();
		// read xlsx file type
		wb.xlsx.readFile(filePath).then(function(){
			//sheet object
			let sheet:Worksheet = wb.getWorksheet(sheetName);
			let row:number = sheet.rowCount
            console.log("total number of rows : "+row)
            let col:number = sheet.columnCount;
            let dataMain= Array[row][col];
            for (let i:number = 1; i < row + 1; i++) {

                for (let j = 1; j < col + 1; j++) {

                    dataMain[i][j] = sheet.getRow(i).getCell(j).value;
                   // console.log('data: '+ data)
                }                
            }
            return dataMain;

        });
    }

    excelDataReader(filePath:string, sheetName:string){
        var wb= new Workbook();
        wb.xlsx.readFile(filePath);
        var ws = wb.getWorksheet(sheetName);
        var row:number = ws.rowCount;
        var col:number = ws.columnCount;
        let data = Array[row][col]
        for (let i = 1; i < row +1; i++) {
            for (let j = 1; j < col +1; j++) {
               
               data[i][j] = ws.getRow(i).getCell(j).toString();
            }                        
        }
        return data;        
    }

    selectElement(locType:string, locValue:string, parm:string){
        
        switch (locType) {
            case "id":
            element(by.id(locValue)).$(parm).click();
            browser.sleep(500);
            break;

            case "xpath":
            element(by.xpath(locValue)).$(parm).click();
            browser.sleep(500);
            break;

            case "css":
            element(by.css(locType)).$(parm).click();
            browser.sleep(500);
            break;

            case "model":
            element(by.model(locValue)).$(parm).click();
            browser.sleep(500);
            break;

            case "binding":
            element(by.binding(locValue)).$(parm).click();
            browser.sleep(500);
            break;

            case "name":
            element(by.name(locValue)).$(parm).click();
            browser.sleep(500);
            break;

            case "className":
            element(by.className(locValue)).$(parm).click();
            browser.sleep(500);
            break;

            case "linkText":
            element(by.linkText(locValue)).$(parm).click();
            browser.sleep(500);
            break;

            case "partiallinkText":
            element(by.partialLinkText(locValue)).$(parm).click();
            browser.sleep(500);
            break;

            case "partialButtonText":
            element(by.partialButtonText(locType)).$(parm).click();
            browser.sleep(500);
            break;
            
        
            default:
            console.log('No Locator Found');
                break;
        }
    }

    clickElement(locType:string, locValue:string){
        switch (locType) {

            case "id":
            element(by.id(locValue)).click();
            browser.sleep(1000);                
            break;

            case "xpath":
            element(by.xpath(locValue)).click();
            browser.sleep(500);  
            break;

            case "css":
            element(by.css(locValue)).click();
            browser.sleep(500);  
            break;

            case "model":
            element(by.model(locValue)).click();
            browser.sleep(500);  
            break;

            case "binding":
            element(by.binding(locValue)).click();
            browser.sleep(500);  
            break;

            case "name":
            element(by.name(locValue)).click();
            browser.sleep(500);  
            break;

            case "className":
            element(by.className(locValue)).click();
            browser.sleep(500);  
            break;

            case "linkText":
            element(by.linkText(locValue)).click();
            browser.sleep(500);  
            break;

            case "partialLinkText":
            element(by.partialButtonText(locValue)).click();
            browser.sleep(500);  
            break;

            case "partialButtonText":
            element(by.partialButtonText(locValue)).click();
            browser.sleep(500);  
            break;

            case "buttonText":
            element(by.buttonText(locValue)).click();
            browser.sleep(500);  
            break;
                    
            default:
            console.log('No Locator Found')
                break;
        }
    }

    sendText(locType:string, locValue:string, parm:string){
        switch (locType) {
           
            case "id":
            element(by.id(locValue)).sendKeys(parm);                
            break;

            case "xpath":
            element(by.xpath(locValue)).sendKeys(parm);
            break;

            case "css":
            element(by.css(locValue)).sendKeys(parm);
            browser.sleep(3000)
            break;

            case "model":
            element(by.model(locValue)).sendKeys(parm);
            break;

            case "binding":
            element(by.binding(locValue)).sendKeys(parm);
            break;

            case "name":
            element(by.name(locValue)).sendKeys(parm);
            break;

            case "className":
            element(by.className(locValue)).sendKeys(parm);
            break;

            case "linkText":
            element(by.linkText(locValue)).sendKeys(parm);
            break;

            case "partialLinkText":
            element(by.partialButtonText(locValue)).sendKeys(parm);
            break;

            case "partialButtonText":
            element(by.partialButtonText(locValue)).sendKeys(parm);
            break;

            case "buttonText":
            element(by.buttonText(locValue)).sendKeys(parm);
            break;
        }
    }
    clearElement(locType:string, locValue:string){
        switch (locType) {
            case "id":
            element(by.id(locValue)).clear();                
            break;

            case "xpath":
            element(by.xpath(locValue)).clear();
            break;

            case "css":
            element(by.css(locValue)).clear();
            break;

            case "model":
            element(by.model(locValue)).clear();
            break;

            case "binding":
            element(by.binding(locValue)).clear();
            break;

            case "name":
            element(by.name(locValue)).clear();
            break;

            case "className":
            element(by.className(locValue)).clear();
            break;

            case "linkText":
            element(by.linkText(locValue)).clear();
            break;

            case "partialLinkText":
            element(by.partialButtonText(locValue)).clear();
            break;

            case "partialButtonText":
            element(by.partialButtonText(locValue)).clear();
            break;

            case "buttonText":
            element(by.buttonText(locValue)).clear();
            break;
                    
            default:
            console.log('No Locator Found')
                break;
        }
    }

    getTextMain(locType:string, locValue:string, parm:string){
        //var text;
        switch (locType) {
            case "id":
            element(by.id(locValue)).getText().then((text)=>{
                if (text.localeCompare(parm)) {
                    console.log(text + ', TEST PASS');
                    
                }
                else{
                    console.log('No Text Found')
                }              
            })           
            browser.sleep(1000);
            break;

            case "xpath":
            element(by.xpath(locValue)).getText().then((text)=>{
                if (text.localeCompare(parm)) {
                    console.log(text + ', TEST PASS');
                    
                }
                else{
                    console.log('No Text Found')
                }             
            })           
            browser.sleep(1000);
            break;

            case "css":
            element(by.css(locValue)).getText().then((text)=>{
                if (text.localeCompare(parm)) {
                    console.log(text + ', TEST PASS');
                    
                }
                else{
                    console.log('No Text Found')
                }              
            })           
            browser.sleep(1000);

            break;

            case "model":
            element(by.model(locValue)).getText().then((text)=>{
                if (text.localeCompare(parm)) {
                    console.log(text + ', TEST PASS');
                    
                }
                else{
                    console.log('No Text Found')
                }             
            })           
            browser.sleep(1000);
            break;

            case "binding":
            element(by.binding(locValue)).getText().then((text)=>{
                if (text.localeCompare(parm)) {
                    console.log(text + ', TEST PASS');
                    
                }
                else{
                    console.log('No Text Found')
                }              
            })           
            browser.sleep(1000);

            break;

            case "name":
            element(by.name(locValue)).getText().then((text)=>{
                if (text.localeCompare(parm)) {
                    console.log(text + ', TEST PASS');
                    
                }
                else{
                    console.log('No Text Found')
                }            
            })           
            browser.sleep(1000);
            break;

            case "className":
            element(by.className(locValue)).getText().then((text)=>{
                if (text.localeCompare(parm)) {
                    console.log(text + ', TEST PASS');
                    
                }
                else{
                    console.log('No Text Found')
                }              
            })           
            browser.sleep(1000);

            break;

            case "linkText":
            element(by.linkText(locValue)).getText().then((text)=>{
                if (text.localeCompare(parm)) {
                    console.log(text + ', TEST PASS');
                    
                }
                else{
                    console.log('No Text Found')
                }            
            })           
            browser.sleep(1000);
            break;

            case "partialLinkText":
            element(by.partialLinkText(locValue)).getText().then((text)=>{
                if (text.localeCompare(parm)) {
                    console.log(text + ', TEST PASS');
                    
                }
                else{
                    console.log('No Text Found')
                }              
            })           
            browser.sleep(1000);

            break;

            case "partialButtonText":
            element(by.partialButtonText(locValue)).getText().then((text)=>{
                if (text.localeCompare(parm)) {
                    console.log(text + ', TEST PASS');
                    
                }
                else{
                    console.log('No Text Found')
                }            
            })           
            browser.sleep(1000);
            break;

            case "buttonText":
            element(by.buttonText(locValue)).getText().then((text)=>{
                if (text.localeCompare(parm)) {
                    console.log( text + ', TEST PASS');
                    
                }
                else{
                    console.log('No Text Found')
                }             
            })           
            browser.sleep(1000);
            break;
                    
            default:
            console.log('No Locator Found')
                break;
        }
    }

    getAttributeValue(locType:string, locValue:string, parm:string){
       // var text;
        switch (locType) {
            case "id":
            element(by.id(locValue)).getAttribute('value').then((text)=>{
                if (text.localeCompare(parm)) {

                    console.log(text + ', TEST PASS')
                    
                }
                else{
                    console.log('No Text Available, TEST FAIL')
                }

            });

            break;

            case "xpath":
            element(by.xpath(locValue)).getAttribute('value').then((text)=>{
                if (text.localeCompare(parm)) {

                    console.log(text + ', TEST PASS')
                    
                }
                else{
                    console.log('No Text Available, TEST FAIL')
                }

            });
            break;

            case "css":
            element(by.css(locValue)).getAttribute('value').then((text)=>{
                if (text.localeCompare(parm)) {

                    console.log(text + ', TEST PASS')
                    
                }
                else{
                    console.log('No Text Available, TEST FAIL')
                }

            });

            break;

            case "model":
            element(by.model(locValue)).getAttribute('value').then((text)=>{
                if (text.localeCompare(parm)) {

                    console.log(text + ', TEST PASS')
                    
                }
                else{
                    console.log('No Text Available, TEST FAIL')
                }

            });
            break;

            case "binding":
            element(by.binding(locValue)).getAttribute('value').then((text)=>{
                if (text.localeCompare(parm)) {

                    console.log(text + ', TEST PASS')
                    
                }
                else{
                    console.log('No Text Available, TEST FAIL')
                }

            });

            break;

            case "name":
            element(by.name(locValue)).getAttribute('value').then((text)=>{
                if (text.localeCompare(parm)) {

                    console.log(text + ', TEST PASS')
                    
                }
                else{
                    console.log('No Text Available, TEST FAIL')
                }

            });
            break;

            case "className":
            element(by.className(locValue)).getAttribute('value').then((text)=>{
                if (text.localeCompare(parm)) {

                    console.log(text + ', TEST PASS')
                    
                }
                else{
                    console.log('No Text Available, TEST FAIL')
                }

            });
            break;

            case "linkText":
            element(by.linkText(locValue)).getAttribute('value').then((text)=>{
                if (text.localeCompare(parm)) {

                    console.log(text + ', TEST PASS')
                    
                }
                else{
                    console.log('No Text Available, TEST FAIL')
                }

            });
            break;

            case "partialLinkText":
            element(by.partialLinkText(locValue)).getAttribute('value').then((text)=>{
                if (text.localeCompare(parm)) {

                    console.log(text + ', TEST PASS')
                    
                }
                else{
                    console.log('No Text Available, TEST FAIL')
                }

            });

            break;

            case "partialButtonText":
            element(by.partialButtonText(locValue)).getAttribute('value').then((text)=>{
                if (text.localeCompare(parm)) {

                    console.log(text + ', TEST PASS')
                    
                }
                else{
                    console.log('No Text Available, TEST FAIL')
                }

            });

            break;

            case "buttonText":
            element(by.buttonText(locValue)).getAttribute('value').then((text)=>{
                if (text.localeCompare(parm)) {

                    console.log(text + ', TEST PASS')
                    
                }
                else{
                    console.log('No Text Available, TEST FAIL')
                }

            });
            break;
                    
            default:
            console.log('No Locator Found')
                break;
        }
    }

    getAttributeText(locType:string, locValue:string, parm:string){
        switch (locType) {
            case "id":
            element(by.id(locValue)).getAttribute('text').then((text)=>{
                if (text.localeCompare(parm)) {

                    console.log(text + ', TEST PASS')
                    
                }
                else{
                    console.log('No Text Available, TEST FAIL')
                }

            });
            break;

            case "xpath":
            element(by.xpath(locValue)).getAttribute('text').then((text)=>{
                if (text.localeCompare(parm)) {

                    console.log(text + ', TEST PASS')
                    
                }
                else{
                    console.log('No Text Available, TEST FAIL')
                }

            });

            break;

            case "css":
            element(by.css(locValue)).getAttribute('text').then((text)=>{
                if (text.localeCompare(parm)) {

                    console.log(text + ', TEST PASS')
                    
                }
                else{
                    console.log('No Text Available, TEST FAIL')
                }

            });

            break;

            case "model":
            element(by.model(locValue)).getAttribute('text').then((text)=>{
                if (text.localeCompare(parm)) {

                    console.log(text + ', TEST PASS')
                    
                }
                else{
                    console.log('No Text Available, TEST FAIL')
                }

            });

            break;

            case "binding":
            element(by.binding(locValue)).getAttribute('text').then((text)=>{
                if (text.localeCompare(parm)) {

                    console.log(text + ', TEST PASS')
                    
                }
                else{
                    console.log('No Text Available, TEST FAIL')
                }

            });

            break;

            case "name":
            element(by.name(locValue)).getAttribute('text').then((text)=>{
                if (text.localeCompare(parm)) {

                    console.log(text + ', TEST PASS')
                    
                }
                else{
                    console.log('No Text Available, TEST FAIL')
                }

            });
            break;

            case "className":
            element(by.className(locValue)).getAttribute('text').then((text)=>{
                if (text.localeCompare(parm)) {

                    console.log(text + ', TEST PASS')
                    
                }
                else{
                    console.log('No Text Available, TEST FAIL')
                }

            });

            break;

            case "linkText":
            element(by.linkText(locValue)).getAttribute('text').then((text)=>{
                if (text.localeCompare(parm)) {

                    console.log(text + ', TEST PASS')
                    
                }
                else{
                    console.log('No Text Available, TEST FAIL')
                }

            });

            break;

            case "partialLinkText":
            element(by.partialLinkText(locValue)).getAttribute('text').then((text)=>{
                if (text.localeCompare(parm)) {

                    console.log(text + ', TEST PASS')
                    
                }
                else{
                    console.log('No Text Available, TEST FAIL')
                }

            });

            break;

            case "partialButtonText":
            element(by.partialButtonText(locValue)).getAttribute('text').then((text)=>{
                if (text.localeCompare(parm)) {

                    console.log(text + ', TEST PASS')
                    
                }
                else{
                    console.log('No Text Available, TEST FAIL')
                }

            });

            break;

            case "buttonText":
            element(by.buttonText(locValue)).getAttribute('text').then((text)=>{
                if (text.localeCompare(parm)) {

                    console.log(text + ', TEST PASS')
                    
                }
                else{
                    console.log('No Text Available, TEST FAIL')
                }

            });
            break;
                    
            default:
            console.log('No Locator Found')
                break;
        } 
    }

    hovering(locType:string, locValue:string){

        var oElement;
        switch (locType) {
            case "id":
            oElement = element(by.id(locValue));
            browser.actions().mouseMove(oElement).perform();                
            break;

            case "xpath":
            oElement = element(by.xpath(locValue));
            browser.action().mouseMove(oElement).perform();
            break;

            case "css":
            oElement= element(by.css(locValue));
            browser.actions().mouseMove(oElement).perform();
            break;

            case "model":
            oElement = element(by.model(locValue));
            browser.actions().mouseMove(oElement).perform();
            break;

            case "binding":
            oElement = element(by.binding(locValue));
            browser.actions().mouseMove(oElement).perform()
            break;

            case "name":
            oElement = element(by.name(locValue));
            browser.actions().mouseMove(oElement).perform();
            break;

            case "className":
            oElement = element(by.className(locValue));
            browser.actions().mouseMove(oElement).perform();
            break;

            case "linkText":
            oElement = element(by.linkText(locValue));
            browser.actions().mouseMove(oElement).perform();
            break;

            case "partialLinkText":
            oElement = element(by.partialButtonText(locValue));
            browser.actions().mouseMove(oElement).perform();
            break;

            case "partialButtonText":
            oElement = element(by.partialButtonText(locValue));
            browser.actions().mouseMove(oElement).perform();
            break;

            case "buttonText":
            oElement = element(by.buttonText(locValue));
            browser.actions().mouseMove(oElement).perform();
            break;
                    
            default:
            console.log('No Locator Found')
                break;
        }
    }

    selectComboBox(locType:string, locValue:string, parm:string){

        var oElement;
        switch (locType) {
            case "id":
            element(by.id(locValue)).element(by.css('option:checked'))
            .getAttribute('value').then((text)=>{
                if (text.localeCompare(parm)) {
                    console.log(text + ', TEST PASS')
                }
                else{
                    console.log('No text Found, TEST FAIL')
                }
            });

            break;



            case "xpath":
            element(by.xpath(locValue)).element(by.css('option:checked'))
            .getAttribute('value').then((text)=>{
                if (text.localeCompare(parm)) {
                    console.log(text + ', TEST PASS')
                }
                else{
                    console.log('No text Found, TEST FAIL')
                }
            });
            break;


            case "css":
            element(by.css(locValue)).element(by.css('option:checked'))
            .getAttribute('value').then((text)=>{
                if (text.localeCompare(parm)) {
                    console.log(text + ', TEST PASS')
                }
                else{
                    console.log('No text Found, TEST FAIL')
                }
            });
            break;


            case "model":
            element(by.model(locValue)).element(by.css('option:checked'))
            .getAttribute('value').then((text)=>{
                if (text.localeCompare(parm)) {
                    console.log(text + ', TEST PASS')
                }
                else{
                    console.log('No text Found, TEST FAIL')
                }
            });
            break;

            case "binding":
            element(by.binding(locValue)).element(by.css('option:checked'))
            .getAttribute('value').then((text)=>{
                if (text.localeCompare(parm)) {
                    console.log(text + ', TEST PASS')
                }
                else{
                    console.log('No text Found, TEST FAIL')
                }
            });
            break;



            case "name":
            element(by.name(locValue)).element(by.css('option:checked'))
            .getAttribute('value').then((text)=>{
                if (text.localeCompare(parm)) {
                    console.log(text + ', TEST PASS')
                }
                else{
                    console.log('No text Found, TEST FAIL')
                }
            });

            break;



            case "className":
            element(by.className(locValue)).element(by.css('option:checked'))
            .getAttribute('value').then((text)=>{
                if (text.localeCompare(parm)) {
                    console.log(text + ', TEST PASS')
                }
                else{
                    console.log('No text Found, TEST FAIL')
                }
            });
            break;



            case "linkText":
            element(by.linkText(locValue)).element(by.css('option:checked'))
            .getAttribute('value').then((text)=>{
                if (text.localeCompare(parm)) {
                    console.log(text + ', TEST PASS')
                }
                else{
                    console.log('No text Found, TEST FAIL')
                }
            });
            break;

            case "partialLinkText":
            element(by.partialLinkText(locValue)).element(by.css('option:checked'))
            .getAttribute('value').then((text)=>{
                if (text.localeCompare(parm)) {
                    console.log(text + ', TEST PASS')
                }
                else{
                    console.log('No text Found, TEST FAIL')
                }
            });
            break;


            case "partialButtonText":
            element(by.partialButtonText(locValue)).element(by.css('option:checked'))
            .getAttribute('value').then((text)=>{
                if (text.localeCompare(parm)) {
                    console.log(text + ', TEST PASS')
                }
                else{
                    console.log('No text Found, TEST FAIL')
                }
            });
            break;

            case "buttonText":
            element(by.buttonText(locValue)).element(by.css('option:checked'))
            .getAttribute('value').then((text)=>{
                if (text.localeCompare(parm)) {
                    console.log(text + ', TEST PASS')
                }
                else{
                    console.log('No text Found, TEST FAIL')
                }
            });

            break;
                    
            default:
            console.log('No Locator Found')
                break;
        }
    }

    selectInsurance(amount : string){
        var inamount=element(by.name('dnn$ctr656$GetaQuote$ucGetAQuote$ddlAmount'));
        inamount.$(amount).click();

    }

     firstName = element(by.css('#dnn_ctr656_GetaQuote_ucGetAQuote_txtFirstName'));
     lastName= element(by.css('#dnn_ctr656_GetaQuote_ucGetAQuote_txtLastName'));
     email= element(by.name('dnn$ctr656$GetaQuote$ucGetAQuote$txtEmail'));
     phone= element(by.name('dnn$ctr656$GetaQuote$ucGetAQuote$txtPhone'));
     genderRadioBtn = element(by.id('dnn_ctr656_GetaQuote_ucGetAQuote_rdoGenderMale'));
     nicontineUse =element(by.id('dnn_ctr656_GetaQuote_ucGetAQuote_rdoNicotineNo'));
     TOAChBox=element(by.name('dnn$ctr656$GetaQuote$ucGetAQuote$chkTOS'));
     getAQuoteBtn=element(by.css('#dnn_ctr656_GetaQuote_ucGetAQuote_SubmitGetAQuote'));

    
}