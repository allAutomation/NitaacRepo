import { ReusableFun } from "../Functions/FunctionLib";


describe('', ()=>{

    it('dedebii', () =>{		
        var fn = new ReusableFun();
        var data= fn.excelReaderMain('./Data/KDT.xlsx', 'Exsisting Member');
       for (let i = 8; i < 18; i++) {
           //const data = Array[i][3];
           console.log(data[i][8]);

       }       
	});
});
