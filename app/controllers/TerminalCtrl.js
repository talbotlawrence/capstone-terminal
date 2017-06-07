"use strict";

app.controller('TerminalCtrl', function($scope, $location){
	$scope.welcome = "hello";
	$scope.showListView = true;
	//	$scope.newTask = {};

	// $scope.newCommand = function(){
	// 	$location.url("/commands/new");
	// };

	// $scope.allCommand = function(){
	// 	$location.url("/commands/list");
	// };
});