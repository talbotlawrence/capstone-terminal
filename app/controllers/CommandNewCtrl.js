"use strict";

app.controller("CommandNewCtrl", function($scope, CommandStorage, $location, AuthFactory){

	let user = AuthFactory.getUser();

	$scope.title = "New Command";
	$scope.btnText = "Submit";
	$scope.newText = {};


	$scope.newTask = {
		assignedTo: "",
		dependencies: "",
		dueDate: "",
		isCompleted: false,
		location: "",
		task: "",
		urgency: "",
		uid: user
	};

	$scope.addNewCommand = function(){
		CommandStorage.postNewCommand($scope.newTask)
		.then(function(response){
			$location.url("commands/list");
		});

		$scope.newTask = {};
	};
});
