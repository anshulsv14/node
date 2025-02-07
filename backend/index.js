const express =require('express')
const app=express();
const mongoose=require("mongoose")
const cors=require("cors")
const bodyparser =require("body-parser")
const empRoutes=require("./routes/empRoutes")
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/employee").then(()=>{
    console.log("DB connected!!!");
})
app.use("/employee",empRoutes)

app.listen(8000)
