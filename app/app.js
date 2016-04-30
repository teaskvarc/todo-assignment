angular.module('toDo', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('toDo').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('todo', {
        url: '/todo',
        templateUrl: 'partial/todo/todo.html',
        controller: 'TodoCtrl'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/todo');

});

angular.module('toDo').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
