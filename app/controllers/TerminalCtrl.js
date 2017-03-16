"use strict";

app.controller('TerminalCtrl', function($scope, $location){
	$scope.welcome = "hello";
	$scope.showListView = true;
//	$scope.newTask = {};

	$scope.newCommand = function(){
		// console.log("you clicked on new command");
		$location.url("/commands/new");
	};

	$scope.allCommand = function(){
		// console.log("you clicked on show all commands");
		$location.url("/commands/list");
	};
});
