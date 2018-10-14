"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const exceljs_1 = require("exceljs");
let path = require("path");
class ReusableFun {
    constructor() {
        this.firstName = protractor_1.element(protractor_1.by.css('#dnn_ctr656_GetaQuote_ucGetAQuote_txtFirstName'));
        this.lastName = protractor_1.element(protractor_1.by.css('#dnn_ctr656_GetaQuote_ucGetAQuote_txtLastName'));
        this.email = protractor_1.element(protractor_1.by.name('dnn$ctr656$GetaQuote$ucGetAQuote$txtEmail'));
        this.phone = protractor_1.element(protractor_1.by.name('dnn$ctr656$GetaQuote$ucGetAQuote$txtPhone'));
        this.genderRadioBtn = protractor_1.element(protractor_1.by.id('dnn_ctr656_GetaQuote_ucGetAQuote_rdoGenderMale'));
        this.nicontineUse = protractor_1.element(protractor_1.by.id('dnn_ctr656_GetaQuote_ucGetAQuote_rdoNicotineNo'));
        this.TOAChBox = protractor_1.element(protractor_1.by.name('dnn$ctr656$GetaQuote$ucGetAQuote$chkTOS'));
        this.getAQuoteBtn = protractor_1.element(protractor_1.by.css('#dnn_ctr656_GetaQuote_ucGetAQuote_SubmitGetAQuote'));
    }
    Elligibility(selectMember) {
        var selectEligibility = protractor_1.element(protractor_1.by.name('dnn$ctr656$GetaQuote$ucGetAQuote$dlstMember'));
        selectEligibility.$(selectMember).click();
        console.log(selectEligibility);
    }
    quitDriver(browser) {
        browser.quit();
    }
    fileUpload(locType, locValue, filePath) {
        var oElement;
        switch (locType) {
            case "css":
                oElement = protractor_1.element(protractor_1.by.css(locValue));
                var ele = protractor_1.element(protractor_1.by.css('input[type=file]'));
                ele.sendKeys(filePath);
                oElement.submit();
                protractor_1.browser.sleep(3000);
                break;
            case "xpath":
                oElement = protractor_1.element(protractor_1.by.xpath(locValue));
                var ele = protractor_1.element(protractor_1.by.css('input[type=file]'));
                ele.sendKeys(filePath);
                oElement.submit();
                protractor_1.browser.sleep(3000);
                break;
            case "name":
                oElement = protractor_1.element(protractor_1.by.name(locValue));
                var ele = protractor_1.element(protractor_1.by.css('input[type=file]'));
                ele.sendKeys(filePath);
                oElement.submit();
                protractor_1.browser.sleep(3000);
                break;
            case "id":
                oElement = protractor_1.element(protractor_1.by.id(locValue));
                var ele = protractor_1.element(protractor_1.by.css('input[type=file]'));
                ele.sendKeys(filePath);
                oElement.submit();
                protractor_1.browser.sleep(3000);
                break;
            case "model":
                oElement = protractor_1.element(protractor_1.by.model(locValue));
                var ele = protractor_1.element(protractor_1.by.css('input[type=file]'));
                ele.sendKeys(filePath);
                oElement.submit();
                protractor_1.browser.sleep(3000);
                break;
            case "binding":
                oElement = protractor_1.element(protractor_1.by.binding(locValue));
                var ele = protractor_1.element(protractor_1.by.css('input[type=file]'));
                ele.sendKeys(filePath);
                oElement.submit();
                protractor_1.browser.sleep(3000);
                break;
            case "linkText":
                oElement = protractor_1.element(protractor_1.by.linkText(locValue));
                var ele = protractor_1.element(protractor_1.by.css('input[type=file]'));
                ele.sendKeys(filePath);
                oElement.submit();
                protractor_1.browser.sleep(3000);
                break;
            case "partialLinkText":
                oElement = protractor_1.element(protractor_1.by.partialLinkText(locValue));
                var ele = protractor_1.element(protractor_1.by.css('input[type=file]'));
                ele.sendKeys(filePath);
                oElement.submit();
                protractor_1.browser.sleep(3000);
                break;
            case "buttonText":
                oElement = protractor_1.element(protractor_1.by.buttonText(locValue));
                var ele = protractor_1.element(protractor_1.by.css('input[type=file]'));
                ele.sendKeys(filePath);
                oElement.submit();
                protractor_1.browser.sleep(3000);
                break;
        }
    }
    navigateUrl(url) {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get(url);
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.manage().deleteAllCookies();
        protractor_1.browser.manage().timeouts().implicitlyWait(10);
        protractor_1.browser.manage().timeouts().pageLoadTimeout(20);
    }
    excelReaderMain(filePath, sheetName) {
        protractor_1.browser.manage().timeouts().implicitlyWait(30000);
        // create object for workbook
        var wb = new exceljs_1.Workbook();
        // read xlsx file type
        wb.xlsx.readFile(filePath).then(function () {
            //sheet object
            let sheet = wb.getWorksheet(sheetName);
            let row = sheet.rowCount;
            console.log("total number of rows : " + row);
            let col = sheet.columnCount;
            let dataMain = Array[row][col];
            for (let i = 1; i < row + 1; i++) {
                for (let j = 1; j < col + 1; j++) {
                    dataMain[i][j] = sheet.getRow(i).getCell(j).value;
                    // console.log('data: '+ data)
                }
            }
            return dataMain;
        });
    }
    excelDataReader(filePath, sheetName) {
        var wb = new exceljs_1.Workbook();
        wb.xlsx.readFile(filePath);
        var ws = wb.getWorksheet(sheetName);
        var row = ws.rowCount;
        var col = ws.columnCount;
        let data = Array[row][col];
        for (let i = 1; i < row + 1; i++) {
            for (let j = 1; j < col + 1; j++) {
                data[i][j] = ws.getRow(i).getCell(j).toString();
            }
        }
        return data;
    }
    selectElement(locType, locValue, parm) {
        switch (locType) {
            case "id":
                protractor_1.element(protractor_1.by.id(locValue)).$(parm).click();
                protractor_1.browser.sleep(500);
                break;
            case "xpath":
                protractor_1.element(protractor_1.by.xpath(locValue)).$(parm).click();
                protractor_1.browser.sleep(500);
                break;
            case "css":
                protractor_1.element(protractor_1.by.css(locType)).$(parm).click();
                protractor_1.browser.sleep(500);
                break;
            case "model":
                protractor_1.element(protractor_1.by.model(locValue)).$(parm).click();
                protractor_1.browser.sleep(500);
                break;
            case "binding":
                protractor_1.element(protractor_1.by.binding(locValue)).$(parm).click();
                protractor_1.browser.sleep(500);
                break;
            case "name":
                protractor_1.element(protractor_1.by.name(locValue)).$(parm).click();
                protractor_1.browser.sleep(500);
                break;
            case "className":
                protractor_1.element(protractor_1.by.className(locValue)).$(parm).click();
                protractor_1.browser.sleep(500);
                break;
            case "linkText":
                protractor_1.element(protractor_1.by.linkText(locValue)).$(parm).click();
                protractor_1.browser.sleep(500);
                break;
            case "partiallinkText":
                protractor_1.element(protractor_1.by.partialLinkText(locValue)).$(parm).click();
                protractor_1.browser.sleep(500);
                break;
            case "partialButtonText":
                protractor_1.element(protractor_1.by.partialButtonText(locType)).$(parm).click();
                protractor_1.browser.sleep(500);
                break;
            default:
                console.log('No Locator Found');
                break;
        }
    }
    clickElement(locType, locValue) {
        switch (locType) {
            case "id":
                protractor_1.element(protractor_1.by.id(locValue)).click();
                protractor_1.browser.sleep(1000);
                break;
            case "xpath":
                protractor_1.element(protractor_1.by.xpath(locValue)).click();
                protractor_1.browser.sleep(500);
                break;
            case "css":
                protractor_1.element(protractor_1.by.css(locValue)).click();
                protractor_1.browser.sleep(500);
                break;
            case "model":
                protractor_1.element(protractor_1.by.model(locValue)).click();
                protractor_1.browser.sleep(500);
                break;
            case "binding":
                protractor_1.element(protractor_1.by.binding(locValue)).click();
                protractor_1.browser.sleep(500);
                break;
            case "name":
                protractor_1.element(protractor_1.by.name(locValue)).click();
                protractor_1.browser.sleep(500);
                break;
            case "className":
                protractor_1.element(protractor_1.by.className(locValue)).click();
                protractor_1.browser.sleep(500);
                break;
            case "linkText":
                protractor_1.element(protractor_1.by.linkText(locValue)).click();
                protractor_1.browser.sleep(500);
                break;
            case "partialLinkText":
                protractor_1.element(protractor_1.by.partialButtonText(locValue)).click();
                protractor_1.browser.sleep(500);
                break;
            case "partialButtonText":
                protractor_1.element(protractor_1.by.partialButtonText(locValue)).click();
                protractor_1.browser.sleep(500);
                break;
            case "buttonText":
                protractor_1.element(protractor_1.by.buttonText(locValue)).click();
                protractor_1.browser.sleep(500);
                break;
            default:
                console.log('No Locator Found');
                break;
        }
    }
    sendText(locType, locValue, parm) {
        switch (locType) {
            case "id":
                protractor_1.element(protractor_1.by.id(locValue)).sendKeys(parm);
                break;
            case "xpath":
                protractor_1.element(protractor_1.by.xpath(locValue)).sendKeys(parm);
                break;
            case "css":
                protractor_1.element(protractor_1.by.css(locValue)).sendKeys(parm);
                protractor_1.browser.sleep(3000);
                break;
            case "model":
                protractor_1.element(protractor_1.by.model(locValue)).sendKeys(parm);
                break;
            case "binding":
                protractor_1.element(protractor_1.by.binding(locValue)).sendKeys(parm);
                break;
            case "name":
                protractor_1.element(protractor_1.by.name(locValue)).sendKeys(parm);
                break;
            case "className":
                protractor_1.element(protractor_1.by.className(locValue)).sendKeys(parm);
                break;
            case "linkText":
                protractor_1.element(protractor_1.by.linkText(locValue)).sendKeys(parm);
                break;
            case "partialLinkText":
                protractor_1.element(protractor_1.by.partialButtonText(locValue)).sendKeys(parm);
                break;
            case "partialButtonText":
                protractor_1.element(protractor_1.by.partialButtonText(locValue)).sendKeys(parm);
                break;
            case "buttonText":
                protractor_1.element(protractor_1.by.buttonText(locValue)).sendKeys(parm);
                break;
        }
    }
    clearElement(locType, locValue) {
        switch (locType) {
            case "id":
                protractor_1.element(protractor_1.by.id(locValue)).clear();
                break;
            case "xpath":
                protractor_1.element(protractor_1.by.xpath(locValue)).clear();
                break;
            case "css":
                protractor_1.element(protractor_1.by.css(locValue)).clear();
                break;
            case "model":
                protractor_1.element(protractor_1.by.model(locValue)).clear();
                break;
            case "binding":
                protractor_1.element(protractor_1.by.binding(locValue)).clear();
                break;
            case "name":
                protractor_1.element(protractor_1.by.name(locValue)).clear();
                break;
            case "className":
                protractor_1.element(protractor_1.by.className(locValue)).clear();
                break;
            case "linkText":
                protractor_1.element(protractor_1.by.linkText(locValue)).clear();
                break;
            case "partialLinkText":
                protractor_1.element(protractor_1.by.partialButtonText(locValue)).clear();
                break;
            case "partialButtonText":
                protractor_1.element(protractor_1.by.partialButtonText(locValue)).clear();
                break;
            case "buttonText":
                protractor_1.element(protractor_1.by.buttonText(locValue)).clear();
                break;
            default:
                console.log('No Locator Found');
                break;
        }
    }
    getTextMain(locType, locValue, parm) {
        //var text;
        switch (locType) {
            case "id":
                protractor_1.element(protractor_1.by.id(locValue)).getText().then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Found');
                    }
                });
                protractor_1.browser.sleep(1000);
                break;
            case "xpath":
                protractor_1.element(protractor_1.by.xpath(locValue)).getText().then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Found');
                    }
                });
                protractor_1.browser.sleep(1000);
                break;
            case "css":
                protractor_1.element(protractor_1.by.css(locValue)).getText().then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Found');
                    }
                });
                protractor_1.browser.sleep(1000);
                break;
            case "model":
                protractor_1.element(protractor_1.by.model(locValue)).getText().then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Found');
                    }
                });
                protractor_1.browser.sleep(1000);
                break;
            case "binding":
                protractor_1.element(protractor_1.by.binding(locValue)).getText().then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Found');
                    }
                });
                protractor_1.browser.sleep(1000);
                break;
            case "name":
                protractor_1.element(protractor_1.by.name(locValue)).getText().then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Found');
                    }
                });
                protractor_1.browser.sleep(1000);
                break;
            case "className":
                protractor_1.element(protractor_1.by.className(locValue)).getText().then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Found');
                    }
                });
                protractor_1.browser.sleep(1000);
                break;
            case "linkText":
                protractor_1.element(protractor_1.by.linkText(locValue)).getText().then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Found');
                    }
                });
                protractor_1.browser.sleep(1000);
                break;
            case "partialLinkText":
                protractor_1.element(protractor_1.by.partialLinkText(locValue)).getText().then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Found');
                    }
                });
                protractor_1.browser.sleep(1000);
                break;
            case "partialButtonText":
                protractor_1.element(protractor_1.by.partialButtonText(locValue)).getText().then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Found');
                    }
                });
                protractor_1.browser.sleep(1000);
                break;
            case "buttonText":
                protractor_1.element(protractor_1.by.buttonText(locValue)).getText().then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Found');
                    }
                });
                protractor_1.browser.sleep(1000);
                break;
            default:
                console.log('No Locator Found');
                break;
        }
    }
    getAttributeValue(locType, locValue, parm) {
        // var text;
        switch (locType) {
            case "id":
                protractor_1.element(protractor_1.by.id(locValue)).getAttribute('value').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Available, TEST FAIL');
                    }
                });
                break;
            case "xpath":
                protractor_1.element(protractor_1.by.xpath(locValue)).getAttribute('value').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Available, TEST FAIL');
                    }
                });
                break;
            case "css":
                protractor_1.element(protractor_1.by.css(locValue)).getAttribute('value').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Available, TEST FAIL');
                    }
                });
                break;
            case "model":
                protractor_1.element(protractor_1.by.model(locValue)).getAttribute('value').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Available, TEST FAIL');
                    }
                });
                break;
            case "binding":
                protractor_1.element(protractor_1.by.binding(locValue)).getAttribute('value').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Available, TEST FAIL');
                    }
                });
                break;
            case "name":
                protractor_1.element(protractor_1.by.name(locValue)).getAttribute('value').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Available, TEST FAIL');
                    }
                });
                break;
            case "className":
                protractor_1.element(protractor_1.by.className(locValue)).getAttribute('value').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Available, TEST FAIL');
                    }
                });
                break;
            case "linkText":
                protractor_1.element(protractor_1.by.linkText(locValue)).getAttribute('value').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Available, TEST FAIL');
                    }
                });
                break;
            case "partialLinkText":
                protractor_1.element(protractor_1.by.partialLinkText(locValue)).getAttribute('value').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Available, TEST FAIL');
                    }
                });
                break;
            case "partialButtonText":
                protractor_1.element(protractor_1.by.partialButtonText(locValue)).getAttribute('value').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Available, TEST FAIL');
                    }
                });
                break;
            case "buttonText":
                protractor_1.element(protractor_1.by.buttonText(locValue)).getAttribute('value').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Available, TEST FAIL');
                    }
                });
                break;
            default:
                console.log('No Locator Found');
                break;
        }
    }
    getAttributeText(locType, locValue, parm) {
        switch (locType) {
            case "id":
                protractor_1.element(protractor_1.by.id(locValue)).getAttribute('text').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Available, TEST FAIL');
                    }
                });
                break;
            case "xpath":
                protractor_1.element(protractor_1.by.xpath(locValue)).getAttribute('text').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Available, TEST FAIL');
                    }
                });
                break;
            case "css":
                protractor_1.element(protractor_1.by.css(locValue)).getAttribute('text').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Available, TEST FAIL');
                    }
                });
                break;
            case "model":
                protractor_1.element(protractor_1.by.model(locValue)).getAttribute('text').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Available, TEST FAIL');
                    }
                });
                break;
            case "binding":
                protractor_1.element(protractor_1.by.binding(locValue)).getAttribute('text').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Available, TEST FAIL');
                    }
                });
                break;
            case "name":
                protractor_1.element(protractor_1.by.name(locValue)).getAttribute('text').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Available, TEST FAIL');
                    }
                });
                break;
            case "className":
                protractor_1.element(protractor_1.by.className(locValue)).getAttribute('text').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Available, TEST FAIL');
                    }
                });
                break;
            case "linkText":
                protractor_1.element(protractor_1.by.linkText(locValue)).getAttribute('text').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Available, TEST FAIL');
                    }
                });
                break;
            case "partialLinkText":
                protractor_1.element(protractor_1.by.partialLinkText(locValue)).getAttribute('text').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Available, TEST FAIL');
                    }
                });
                break;
            case "partialButtonText":
                protractor_1.element(protractor_1.by.partialButtonText(locValue)).getAttribute('text').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Available, TEST FAIL');
                    }
                });
                break;
            case "buttonText":
                protractor_1.element(protractor_1.by.buttonText(locValue)).getAttribute('text').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No Text Available, TEST FAIL');
                    }
                });
                break;
            default:
                console.log('No Locator Found');
                break;
        }
    }
    hovering(locType, locValue) {
        var oElement;
        switch (locType) {
            case "id":
                oElement = protractor_1.element(protractor_1.by.id(locValue));
                protractor_1.browser.actions().mouseMove(oElement).perform();
                break;
            case "xpath":
                oElement = protractor_1.element(protractor_1.by.xpath(locValue));
                protractor_1.browser.action().mouseMove(oElement).perform();
                break;
            case "css":
                oElement = protractor_1.element(protractor_1.by.css(locValue));
                protractor_1.browser.actions().mouseMove(oElement).perform();
                break;
            case "model":
                oElement = protractor_1.element(protractor_1.by.model(locValue));
                protractor_1.browser.actions().mouseMove(oElement).perform();
                break;
            case "binding":
                oElement = protractor_1.element(protractor_1.by.binding(locValue));
                protractor_1.browser.actions().mouseMove(oElement).perform();
                break;
            case "name":
                oElement = protractor_1.element(protractor_1.by.name(locValue));
                protractor_1.browser.actions().mouseMove(oElement).perform();
                break;
            case "className":
                oElement = protractor_1.element(protractor_1.by.className(locValue));
                protractor_1.browser.actions().mouseMove(oElement).perform();
                break;
            case "linkText":
                oElement = protractor_1.element(protractor_1.by.linkText(locValue));
                protractor_1.browser.actions().mouseMove(oElement).perform();
                break;
            case "partialLinkText":
                oElement = protractor_1.element(protractor_1.by.partialButtonText(locValue));
                protractor_1.browser.actions().mouseMove(oElement).perform();
                break;
            case "partialButtonText":
                oElement = protractor_1.element(protractor_1.by.partialButtonText(locValue));
                protractor_1.browser.actions().mouseMove(oElement).perform();
                break;
            case "buttonText":
                oElement = protractor_1.element(protractor_1.by.buttonText(locValue));
                protractor_1.browser.actions().mouseMove(oElement).perform();
                break;
            default:
                console.log('No Locator Found');
                break;
        }
    }
    selectComboBox(locType, locValue, parm) {
        var oElement;
        switch (locType) {
            case "id":
                protractor_1.element(protractor_1.by.id(locValue)).element(protractor_1.by.css('option:checked'))
                    .getAttribute('value').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No text Found, TEST FAIL');
                    }
                });
                break;
            case "xpath":
                protractor_1.element(protractor_1.by.xpath(locValue)).element(protractor_1.by.css('option:checked'))
                    .getAttribute('value').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No text Found, TEST FAIL');
                    }
                });
                break;
            case "css":
                protractor_1.element(protractor_1.by.css(locValue)).element(protractor_1.by.css('option:checked'))
                    .getAttribute('value').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No text Found, TEST FAIL');
                    }
                });
                break;
            case "model":
                protractor_1.element(protractor_1.by.model(locValue)).element(protractor_1.by.css('option:checked'))
                    .getAttribute('value').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No text Found, TEST FAIL');
                    }
                });
                break;
            case "binding":
                protractor_1.element(protractor_1.by.binding(locValue)).element(protractor_1.by.css('option:checked'))
                    .getAttribute('value').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No text Found, TEST FAIL');
                    }
                });
                break;
            case "name":
                protractor_1.element(protractor_1.by.name(locValue)).element(protractor_1.by.css('option:checked'))
                    .getAttribute('value').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No text Found, TEST FAIL');
                    }
                });
                break;
            case "className":
                protractor_1.element(protractor_1.by.className(locValue)).element(protractor_1.by.css('option:checked'))
                    .getAttribute('value').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No text Found, TEST FAIL');
                    }
                });
                break;
            case "linkText":
                protractor_1.element(protractor_1.by.linkText(locValue)).element(protractor_1.by.css('option:checked'))
                    .getAttribute('value').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No text Found, TEST FAIL');
                    }
                });
                break;
            case "partialLinkText":
                protractor_1.element(protractor_1.by.partialLinkText(locValue)).element(protractor_1.by.css('option:checked'))
                    .getAttribute('value').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No text Found, TEST FAIL');
                    }
                });
                break;
            case "partialButtonText":
                protractor_1.element(protractor_1.by.partialButtonText(locValue)).element(protractor_1.by.css('option:checked'))
                    .getAttribute('value').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No text Found, TEST FAIL');
                    }
                });
                break;
            case "buttonText":
                protractor_1.element(protractor_1.by.buttonText(locValue)).element(protractor_1.by.css('option:checked'))
                    .getAttribute('value').then((text) => {
                    if (text.localeCompare(parm)) {
                        console.log(text + ', TEST PASS');
                    }
                    else {
                        console.log('No text Found, TEST FAIL');
                    }
                });
                break;
            default:
                console.log('No Locator Found');
                break;
        }
    }
    selectInsurance(amount) {
        var inamount = protractor_1.element(protractor_1.by.name('dnn$ctr656$GetaQuote$ucGetAQuote$ddlAmount'));
        inamount.$(amount).click();
    }
}
exports.ReusableFun = ReusableFun;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb25MaWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlcy9GdW5jdGlvbkxpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3RTtBQUN4RSxxQ0FBdUQ7QUFHdkQsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTNCLE1BQWEsV0FBVztJQUF4QjtRQStqQ0ssY0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDLENBQUM7UUFDOUUsYUFBUSxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLENBQUM7UUFDM0UsVUFBSyxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUM7UUFDckUsVUFBSyxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUM7UUFDckUsbUJBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxDQUFDO1FBQ2xGLGlCQUFZLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGdEQUFnRCxDQUFDLENBQUMsQ0FBQztRQUMvRSxhQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQztRQUNyRSxpQkFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsQ0FBQyxDQUFDLENBQUM7SUFHdkYsQ0FBQztJQXZrQ0csWUFBWSxDQUFDLFlBQW9CO1FBQzdCLElBQUksaUJBQWlCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLDZDQUE2QyxDQUFDLENBQUMsQ0FBQztRQUN4RixpQkFBaUIsQ0FBQyxDQUFD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