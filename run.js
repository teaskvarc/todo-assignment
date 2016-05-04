var express = require('express');
var database = require('./database');
var routes = require('./routes');
var bodyParser = require('body-parser');
var cors = require('cors');
var server = express();


server.use('/app', express.static('app'));      // serviramo vsebino mape na server
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended:true}));

database.connect(function () {
   
    server.listen(3000, function () {
       
       require('./model/todo');
        routes.init(server);
        console.log('Server running on port 3000');
        
    });
});