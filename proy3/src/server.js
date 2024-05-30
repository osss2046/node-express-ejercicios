const express = require('express')
const morgan = require('morgan')
const path = require('path')
require('ejs')

const app = express()

app.listen('3000')

const indexRoutes = require('./routes/index')
const userRoutes = require('./routes/users')


app.set('case sensitive routing',true)
app.set('appName','Curso de Express')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.json())
app.use(morgan('dev'))

app.use(indexRoutes)
app.use(userRoutes)


app.use('/publico',express.static(path.join(__dirname, 'static')))