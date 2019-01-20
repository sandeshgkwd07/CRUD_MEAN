var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var mongoose = require('mongoose')

router.use(bodyParser())
router.use(bodyParser());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }))

URL = "mongodb://localhost:27017/test_crud";                   

var test = require('../models/crudModel');

router.post('/:fname/:lname/:email_id/:contactNumber', function(req, res){

      console.log(req.params.fname)
      personInfo = req.body;
      var info = new test({
        "fname": req.params.fname,
        "lname": req.params.lname,
        "email_id": req.params.email_id,
        "ContactNumber": req.params.contactNumber 
      });
      //console.log(info);
      console.log("---------------------------------")
      mongoose.connect(URL, {useNewUrlParser : true}, function(err, db){
        if (db){
          console.log("Connected suucessfully...");
          test.find({}, function(err, data){
            console.log(data)
            res.json(data)
          })
        }
        else{
          console.log(err);
        }
      });
      info.save({}, function(db, err){
        if(db){
          console.log("Data Saved Successfully...");
        }
        else{
          console.log(err)
        }
      });

      console.log(info)
  });
//);

module.exports = router;