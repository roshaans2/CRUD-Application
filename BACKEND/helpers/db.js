const mongoose = require("mongoose")


const dotenv = require("dotenv");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI

// const MONGO_URI = "mongodb+srv://Roshaan:roshaan@roshaan.lwu23.mongodb.net/notes-application"


module.exports.connectDB = async ()=>{
  try {
    await mongoose.connect(MONGO_URI)
    console.log("Connected to the DB")
  } catch (error) {
    console.log(error)
  }
}
