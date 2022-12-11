import mongoose from "mongoose";

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
    },
    isAdmin: {
        type: String,
        required: true,
        default: false
    },

}, {
    timestamps: true,
})

const Users = mongoose.model('Users', userSchema)

export default Users