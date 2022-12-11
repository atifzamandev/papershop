import mongoose from "mongoose";
import dotenv from 'dotenv'
import users from "./Data/users.js";
import products from "./Data/products.js";
import Users from "./Models/userModel.js";
import Products from "./Models/productModel.js";
import Orders from "./Models/oderModel.js";
import connectDB from "./Config/db.js";

dotenv.config()
mongoose.set('strictQuery', true);
connectDB()

console.log(users.map(user=>(
    user.name
)))
const importData = async()=> {

    try {
        await Users.deleteMany()
        await Products.deleteMany()
        await Orders.deleteMany()

        const createdUsers = await Users.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleData = products.map(product=>{
            return {...product, user: adminUser}
        })

        await Products.insertMany(sampleData)
        console.log(`Data Import with Success`)
        process.exit()
    } catch (error) {
        console.error(`Data import failed ${error}`)
        process.exit(1)
    }
}

const destroyData = async()=> {

    try {
        await Users.deleteMany()
        await Products.deleteMany()
        await Orders.deleteMany()

        console.log(`Data Deleted Successfully!`)
        process.exit()
    } catch (error) {
        console.error(`Data import failed ${error}`)
        process.exit(1)
    }
}


{process.argv[2] === '-d' ? destroyData() : importData()}