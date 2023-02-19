import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false,
        select: false
    },
    isAdmin: {
        type: String,
        required: true,
        default: false
    },

}, {
    timestamps: true,
})


  userSchema.methods.matchPassword = async  (enteredPassword) => {
    return await bcrypt.compare(enteredPassword,this.password)
  }


  //Your are not sending password to database. So this need to be checked later. 

//   userSchema.pre('save', async (next)=> {
//     if(!this.isModified('password')){

//         next()
//     }

//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)

//   })

const Users = mongoose.model('Users', userSchema)

export default Users