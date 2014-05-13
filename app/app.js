(function() {
    
    var app = angular.module('FcsApp', ['ngRoute','ngAnimate']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
            //    controller: 'CustomersController',
                templateUrl: 'app/views/login/login_dialog_box.directive.html'
            })
            .when('/welcome/', {
              //  controller: 'OrdersController',
                templateUrl: 'app/views/welcome.html'
            })
			.when('/signup/', {
              //  controller: 'OrdersController',
                templateUrl: 'app/views/signup.html'
            })
            .when('/login/', {
              //  controller: 'OrdersController',
                templateUrl: 'app/views/login/login_dialog_box.directive.html'
            })
			.when('/chat/', {
              //  controller: 'OrdersController',
                templateUrl: 'app/views/live-chat.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());