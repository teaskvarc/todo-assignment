var express = require('express');
var database = require('./database');
var routes = require('./routes');
var bodyParser = require('body-parser');
var server = express();


server.use('/app', express.static('app'));      // serviramo vsebino mape na server
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended:true}));

database.connect(function () {
   
    server.listen(3000, function () {
       
       routes.init(server);
        console.log('Server running on port 3000');
        
    });
});