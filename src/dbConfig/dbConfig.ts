import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection
        connection.on('connected',()=>{
            console.log('mongodb connected successfully');
            
        })
        connection.on("error", (err) => {
          console.log(`MongoDB error: ${err}`);
          process.exit();
        });
    } catch (error) {
        console.log("Somthing  went wrong while connecting to the database");
        console.log(error);
        process.exit(1); // kill node with FATAL error
        
        
    }
}