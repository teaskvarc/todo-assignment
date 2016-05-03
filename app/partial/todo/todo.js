angular.module('toDo').controller('TodoCtrl',function($scope, todoService){


    $scope.todos = todoService.model.list;

    $scope.getTotalTodos = function(){

        return $scope.todos.length;
    };

    $scope.addTodo = function () {

        //$scope.todos.push({text:$scope.formTodoText, done:false});

        todoService.create({text:$scope.formTodoText, done:false});

        $scope.formTodoText = '';
    };

    $scope.removeTodo = function () {

        $scope.todos = _.filter($scope.todos, function (todo) {
            return !todo.done;

        });

    };

});
