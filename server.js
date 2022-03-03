const path = require("path");
const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
var JDCdata = require("./data/etdata");


app.use(express.json());

app.use("/", express.static(path.join(__dirname, "build")));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "build/index.html"));
});

app.get('/getdata', function(req, res){
    res.json(JDCdata); 
});

app.listen(PORT, async function() {
    console.log(`Listening on Port ${PORT}`);
});
