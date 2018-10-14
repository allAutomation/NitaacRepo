import { browser, element, by} from 'protractor';
import {Workbook, Worksheet, Cell, Row} from 'exceljs';
import { ReusableFun } from '../Functions/FunctionLib';
import { DriverProvider } from 'protractor/built/driverProviders';
import { DriverCodes } from '../Functions/ControlerCodes';
var fn =  new DriverCodes();
var email = new ReusableFun();

describe('Story1', function() {

	afterAll(function(){
		email.sendEmail('./Reports/screenshots/report.html');		
	})

	it('NITTAC USER Test1', function() {
		fn.deliveryScripts('./Data/KDT.xlsx', 'NewMember');	
		expect('buqaa').toEqual('uqaa');		
	});

	it('NITTAC USER Test2', function() {
		console.log('test one');
		expect('burii').toBe('buri');			
	});

	it('NITTAC USER Test3', function() {
		console.log('test two');			
	});

	it('NITTAC USER Test4', function() {
		console.log('test three');
		expect('buqaa').toBe('buqaa');				
	});

	it('NITTAC USER Test5 ', function() {
		console.log('test four');
		
		expect('shasho').toBe('Shasho');

	});
	it('NITTAC USER Test6', function() {
		console.log('test five');
		expect('shasho').toBe('shasho');				
	});

});

describe('Story2', function() {

	afterAll(function(){
		email.sendEmail('./Reports/screenshots/report.html');		
	});

	it('NITTAC USER Test1', function() {
		expect('buqaa').toBe('buqaa');	
	});

	it('NITTAC USER Test2', function() {
		console.log('test one');
		expect('shasho').toBe('buri');			
	});

	it('NITTAC USER Test3', function() {
		console.log('test two');			
	});

	it('NITTAC USER Test4', function() {
		console.log('test three');
		expect('buqaa').toBe('Shasho');				
	});

	it('NITTAC USER Test5', function() {
		console.log('test four');
		
		expect('shasho').toBe('Shasho');

	});
	it('NITTAC USER Test6', function() {
		console.log('test five');
		expect('shasho').toBe('Shasho');				
	});

});
describe('Story3', function() {

	afterAll(function(){
		email.sendEmail('./Reports/screenshots/report.html');		
	});

	it('NITTAC USER Test1', function() {
		expect('buqaa').toBe('uqaa');		
	});

	it('NITTAC USER Test2', function() {
		console.log('test one');
		expect('shasho').toBe('buri');			
	});

	it('NITTAC USER Test3', function() {
		console.log('test two');			
	});

	it('NITTAC USER Test4', function() {
		console.log('test three');
		expect('buqaa').toBe('Shasho');				
	});

	it('NITTAC USER Test5', function() {
		fn.deliveryScripts('./Data/KDT.xlsx', 'NewMember');	
		console.log('test four');
		
		expect('shasho').toBe('Shasho');

	});
	it('NITTAC USER Test6', function() {
		console.log('test five');
		expect('shasho').toBe('Shasho');				
	});

});


describe('Story4', function() {

	afterAll(function(){
		email.sendEmail('./Reports/screenshots/report.html');		
	});

	it('NITTAC USER Test1', function() {
		expect('buqaa').toBe('buqaa');		
	});

	it('NITTAC USER Test2', function() {
		console.log('test one');
		expect('shasho').toBe('buri');			
	});

	it('NITTAC USER Test3', function() {
		console.log('test two');			
	});

	it('NITTAC USER Test4', function() {
		console.log('test three');
		expect('buqaa').toBe('buqaa');				
	});

	it('NITTAC USER Test5', function() {
		console.log('test four');
		
		expect('shasho').toBe('Shasho');

	});
	it('NITTAC USER Test6', function() {
		console.log('test five');
		expect('shasho').toBe('shasho');				
	});

});



