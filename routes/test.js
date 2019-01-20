var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();



conString = "mongodb://localhost:27017/test"

var con = mongoose.connect(conString, {useNewUrlParser : true});


var crudSchema = new mongoose.Schema({
    'name':String
});



var test = mongoose.model('test', crudSchema);

router.get('/', function(req, res){
    test.find({}, function(err, data){
        res.json(data);
    })
})

module.exports = router;