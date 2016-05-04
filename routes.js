var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');

exports.init = function (server) {
    
    console.log('Setup routes');



    //READ - all to-do's
    server.get('/api/todos', function (req, res) {

        var Todo = mongoose.model('Todo');

        Todo.find(function (err, docs) {

            if(!err){
                res.send(docs);   
            } else {
                res.send(err);
            }
            
        });

    });

    //CREATE
    server.post('/api/todo', function (req, res) {

        var Todo = mongoose.model('Todo');
        
        console.log(req.body);
        
        var todo = new Todo(req.body);
        
        todo.save(function (err) {
            
            if(!err){
                res.send(todo);
            }else{
                console.log(err);
                res.sendStatus(400);
            }
        });

    });



    // UPDATE
    server.put('/api/todo/:id', function (req,res) {

        var id = req.params.id;

        var Todo = mongoose.model('Todo');

        Todo.findByIdAndUpdate(id, req.body, {new:true}, function (err, doc) {

            if(!err){
                res.send(doc);
            }else{
                console.log(req.body);
                console.log(err);
            }

        });
        
    });

    //DELETE
    server.delete('/api/todo/:id', function (req, res) {

        var id = req.params.id;
        
        var Todo = mongoose.model('Todo');
        
        Todo.findByIdAndRemove(id, function (err, doc) {
            
            if(!err){
                res.send(doc);
            }else{
                res.sendStatus(400);
            }
            
        });
    });
};
