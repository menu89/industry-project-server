const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const moodboardsDB = './data/moodboards.json'

app.use(express.json());
app.use(cors())

function accessData () {
    return JSON.parse(fs.readFileSync(moodboardsDB))
}

app.get('/mood-boards', (req,res) => {
    const pullData = accessData()
    return res.json(pullData)
})

app.listen(PORT, ()=> {
    console.log("Server is listening at port: ", PORT)
})