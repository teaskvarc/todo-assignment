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

        var todoData = req.body;
        var Todo = mongoose.model('Todo');
        var newTodo = new Todo(todoData);

        newTodo.save(function (err) {

            if(!err){
                res.send(newTodo);
            }else{
                console.log(err);
                res.sendStatus(400);
            }


        });

    });


        //var Todo = mongoose.model('Todo');

         //console.log(req.body);

        //var todo = new Todo(req.body);

        //todo.save(function (err) {

//            if(!err){
  //              res.send(todo);
    //        }else{
      //          console.log(err);
        //        res.sendStatus(400);
          //  }







   //     var data = req.body;
        
   //     var todo = data.text;
        
   //     var newTodo = new Todo({todo: todo, done: false});
        
    //    newTodo.save(function (err) {
    //
  //              if (!err) {
   //                 res.send(todo);
    //            } else {
     //               console.log(err);
   //                 res.sendStatus(400);
    //            }
//            });



        // UPDATE
        server.put('/api/todo/:id', function (req, res) {

            var id = req.params.id;
            var Todo = mongoose.model('Todo');
            var todoData = req.body;

            Todo.findByIdAndUpdate(id, todoData, {new: true}, function (err, doc) {

                if (!err) {
                    res.send(doc);
                } else {
                    res.sendStatus(400);
                    console.log(err);
                    
                }

            });

        });

        //DELETE
        server.delete('/api/todo/:id', function (req, res) {

            var id = req.params.id;

            var Todo = mongoose.model('Todo');

            Todo.findByIdAndRemove(id, function (err, doc) {

                if (!err) {
                    res.send(doc);
                }else{
                    res.sendStatus(400);

                }

            });
        });
    };
