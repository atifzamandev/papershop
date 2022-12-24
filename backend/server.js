import express, { request, response } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from './Config/db.js'
import {notFound, errorHandler} from './Middleware/errorMiddleware.js'
import ProductRoutes from './Routes/ProductRoutes.js'

dotenv.config() 
mongoose.set('strictQuery', true);
connectDB()

const app = express()

app.get('/', (request, response)=>{
        response.send('API is running and working with ES Module..') 
})

app.use('/api/products', ProductRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5001
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`))