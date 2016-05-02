var mongoose = require('mongoose');

exports.init = function (server) {
    
    console.log('Setup routes');



    //READ - all to-do's
    server.get('/api/todo', function (req, res) {

        var Todo = mongoose.model('Todo');

        Todo.find(function (err, docs) {

            res.send(docs);
        });

    });

    //CREATE
    server.post('/api/todo', function (req, res) {

        var Todo = mongoose.model('Todo');
        
        var data = req.body;
        
        var title = data.title;
        
        var newTodo = new Todo(data);
        
        newTodo.save(function (err) {
            
            console.log(err);
            res.send(data);
        });

    });



    // UPDATE
    server.put('/api/todo/:id', function (req,res) {




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
