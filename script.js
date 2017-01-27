var app = angular.module("gallery", []);
app.controller("myCtrl", function($scope, $http) {
	$http.get("https://kwoc-manager.herokuapp.com/content/data.json").then(function(response) {
		$scope.data = response.data;
	})
});