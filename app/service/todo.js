angular.module('toDo').factory('todoService',function($http) {

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }


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

        create:function (todo, cb) {

            $http.post('/api/todo', todo)
                .then(function (res) {

                    console.log(res);
                    if(cb){
                        cb(res.data);
                    }
                });

        }

    };

	return todo;
});
