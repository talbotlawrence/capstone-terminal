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
					// commands = commands.sort();
					resolve(commands);
				})
			.catch((error) => {
				reject(error);
			});
		});
	};

	let postNewCommand = (newCommand) =>  {
		return $q((resolve, reject) => {
			$http.post(`${FBCreds.databaseURL}/commands.json`,
					JSON.stringify(newCommand))
				.then((ObjectFromFirebase) => {
					resolve(ObjectFromFirebase);
				})
			.catch((error) => {
				reject(error);
			});
		});
	};

	let deleteCommand = (commandId) => {
		console.log("delete in factory", commandId);
		return $q((resolve, reject) => {
			$http.delete(`${FBCreds.databaseURL}/commands/${commandId}.json`)
				.then((ObjectFromFirebase) => {
					resolve(ObjectFromFirebase);
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

	let updateCommand = (commandId, editedCommand) => {
		return $q(function(resolve, reject) {
			$http.patch(`${FBCreds.databaseURL}/commands/${commandId}.json`, angular.toJson(editedCommand))
				.then(function(ObjectFromFirebase) {
					resolve(ObjectFromFirebase);
				})
			.catch(function(error) {
				reject(error);
			});
		});
	};

	return {getCommandList, postNewCommand, deleteCommand, getSingleCommand, updateCommand};
});
