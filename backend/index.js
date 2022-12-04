import express from 'express'
import dotenv from 'dotenv'
import products from './Data/products.js' 


dotenv.config() 
const app = express()

app.get('/', (request, response)=>{
        response.send('API is running and working with ES Module..') 
})

app.get('/api/products', (request, response)=>{
        response.json(products)
})
app.get('/api/products/:id', (request, response)=>{
        const product = products.find((p)=>p._id === request.params.id)
        response.json(product)
})

const PORT = process.env.PORT || 5001
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`))