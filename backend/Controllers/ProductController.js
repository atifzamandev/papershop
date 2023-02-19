import asyncHandler from "express-async-handler"
import Products from "../Models/productModel.js"

//@desc Fetch All Products
//@rout Get /api/products
//@access Public
const getProducts = asyncHandler( async(request, response) => {
    const products = await Products.find({})
    response.json(products)
})

//@desc Fetch Single Product
//@rout Get /api/products:id
//@access Public
const getProductById = asyncHandler( async(request, response) => {
    const product = await Products.findById(request.params.id)

    if (product) {
      response.json(product)
    } else {
      response.status(404)
      throw new Error("Product not found!")
    }
})


export {getProducts, getProductById}