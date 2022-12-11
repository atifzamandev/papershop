import mongoose from "mongoose";

const connectDB = async () => {
7
    try {
        const connString = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            //useCreateIndex: true,
          })
        console.log(`DataBase Host: ${(connString.connection.host)}`)
    } catch (error) {
        console.error(`Error is: ${error.message}`)
        process.exit(1)

    }


}

export default connectDB