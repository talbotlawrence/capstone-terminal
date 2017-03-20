"use strict";

app.controller("CommandViewCtrl", function($scope, $location, $routeParams, CommandStorage, AuthFactory){
	$scope.commands = [];

	let user = AuthFactory.getUser();

	CommandStorage.getCommandList(user)
		.then(function(commandCollection) {
			console.log("commandCollection from CommandViewCtrl.js", commandCollection);
			$scope.commands = commandCollection;

			$scope.selectedCommand = $scope.commands.filter(function(command){
				console.log("command potato from CommandViewCtrl", command);
				return command.id === $routeParams.commandId;
			})[0];
		});

		$scope.commandDelete = function(commandId){
		console.log("commandId from commandDelete", commandId);
		CommandStorage.deleteCommand(commandId)
			.then(function(response) {
				CommandStorage.getCommandList(user).then(function(commandCollection){
					console.log("commandCollection from the delete", commandCollection);
					$scope.commands = commandCollection;
					$location.url("commands/list");   
				});
			});
	};
});