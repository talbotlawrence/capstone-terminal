'use strict';

app.factory("CommandStorage", ($q, $http, FBCreds) => {

	let getCommandList = (user) => {
		let commands = [];
		return $q((resolve, reject) => {
			// $http.get(`${FBCreds.databaseURL}/commands.json?orderBy="uid"&equalTo="${user}"`)
			$http.get(`${FBCreds.databaseURL}/commands.json`)
				.then((commandObject) => {
					let commandCollection = commandObject.data;
					console.log("commandCollection", commandCollection);
					Object.keys(commandCollection).forEach((key) => {
						commandCollection[key].id = key;
						commands.push(commandCollection[key]);
					});
					resolve(commands);
				})
				.catch((error) => {
					reject(error);
				});
		});
	};

	let getSingleCommand = (commandId) => {
		return $q(function(resolve, reject) {
			$http.get(`${FBCreds.databaseURL}/commands/${commandId}.json`)
				.then(function(commandObject) {
					resolve(commandObject.data);
				})
			.catch(function(error) {
				reject(error);
			});
		});
	};

	// return {getCommandList, postNewCommand, deleteCommand, getSingleCommand, updateCommand};
	return {getCommandList, getSingleCommand};

});