"use strict";

app.controller("CommandListCtrl", function($scope, CommandStorage, SearchTermData){	///////////DO YOU NEED AuthFactory???

    $scope.searchText = SearchTermData;
    // let user = AuthFactory.getUser();	///////////DO YOU NEED???

    CommandStorage.getCommandList()	///////////DO YOU NEED (user)???
        .then(function(commandCollection){
            // console.log("user", user);
            // console.log("commandCollection from CommandListCtrl.js", commandCollection);
            $scope.commands = commandCollection;
    });
});