var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const PORT = (process.env.PORT || 3000);

//var router = express.Router();

var createRouter = require('./routes/create');
var readRouter = require('./routes/read')
var updateRouter  = require('./routes/update')
var deteleRouter = require('./routes/delete')

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/crud/create/', createRouter);
//app.use('/crud/create/test', createRouter)
app.use('/crud/read/', readRouter);
// app.use('/crud/update', updateRouter);
// app.use('/crud/delete', deteleRouter);


app.listen(PORT, function(){
  console.log("Server Running On Port: " + PORT);
});
module.exports = app