const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const peopleRouter = require("./routes/people");


var app = express();
app.use(bodyParser.json());
app.use("/people",peopleRouter);
app.listen(3000);
