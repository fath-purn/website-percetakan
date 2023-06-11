const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.set("view engine", "ejs");

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/home.html');
});



app.listen(3000, function () {
    console.log("Server started on port 3000");
});
