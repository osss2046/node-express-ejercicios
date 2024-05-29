const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.get('/profile', (req,res)=>{
    res.send('profile page')
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