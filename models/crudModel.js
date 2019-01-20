var mongoose = require('mongoose');

//var Schema = mongoose.Schema;
var crudSchema = new mongoose.Schema({
    'fname':String,
    'lname':String,
    'email_id':String,
    'ContactNumber':String
});

module.exports = mongoose.model('Test', crudSchema, 'test_crud');