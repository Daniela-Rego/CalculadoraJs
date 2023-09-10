const express = require('express');
const app = express();

app.use(express.json());


app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post("/", (request, response)=>{
   console.log('request',request.body);
    const numero1 = request.body.num1;
    const numero2 = request.body.num2;
  
    const soma =numero1 +numero2;
   
 
    return response.status(201).send("Saldo final: "+soma);
 
 });
 


app.listen(3000,(err)=>{
    if(err){
        console.log('Servidor OFF');
    }else{
        console.log('Servidor ON');
    }
})