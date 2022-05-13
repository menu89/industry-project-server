const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const moodboardsDB = './data/moodboards.json'

app.use(espress.json());
app.use(cors())


app.listen(PORT, ()=> {
    console.log("Server is listening at port: ", PORT)
})