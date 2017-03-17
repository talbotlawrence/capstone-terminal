"use strict";

app.controller("CommandListCtrl", function($scope, CommandStorage, SearchTermData, AuthFactory){

	$scope.searchText = SearchTermData;
	let user = AuthFactory.getUser();

	CommandStorage.getCommandList(user)
		.then(function(commandCollection){
			console.log("user", user);
			console.log("commandCollection", commandCollection);
			$scope.commands = commandCollection;
		});

	$scope.commandDelete = function(commandId){
		CommandStorage.deleteCommand(commandId)
			.then(function(response) {
				CommandStorage.getCommandList(user).then(function(commandCollection){
					console.log("commandCollection", commandCollection);
					$scope.commands = commandCollection;
				});
			});
	};
});
