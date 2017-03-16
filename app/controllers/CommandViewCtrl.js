"use strict";

app.controller("CommandViewCtrl", function($scope, $routeParams, CommandStorage, AuthFactory){
	$scope.commands = [];

	let user = AuthFactory.getUser();

	CommandStorage.getCommandList(user)
	.then(function(commandCollection) {
		$scope.commands = commandCollection;

		$scope.selectedCommand = $scope.commands.filter(function(command){
			return command.id === $routeParams.commandId;
		})[0];
	});
});