const express = require('express')

const app = express()

app.use((req,res,next)=>{
    console.log(`ruta :${req.url}, metodo: ${req.method}`)
    next()
})

app.get('/profile',(req,res)=>{
    res.send('profile page')
})

app.get('/about',(req,res)=>{
    res.send('about page')
})






app.listen(3000)
console.log("escuchando en puerto 3000")