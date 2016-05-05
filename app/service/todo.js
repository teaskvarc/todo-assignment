angular.module('toDo').factory('todoService',function($http) {


    var todo = {
        model: {
            list : [],
            item : null
        },

        //DELETE

        remove:function (id) {
            console.log(id);

            return $http.delete('http://localhost:3000/api/todo/' + id)

            .then(function (res) {



                angular.forEach(todo.model.list, function (item, i) {

                    if(id === item._id){
                        todo.model.list.splice(i, 1);
                    }
                });
            });



        },

        //POST//

        create:function (todoData) {


            $http.post('http://localhost:3000/api/todo', todoData)

                .then(function (res) {

                    todo.model.list.push(res.data);

                    console.log(res);

                });

        },

        update: function (todoData) {

            console.log(todoData);

            var id = todoData._id;

            return $http.put('http://localhost:3000/api/todo/' + id, todoData);

        },

        getAll: function () {

            var promise = $http.get('http://localhost:3000/api/todos');

            promise.then(function (res) {

                todo.model.list = res.data;

            });

            return promise;
        }

    };

	return todo;
});
