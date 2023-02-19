import  Jwt  from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import Users from "../Models/userModel.js";

const protect = asyncHandler(async (request, response, next) =>{
    let token

    if(request.headers.authorization && request.headers.authorization.startsWith('Bearer'))
    {
        try {
            
            token = request.headers.authorization.split(' ')[1]

            const decoded = Jwt.verify(token, process.env.JWT_PASSKEY)

            request.user = await Users.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.error(error)
            response.status(401)
            throw new Error('Not Authorized, token failed')
            
        }
    }

    if(!token) {
        response.status(401)

        throw new Error('Not Authorized, no token')

    }

})

export {protect}