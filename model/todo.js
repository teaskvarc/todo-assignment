var mongoose = require('mongoose');

var Schema = mongoose.Schema({
    
   title            : {type:String, required:true},
    dateCreated     : {type:Date, default:Date.now}
    
});

mongoose.model('Todo', Schema);
