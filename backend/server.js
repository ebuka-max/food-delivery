import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

// app config
const app = express()
const port = process.env.PORT || 4000;



// middleware
app.use(express.json())
app.use(cors())

// app.listen(port,()=> console.log(`listening to ${port}`))

// connect to database
mongoose.connect("mongodb+srv://john1234:john1234@foodcluster.aljxm23.mongodb.net/food-del")
    .then(() => {
        // listen for request
        app.listen(port, () => {
            console.log(`connected to database & listen on port, ${port}`);
        })

    })
    .catch((error) => {
        console.log(error);
    })

    // api endpoints
    app.use("/api/food",foodRouter)
    app.use("/images",express.static('uploads'))
    app.use("/api/user",userRouter)
    app.use("/api/cart",cartRouter)
    app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Is Working");
})

