require('dotenv').config();
const express = require("express");
const cors = require('cors');
const helmet = require("helmet");
const  mongoose  = require('mongoose');
const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());

//Set up mongoose
const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, {userNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("CONNECTION ESTABLISHED"));

//http://localhost:5000/
app.get("/", (req, res) => {
    return res.json({"WELCOME": `to my Backend Software for the ZOMATO-MASTER`});
})

