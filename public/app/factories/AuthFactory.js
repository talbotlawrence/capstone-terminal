"use strict";

app.factory("AuthFactory", function(){

	let currentUser = null;

	let getUser = function(){
		return currentUser;
	};
	return {getUser};
});