const express = require('express');
const app = express();
const jsonwt = require("jsonwebtoken");
require ("dotenv").config();



//So far I am not using it
function postJWT (req, res) {
const user = {id,firstName,lastName} = req.body;

  jsonwt.sign({user}, process.env.ACCES_TOKEN_SECRET, {expiresIn:process.env.TOKEN_EXPIRE},
    (err,token) => {
     if(err){
        res.status(400).json({msg:err})
     }
else {
       return res.status(200).json({msg:'success', token: token})
     }
  })
};

  module.exports = {
    postJWT:postJWT
  };
  //So far I am not using it