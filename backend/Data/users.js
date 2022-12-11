import bcrypt from 'bcryptjs'
const users = [
    {
        name: 'Admin',
        email: 'admin1@papershop.com',
        paosword: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Atif',
        email: 'atif@papershop.com',
        paosword: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Kashif',
        email: 'kashif@papershop.com',
        paosword: bcrypt.hashSync('123456', 10),
    }
]

export default users