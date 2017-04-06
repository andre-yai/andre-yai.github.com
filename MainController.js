(function(){
	var app = angular.module("Portifolio");
	var MainController = function($scope){

		$scope.img_url = "me.jpg"; 
	}
	app.controller("MainController",MainController);
}())