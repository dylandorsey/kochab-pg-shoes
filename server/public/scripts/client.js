var app = angular.module('ShoeStoreApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
    }).when('/shoe-store', {
        templateUrl: 'views/shoe-store.html',
        controller:  'ShoeStoreController as vm'
    })
    .otherwise({
        template: '<h2>404</h2>'
    });
});
