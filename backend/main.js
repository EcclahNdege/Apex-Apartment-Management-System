const express = require("express");
const mongoose = require("mongoose");
const {User , Apartment , Tenant , Feedback} = require("./schema/schema.js");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.MONGO_DB,
});

let db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Connected to MongoDB");
});

app.get("db/:schema" , async (req , res)=>{
    let schema = req.params.schema;
    switch(schema){
        case "User" : 
            res.json(await User.find());
            break;
        case "Apartment" : 
            res.json(await Apartment.find().populate("owner"));
            break;
        case "Tenant" :
            res.json(await Tenant.find().populate("apartment"));
            break;
        case "Feedback" :
            res.json(await Feedback.find().populate("user"));
            break;
        default : 
            res.send("Unknown schema");
    }
    
});

app.use((req , res)=>{
    res.send("An error occurred fetching the resource!");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});