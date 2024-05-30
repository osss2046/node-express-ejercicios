const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()


app.set('appName','Express prueba')
app.set('puerto','3000')
app.set('case sensitive rounting', true)


app.use(morgan('dev')) 
app.use(express.json())
// app.use('/publico',express.static('./static'))
app.use('/publico',express.static(path.resolve(__dirname,'..','static')))


app.get('/note.txt',(req,res)=>{
    res.send('este no es un archivo')
})

app.get('/profile', (req,res)=>{
    res.send('profile page')
})


// con esto no permite que accede a cualquier pagina
// app.use((req,res,next)=>{
//     if (req.query.loggin == 'oscar@gmail.com'){
//         next()
//     }else{
//         res.send('no autorizado')
//     }
// })


app.get('/dashboard',(req,res)=>{
    res.send('dashboard page')
})






app.listen(app.get('puerto'))
console.log(`escuchando en puerto ${app.get('puerto')} y server ${app.get('appName')}`)