const express=require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose');

const app=express();
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))


mongoose.connect('mongodb://127.0.0.1:27017/contactform')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Connection failed:", err));


  const Contact = new mongoose.model( 'Contact' , new mongoose.Schema({
    name: String ,
    email:String,
    message:String
  }))

app.post('/submit' , async(req , res)=>{
    

    try{
        const { name, email , message }=req.body
        const newContact=new Contact({name , email , message})
        await newContact.save();

        console.log("Contact saved!");
        res.sendFile( path.join(__dirname , "public" , "success.html"))

    }
    catch(err){
        res.status(500).send("Failed to save contact.");
    }
})

app.listen(3000 , ()=> console.log("listening"))