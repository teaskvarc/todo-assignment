var mongoose = require('mongoose');

var Schema = mongoose.Schema({
    
    title            : {type:String, required:true},
    done            : Boolean,
    dateCreated     : {type:Date, default:Date.now}
    
});

mongoose.model('Todo', Schema);
