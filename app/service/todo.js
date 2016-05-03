angular.module('toDo').factory('todoService',function($http) {


    var todo = {
        model: {
            list : [],
            item : null
        },

        //DELETE

        remove:function (id) {

            var promise = $http.delete('/api/todo'+id);

            angular.forEach(todo.model.list, function (item, i) {

                if(id === item._id){
                    todo.model.list.splice(i, 1);
                }
            });

        },

        //POST

        create:function (_todo, cb) {

            $http.post('http://localhost:3000/api/todo', _todo)
                .then(function (res) {

                    todo.model.list.push(res.data);

                    console.log(res);
                    if(cb){
                        cb(res.data);
                    }
                });

        }

    };

	return todo;
});
