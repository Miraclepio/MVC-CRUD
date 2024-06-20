
const express=require("express")
const mongoose=require("mongoose")
  

require("dotenv").config()   

const PORT=process.env.PORT
const DB=process.env.database

const farmRouter=require("./route/router")

const app=express();    
app.use(express.json())
app.use(farmRouter) 
mongoose.connect(DB).then(()=>{
    console.log("successfully connected to the database")
}).catch((err)=>{
    console.log("error connecting to database: ", err.massage);
});

app.listen(PORT,() => {
    console.log(`server is listening to PORT:${PORT}`)
})    