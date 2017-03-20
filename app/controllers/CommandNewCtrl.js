"use strict";

app.controller("CommandNewCtrl", function($scope, CommandStorage, $location, AuthFactory){

	let user = AuthFactory.getUser();

	$scope.title = "New Command";
	$scope.btnText = "Submit";
	$scope.newText = {};


	$scope.newTask = {
		description: "",
		linuxCommand: "",
		linuxOutput: "",
		subject: "",
		windowsCommand: "",
		windowsOutput: ""
	};

	$scope.addNewCommand = function(){
		CommandStorage.postNewCommand($scope.newTask)
			.then(function(response){
				$location.url("commands/list");
			});

		$scope.newTask = {};
	};
});