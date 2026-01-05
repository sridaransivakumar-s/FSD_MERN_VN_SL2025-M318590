const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app=express();
const userRouter = require('./route/userRoute')
app.use(cors());
app.use(express.json());
app.use('/',userRouter);


const uri =
  "mongodb+srv://admin:root@cluster0.kw7wi6m.mongodb.net/MernStack?appName=Cluster0";
mongoose.connect(uri)
.then(()=>console.log("Database Connected"))
.catch((err)=>console.log(err)
)

app.listen(3000,()=>{
    console.log("Server is listening in 3000"); 
})