"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FunctionLib_1 = require("../Functions/FunctionLib");
describe('', () => {
    it('dedebii', () => {
        var fn = new FunctionLib_1.ReusableFun();
        var data = fn.excelReaderMain('./Data/KDT.xlsx', 'Exsisting Member');
        for (let i = 8; i < 18; i++) {
            //const data = Array[i][3];
            console.log(data[i][8]);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZEV4Y2VsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVGVzdHMvcmVhZEV4Y2VsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMERBQXVEO0FBR3ZELFFBQVEsQ0FBQyxFQUFFLEVBQUUsR0FBRSxFQUFFO0lBRWIsRUFBRSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUU7UUFDZixJQUFJLEVBQUUsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQUMzQixJQUFJLElBQUksR0FBRSxFQUFFLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDckUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QiwyQkFBMkI7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUUzQjtJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMifQ==