import mongoose from "mongoose";

const uri = process.env.MONGODB_URI

if(!uri) throw new Error("error data")


let isConnected = false;


export async function connectedToDatabase(){
    if(isConnected) return console.log("Yes data");

    try{
        await mongoose.connect(uri, {dbName : "test"})
        isConnected = true
    }catch(error){
        console.log(error);
    }
    
}