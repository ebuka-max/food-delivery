import mongoose from "mongoose"


// mongoose.set('strictQuery', false);


export const connectDB = async () =>{
    try {
       const response = await mongoose.connect("mongodb+srv://ebuka1234:<password>@stackcluster.0x9lfvg.mongodb.net/")
       const data = response.json()
       if (data) {
        console.log("db connected");
       }
    } catch (error) {
        console.log(error);
    }
}




// export const connectDB = mongoose.connect("mongodb+srv://ebuka1234:ebuka1234@stackcluster.0x9lfvg.mongodb.net/food-del")
// .then(() => console.log("connected to database"))
// .catch((error) => console.log(error));



// mongodb+srv://ebuka1234:<password>@stackcluster.0x9lfvg.mongodb.net/