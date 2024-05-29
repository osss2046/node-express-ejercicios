// solo con Node


// const http = require('http')
// const fs = require('fs')
// const server = http.createServer((req,res)=>{
//     const read = fs.createReadStream('./static/index.html')
//     read.pipe(res)
// })

// server.listen(3000)
// console.log(`Server port ${3000}`)



// Con Express

const express = require('express')

const app = express()

app.get('/about', (req,res)=>{
    res.send('about')
})

app.get('/', (req,res)=>{
    res.send('Hello world')
})

app.get('/weather', (req,res)=>{
    res.send('the current weather is nice')
})

app.use((req,res)=>{
    res.status(404).send('No se encontro tu pagina')
})


app.listen(3000)
console.log("escuchando en puerto 3000")