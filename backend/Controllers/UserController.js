import asyncHandler from "express-async-handler"
import GenerateToken from "../Utils/GenerateToken.js"
import Users from "../Models/userModel.js"

//@desc Auth user & get a token
//@rout PPOST /api/users/login
//@access Public
const authUser = asyncHandler( async(request, response) => {
    const {email, password} = request.body

    const user = await Users.findOne({email})

    // const userPass =   await user.matchPassword(password)
        
// response.send(user)

     //if (user && userPass){
    if (user){
        response.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: GenerateToken(user._id, user.name, user.isAdmin),
        })
    } else{
        response.status(404)
        throw new Error('Invalid email or password')
    }
})

//@desc Register a new user
//@rout PPOST /api/users
//@access Public
const registerUser = asyncHandler( async(request, response) => {
    const {name, email, password} = request.body

    const userExists = await Users.findOne({email})

        if (userExists) {
            response.status(400)
            throw new Error('User already exists')
        } 

        const user = await Users.create({
            name,
            email,
        })

        if (user) {
            response.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: GenerateToken(user._id, user.name, user.isAdmin),    
            })
        } else {
            response.status(400)
            throw new Error ('Invalid user data')
        }
   
})

//@desc GET user profile
//@rout PPOST /api/users/profile
//@access Private
const getUserProfile = asyncHandler( async(request, response) => {
    
    const user = await Users.findById(request.user._id)

    if (user) {

        response.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        response.status(401)
        throw new Error('User not found')
    }
   
})

export{authUser,registerUser ,getUserProfile}