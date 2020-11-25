// import from libraries
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MONGODB database connection established successfully");
})


// custom routes imports
const task = require("./routes/task");
const mentor = require("./routes/mentor");

app.use('/mentor', mentor);
app.use('/task', task);

app.listen(port, () =>
    console.log(`Expertrons Backend app listening at http://localhost:${port}`)
);