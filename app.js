const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use('/data', require('./routes'));


app.listen(3000, () =>{
    //console.log("puerto abierto",3000)
});

