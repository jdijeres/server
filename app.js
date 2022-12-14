const express = require("express");
const path = require("path");
const app = express();
const bodyparser = require('body-parser');
const cors = require("cors");
var auth = require('./routes/auth');
var load = require('./routes/load');
var uninstall = require('./routes/uninstall');


//To view the requests in the console
app.use((req, res, next) => {
    console.log(`${req.url} - ${req.method}`);
    next();
    });
//To view the requests in the console

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use('/auth', auth);
app.use('/load', load);
app.use('/uninstall', uninstall);





module.exports = app;
