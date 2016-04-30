var mongoose = require('mongoose');

exports.init = function (server) {
    
    console.log('Setup routes');



    //READ - all to-do's
    server.get('/api/todos', function (req, res) {

        var Todo = mongoose.model('Todo');

        Todo.find(function (err, docs) {

            res.send(docs);
        });

    });

    //CREATE
    server.post('/api/todo', function (req, res) {



    });



    // UPDATE
    server.put('/api/todo/:id', function (req,res) {




    });

    //DELETE
    server.delete('/api/todo/:id', function (req, res) {



    });
};
