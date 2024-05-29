const express = require('express')

const app = express()

app.use((req,res,next)=>{
    console.log(`ruta :${req.url}, metodo: ${req.method}`)
    next()
})
app.use((req,res,next)=>{
    if (req.query.loggin == 'oscar@gmail.com'){
        next()
    }else{
        res.send('no autorizado')
    }
})


app.get('/dashboard',(req,res)=>{
    res.send('dashboard page')
})






app.listen(3000)
console.log("escuchando en puerto 3000")