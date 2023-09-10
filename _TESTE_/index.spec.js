const calc = require('../index');


describe('Calculator testes', ()=>{
   

    describe('Sum testes', ()=>{
        test("Function sum exist ", function() {
            console.log('primeiro'); 
              
           
            //expect(calc).not.toBeUndefined();
            expect(calc.sum).toBeDefined();
            expect(calc.toDecrease).toBeDefined();
            expect(calc.toDecrease).toBeDefined()
              
        });
        
        test(" sum two numbers ",()=>{
            expect(calc.sum(1,1)).toBe(2);
        });

        test('the function sum retun one number', () => {
            const result = calc.sum(2,3);
            expect(typeof result).toBe('number');
          });

    }) 
    describe(' Decrease testes', ()=>{
        test("differ two number cant less than zero",()=>{
            expect(calc.toDecrease(2,1)).not.toBeLessThan(0)
        });
        test('the function toDecrease does not return a string', () => {
            const result = calc.toDecrease(3,2);
            expect(typeof result).not.toBe('string');
          });
    
    })
    describe(' multiplication testes', ()=>{
        test("multiplication two number cant less than zero",()=>{
            expect(calc.multiplication(2,1)).not.toBeLessThan(0)
        });
        test('the function toDecrease does not return a string', () => {
            const result = calc.multiplication(3,2);
            expect(typeof result).not.toBe('string');
          });
    
    })

    describe(' division testes', ()=>{

        test("division two number cant less than zero",()=>{
            expect(calc.division(2,1)).not.toBeLessThan(0)
        });
        test('the function division does not return a string', () => {
            const result = calc.division(3,2);
            expect(typeof result).not.toBe('string');
          });
    
    })

})//final describe

