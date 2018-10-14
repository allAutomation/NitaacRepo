"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FunctionLib_1 = require("../Functions/FunctionLib");
const ControlerCodes_1 = require("../Functions/ControlerCodes");
var fn = new ControlerCodes_1.DriverCodes();
var email = new FunctionLib_1.ReusableFun();
describe('Story1', function () {
    afterAll(function () {
        email.sendEmail('./Data/KDT.xlsx');
    });
    it('NITTAC USER Test1', function () {
        fn.deliveryScripts('./Data/KDT.xlsx', 'NewMember');
        expect('uqaa').toEqual('uqaa');
    });
    it('NITTAC USER Test2', function () {
        console.log('test onectwo three four');
        expect('buri').toBe('buri');
    });
    it('NITTAC USER Test3', function () {
        console.log('test two');
        console.log('test two');
    });
    it('NITTAC USER Test4', function () {
        console.log('test three');
        expect('buqaa').toBe('buqaa');
    });
    it('NITTAC USER Test5 ', function () {
        console.log('test four');
        expect('shasho').toBe('shasho');
    });
    it('NITTAC USER Test6', function () {
        console.log('test five');
        expect('shasho').toBe('shasho');
    });
});
describe('Story2', function () {
    afterAll(function () {
        email.sendEmail('./Data/KDT.xlsx');
    });
    it('NITTAC USER Test1', function () {
        expect('buqaa').toBe('buqaa');
    });
    it('NITTAC USER Test2', function () {
        console.log('test one');
        expect('buri').toBe('buri');
    });
    it('NITTAC USER Test3', function () {
        console.log('test two');
    });
    it('NITTAC USER Test4', function () {
        console.log('test three');
        expect('buqaa').toBe('buqaa');
    });
    it('NITTAC USER Test5', function () {
        console.log('test four');
        expect('shasho').toBe('shasho');
    });
    it('NITTAC USER Test6', function () {
        console.log('test five');
        expect('shasho').toBe('shasho');
    });
});
describe('Story3', function () {
    afterAll(function () {
        email.sendEmail('./Data/KDT.xlsx');
    });
    it('NITTAC USER Test1', function () {
        expect('buqaa').toBe('buqaa');
    });
    it('NITTAC USER Test2', function () {
        console.log('test one');
        expect('buri').toBe('buri');
    });
    it('NITTAC USER Test3', function () {
        console.log('test two');
    });
    it('NITTAC USER Test4', function () {
        console.log('test three');
        expect('buqaa').toBe('buqaa');
    });
    it('NITTAC USER Test5', function () {
        fn.deliveryScripts('./Data/KDT.xlsx', 'NewMember');
        console.log('test four');
        expect('shasho').toBe('shasho');
    });
    it('NITTAC USER Test6', function () {
        console.log('test five');
        expect('shasho').toBe('shasho');
    });
});
describe('Story4', function () {
    afterAll(function () {
        email.sendEmail('./Data/KDT.xlsx');
    });
    it('NITTAC USER Test1', function () {
        expect('buqaa').toBe('buqaa');
    });
    it('NITTAC USER Test2', function () {
        console.log('test one');
        expect('buri').toBe('buri');
    });
    it('NITTAC USER Test3', function () {
        console.log('test two');
    });
    it('NITTAC USER Test4', function () {
        console.log('test three');
        expect('buqaa').toBe('buqaa');
    });
    it('NITTAC USER Test5', function () {
        console.log('test four');
        expect('shasho').toBe('shasho');
    });
    it('NITTAC USER Test6', function () {
        console.log('test five');
        expect('shasho').toBe('shasho');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWl0VHJwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVGVzdHMvc3VibWl0VHJwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsMERBQXVEO0FBRXZELGdFQUEwRDtBQUMxRCxJQUFJLEVBQUUsR0FBSSxJQUFJLDRCQUFXLEVBQUUsQ0FBQztBQUM1QixJQUFJLEtBQUssR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUU5QixRQUFRLENBQUMsUUFBUSxFQUFFO0lBRWxCLFFBQVEsQ0FBQztRQUNSLEtBQUssQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtRQUN2QixFQUFFLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUU7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUU7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDLENB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