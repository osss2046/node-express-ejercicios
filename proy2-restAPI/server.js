const express = require('express')
const morgan = require('morgan')
const app = express()

let products = [
    {
        "id":1,
        "name": "computador",
        "price": 1000
      }
]



app.listen(3000)


app.use(morgan('dev'))
app.use(express.json())



app.get('/products', (req,res)=>{
    res.json(products)
})
app.post('/products', (req,res)=>{
    const newProducts = {...req.body, id:products.length+1}
    products.push(newProducts)

    res.send(newProducts)
})
app.put('/products/:id', (req,res)=>{

    const newData = req.body
    const productFind = products.find(function (product){
        return product.id == req.params.id
    })
    if(!productFind) return res.status(404).json({message:"producto no encontrado"})

    products = products.map(p=>p.id === parseInt(req.params.id) ?{...p, ...newData} : p )
    res.json({ message: "producto actualizado"})
})



app.delete('/products/:id', (req,res)=>{
    const productFind = products.find(function (product){
        return product.id == req.params.id
    })
    if(!productFind) return res.status(404).json({message:"producto no encontrado"})

    products = products.filter( p => p.id !== parseInt(req.params.id));

    res.sendStatus(204)

})
app.get('/products/:id', (req,res)=>{
    const productFind = products.find(function (product){
        return product.id == req.params.id
    })
    if(!productFind) return res.status(404).json({message:"producto no encontrado"})
    res.json(productFind)
})



console.log(`server on port ${3000}`)

