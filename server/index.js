const express=require('express')
const app=express()
const apiRouter=require('./routes/api')
const cors=require('cors')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()

app.use(cors())
app.use(express.json())
app.use('/api',apiRouter)
app.listen(3000,()=>{
    console.log('connected')
})
mongoose.connect(process.env.dbConnect,{},()=>{
    console.log('db connected')
})