require ("dotenv").config();
const app = require ('./app');
const path = require("path");
const express = require("express");


// setting
app.set('port',process.env.PORT || 3000);



//server
app.listen(app.get('port'), () =>{
  console.log("puerto abierto ", app.get('port'));
});