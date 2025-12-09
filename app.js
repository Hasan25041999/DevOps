const express=require('express');
const app=express();
const PORT = process.env.PORT||3000;

app.get("/",(req,res)=>{
    res.send("Welcome Hasan !")
})

app.listen(PORT,()=>{
    console.log(`Server is Running Port ${PORT}`)
})