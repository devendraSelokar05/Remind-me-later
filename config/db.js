const mongoose = require("mongoose");

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("MongoDb Databse Connected Successfully")
    } catch (error) {
        console.log("MongoDb Databse Connection Failed",error);
        process.exit(1);
    }
}

module.exports = connectDB;
