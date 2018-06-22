var myApp = angular.module('myApp');

myApp.controller('BookController', ['$scope', '$http', function($scope, $http){
	console.log('Controller Loaded...')
	$scope.getBooks = function() {
		$http('https://172.16.98.135/redfish/v1').success(function(response){
			$scope.books = response;
		})
	}
	
}])


