sum = (number1,number2) =>{

    
    
    
    
        const add = number1 + number2; 
        console.log(`Result of Sum: ${add}`);
        if(add >= 0)
            return add;
        else
            throw Error("Resultado da soma deve  ser igual ou maior que ZERO");
      
  
    
};

toDecrease =(number1,number2) =>{
    
    if(isNaN(number1) || isNaN(number2)) throw Error("numeros invalidos");
    console.log("entrei toDecrease ",number1, number2)

    const decrease = number1 - number2; 
   
    
    console.log(`Resultado  decrease: ${decrease}`);
  
    if(decrease >= 0)
        return decrease;
   else
        throw Error("Resultado da diferença deve  ser igual ou maior que ZERO");
};

multiplication =(number1,number2) =>{
    
    if(isNaN(number1) || isNaN(number2)) throw Error("Por favor Digite um número");

    const mult = number1 * number2; 
   
    console.log(`Result of to mult: ${mult}`);
  
    if(mult >= 0)
        return mult;
   else
        throw Error("Resultado da multiplicação deve  ser igual ou maior que ZERO");
};

division =(number1,number2) =>{
    
    if(isNaN(number1) || isNaN(number2)) throw Error("Por favor Digite um número");

    const div = number1 * number2; 
   
    console.log(`Result of to div: ${div}`);
  
    if(div >= 0)
        return div;
   else
        throw Error("Resultado da divisão deve  ser igual ou maior que ZERO");
};








try {
    sum(1,2);
    toDecrease(2,1);
    multiplication(2,2);
    division(2,2);

    
} catch (error) {

    throw error;

    
    
}


module.exports = {sum,toDecrease,multiplication, division}

