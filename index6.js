const express = require('express')

const app = express()


app.get('/search',(req,res)=>{
    if (req.query.x === '20'){
        res.send('lista de libros')
    }else{
        res.send('pagina normal')
    }
})

app.get('/hello/:user',(req,res)=>{
   const {x , y} = req.query
    res.send(`hola amigo ${req.params.user.toUpperCase()}. su edad es ${x} y es de la ciudad ${y}`)
})


app.listen(3000)
console.log("escuchando en puerto 3000")