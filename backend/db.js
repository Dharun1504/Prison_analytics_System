const mongoose=require('mongoose');
const connectDB=async()=>
{
    try{
        await mongoose.connect("mongodb://0.0.0.0/Prison");
        console.log('Mongo db connected');
    }
    catch(error)
    {
        console.log("Mongo db server issue");
    }
}
module.exports=connectDB;