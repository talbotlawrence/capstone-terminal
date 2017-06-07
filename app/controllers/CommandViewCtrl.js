"use strict";

app.controller("CommandViewCtrl", function($scope, $location, $routeParams, CommandStorage){	///////////DO YOU NEED AuthFactory???
	$scope.commands = [];

	// let user = AuthFactory.getUser();	///////////DO YOU NEED???

	CommandStorage.getCommandList()	///////////DO YOU NEED user???
		.then(function(commandCollection) {
			$scope.commands = commandCollection;

			$scope.selectedCommand = $scope.commands.filter(function(command){
				return command.id === $routeParams.commandId;
			})[0];
	});
});