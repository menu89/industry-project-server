const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const moodboardsDB = './data/moodboards.json'

//middleware
app.use(cors())
app.use(express.json());
app.use(express.static('public'))

//getdata from the json files
function accessData () {
    return JSON.parse(fs.readFileSync(moodboardsDB))
}

//endpoint search
app.get('/mood-boards', (req,res) => {
    const pullData = accessData()
    return res.status(200).json(pullData)
})


//server setting
app.listen(PORT, ()=> {
    console.log("Server is listening at port: ", PORT)
})