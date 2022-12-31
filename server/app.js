const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.get("/", (req, res) => {
    res.send("<h1>Hello!</h1>");
})

app.listen(3000, (req, res) => {
    console.log("Server listening on port 3000 ...");
})
