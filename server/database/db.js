import mongoose from "mongoose"



const connectToDb=async (USERNAME,PASSWORD)=>{
    
    try {
        const URI =`mongodb+srv://${USERNAME}:${PASSWORD}@blog-app.xzfuabx.mongodb.net/`
        
        await mongoose.connect(URI)

        console.log("Database connected successfully")
    } catch (error) {

        console.log("error",error)
        
    }
}

export default connectToDb;