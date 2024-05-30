const express = require('express')

const app = express()

app.get('/hello/:user',(req,res)=>{
    console.log(typeof req.params.user)
    res.send(`hola amigo ${req.params.user.toUpperCase()}`)
})


app.get('/add/:x/:y',(req,res)=>{
    // const resultado = Number(req.params.x) + Number(req.params.y)
    // mejor es descontruir
    const {x, y} = req.params
    const resultado = Number(x) + Number(y)
    res.send(`la suma es ${resultado}`)
})


app.get('/user/:username/photo',(req,res)=>{
   if  (req.params.username === 'Oscar'){
    return res.sendFile('./foto-curso.webp',{
        root:__dirname
    })
   }else{
    res.send('el usuario no tiene acceso')
   }
})

app.get('/nombre/:nombre/age/:age',(req,res)=>{
    res.send(`el usuario ${req.params.nombre} tiene ${req.params.age} años`)
})





app.listen(3000)
console.log("escuchando en puerto 3000")