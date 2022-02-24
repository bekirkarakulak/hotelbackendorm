const express = require('express');
const bodyParser = require('body-parser');

const contentRoutes = require('./src/routes/ContentRoutes');

const app = express();
require('dotenv').config();
var patch= require("path");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

port = "8086";

var server = app.listen(port, function(){
    console.log('Server is running ...');
    //console.log(process.env);
    
});

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', contentRoutes);



app.use(function(req,res){
    res.status(404).send({url:req.originalUrl+ 'not found'})
});