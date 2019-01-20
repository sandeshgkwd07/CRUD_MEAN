var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
URL = "mongodb://localhost:27017/test";                   

var test = require('../models/crudModel');

router.get('/', function(req, res){
  mongoose.connect(URL, {useNewUrlParser : true}, function(err, db){
    if (db){
      console.log("Connected suucessfully...");
      test.find({}, function(err, data){
        console.log(data)
      })
    }
    else{
      console.log(err);
    }
  });
});

module.exports = router;