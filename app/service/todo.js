angular.module('toDo').factory('todoService',function($http) {


    var todo = {
        model: {
            list : [],
            item : null
        },

        //DELETE

        remove:function (id) {

            var promise = $http.delete('http://localhost:3000/api/todo/' + id);

            promise.then(function (res) {

                console.log(res);

                angular.forEach(todo.model.list, function (item, i) {

                    if(id === item._id){
                        todo.model.list.splice(i, 1);
                    }
                });
            });

            return promise;

        },

        //POST//

        create:function (_todo, cb) {

            $http.post('http://localhost:3000/api/todo',_todo)
                .then(function (res) {

                    todo.model.list.push(res.data);

                    console.log(res);
                    if(cb){
                        cb(res.data);
                    }
                });

        },

        update: function (id, todoData, cb) {

            $http.put('http://localhost:3000/api/todo' + id, todoData)
                .then(function (res) {

                    if(cb){
                        cb();
                    }
                });
        },

        getAll: function (cb) {

            var promise = $http.get('http://localhost:3000/api/todos');

            promise.then(function (res) {

                todo.model.list = res.data;

                if(cb){
                    cb(res.data);
                }

            });

            return promise;
        }

    };

	return todo;
});
