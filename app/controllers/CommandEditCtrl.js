"use strict";

app.controller("CommandEditCtrl", function($scope, $location, $routeParams, CommandStorage){
	$scope.title = "Edit Command";
	$scope.btnText = "Update";
	$scope.newTask = {};

	CommandStorage.getSingleCommand($routeParams.commandId)
		.then(function successCallback(response){
			console.log("getSingleCommandresponse", response);
			$scope.newTask = response;
		});

	$scope.addNewCommand = function(){
		CommandStorage.updateCommand($routeParams.commandId, $scope.newTask)
			.then(function successCallback(response) {
				console.log(response);
				$location.url("/commands/list");
			});
	};
});
