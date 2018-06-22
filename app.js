var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	console.log("App.js is called...")
	$routeProvider.when('/', {
    	controller: 'BookController',
		templateUrl: 'views/books.html'
	})
	.otherwise({
		redirectTo: '/'
	})

});