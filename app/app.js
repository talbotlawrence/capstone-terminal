"use strict";

var app = angular.module("TerminalApp", ["ngRoute"]);

let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
  // console.log("running isAuth");
    AuthFactory.isAuthenticated()
    .then ( (userExists) => {
    console.log("userExists", userExists);
        if (userExists){
      console.log("Authenticated--nice job typing");
            resolve();
        }else {
      console.log("Authentication rejected--you suck!");
            reject();
        }
    });
});

app.config(function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: 'partials/login.html',
		controller:"UserCtrl"
		// resolve: {isAuth}
	}).
	when('/login', {
		templateUrl: 'partials/login.html',
		controller:"UserCtrl"
		// resolve: {isAuth}
	}).
	when('/logout', {
		templateUrl: 'partials/login.html',
		controller:"UserCtrl"
		// resolve: {isAuth}
	}).
	when('/commands/list',{
		templateUrl: "partials/command-list.html",
		controller: 'CommandListCtrl'
		// resolve: {isAuth}
	}).
	when('/commands/new', {
		templateUrl: "partials/command-form.html",
		controller: 'CommandNewCtrl'
		// resolve: {isAuth}
	}).
	when('/commands/:commandId', {
		templateUrl: "partials/command-details.html",
		controller: "CommandViewCtrl"
		// resolve: {isAuth}
	}).
	when('/commands/:commandId/edit', {
		templateUrl: "partials/command-form.html",
		controller: "CommandEditCtrl"
		// resolve: {isAuth}
	}).
	otherwise('/commands/list');
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