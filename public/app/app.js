"use strict";

var app = angular.module("TerminalApp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.
		when('/', {
			templateUrl: 'partials/command-list.html',
			controller:"CommandListCtrl"
		}).
		when('/commands/:commandId', {
			templateUrl: "partials/command-details.html",
			controller: "CommandViewCtrl",
	}).
	otherwise('/');
});

app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain,
		databseURL: creds.databaseURL
	};

	firebase.initializeApp(authConfig);
});