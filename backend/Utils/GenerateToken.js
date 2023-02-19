import Jwt  from "jsonwebtoken";

const GenerateToken = (id, name, isAdmin) => {
    return Jwt.sign ({id, name, isAdmin}, process.env.JWT_PASSKEY, {
    expiresIn : '30d'
    })
}

export default GenerateToken