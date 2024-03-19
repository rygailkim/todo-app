import mongoose from "mongoose"

const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://rygailkim:bz5vfiF8g8kL66ZE@cluster0.wt3inam.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    if (connection) {
      console.log("Connection established")
    }
  } catch (error) {
    console.log("error in connectToDatabase", error)
    throw error
  }
}

export default connectToDatabase