const express=require('express')
const app=express()


//[GET] http://localhost:3000/
app.get('/',function(req,res){
    res.status(200).json({data:'todo salio bien'})
})
app.post('/',function(req,res){
    res.status(200).json({data:'todo salio bien'})
})

app.get('/home',function(req,res){
    res.status(200).json({data:'estamos en el Home'})
})



app.listen(3000,function(){
    console.log('Servidor escuchando en puerto 3000');
})

