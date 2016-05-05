var mongoose = require('mongoose');

var Schema = mongoose.Schema({
    

    todo            : {type:String, required:true},
    done            : Boolean,
    dateCreated     : {type:Date, default:Date.now}
    
});

mongoose.model('Todo', Schema);
