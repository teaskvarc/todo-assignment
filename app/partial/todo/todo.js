angular.module('toDo').controller('TodoCtrl', function ($scope, todoService) {


    $scope.todos = todoService.model.list;



    $scope.getTotalTodos = function () {

        return $scope.todos.length;
    };

    $scope.addTodo = function () {


        todoService.create({todo: $scope.formTodoText, done: false});

        //todoService.create({text:$scope.formTodoText, done:false});


        $scope.formTodoText = '';
    };

    $scope.removeTodo = function (id) {

        _.each($scope.todos, function (todo, i) {

            if (todo.done) {
                todoService.remove(todo._id);
            }
        });

    };

});
