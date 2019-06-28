var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
// var Members = require('./routes/MemberToValidate');


var app = express();
var port = process.env.PORT || 5000;

// Connection to the database
const db = require('./database/db');

// Import model to use
var memberModel = require('./models/Members');
// var Members = memberModel(db.sequelize, Sequelize);

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// Get the routes
var memberRoutes = require("./routes/memberRoutes");
memberRoutes(app);

// app.use('/membertovalidate', Members)

app.listen(port, () => {
    console.log("Server is running on port: " + port);
});