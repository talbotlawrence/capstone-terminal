'use strict';

app.factory("CommandStorage", ($q, $http) => {  ///////////DON'T NEED FBCreds???

    let getCommandList = () => {    ///////////DO YOU NEED (user)???
        let commands = [];
        // console.log("commands array: ", commands);
        return $q((resolve, reject) => {
            // console.log("resolve: ", resolve);
            $http.get('../../commands.json')
            .then((commandObject) => {
                // console.log("commandObject: ", commandObject);
                let commandCollection = commandObject.data;
                console.log("commandCollection commands: ", commandCollection.commands);
                // console.log("Object keys", Object.keys(commandCollection.commands));
                Object.keys(commandCollection.commands).forEach((key) => {   //changed--add .commands
                    // console.log("key: ", key);
                    // commandCollection[key].id = key;
                    commandCollection[key] = key;        //added whole line
                    // console.log("commandCollection[key]: ", commandCollection[key]);

                    commands.push(commandCollection[key]);
                    // console.log("commands: ", commands);
                });
                resolve(commands);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };



    // $.ajax({
    //  url: '../../commands.json',
    //  dataType: 'json',
    //  type: 'get',
    //  cache: false,
    //  success: function(data) {
    //      console.log(data);
    //  }
    // })

    // $.get( "../../commands.json", function( data ) {
    //          $( ".result" ).html( data );
    //          alert( "Load was performed." );
    //      })

    // $http.get(`${FBCreds.databaseURL}/commands.json?orderBy="uid"&equalTo="${user}"`)
            // $http.get(`${FBCreds.databaseURL}/commands.json`)    ///////////DO YOU NEED???
            // $http.get(`../../commands.json`)

                    // $.getJSON('../../commands.json')






    // let postNewCommand = (newCommand) =>  {
    //  return $q((resolve, reject) => {
    //      $http.post(`${FBCreds.databaseURL}/commands.json`,
    //              JSON.stringify(newCommand))
    //          .then((ObjectFromFirebase) => {
    //              resolve(ObjectFromFirebase);
    //          })
    //      .catch((error) => {
    //          reject(error);
    //      });
    //  });
    // };

    // let deleteCommand = (commandId) => {
    //  console.log("delete in factory", commandId);
    //  return $q((resolve, reject) => {
    //      $http.delete(`${FBCreds.databaseURL}/commands/${commandId}.json`)
    //          .then((ObjectFromFirebase) => {
    //              resolve(ObjectFromFirebase);
    //          });
    //  });
    // };
    ////////////////////////////////////////
    // let getSingleCommand = (commandId) => {
    //     return $q(function(resolve, reject) {
    //         // $http.get(`${FBCreds.databaseURL}/commands/${commandId}.json`)   ///////////DO YOU NEED FBCreds???

    //             .then(function(commandObject) {
    //                 resolve(commandObject.data);
    //             })
    //         .catch(function(error) {
    //             reject(error);
    //         });
    //     });
    // };
    ////////////////////////////////////////
    // let updateCommand = (commandId, editedCommand) => {
    //  return $q(function(resolve, reject) {
    //      $http.patch(`${FBCreds.databaseURL}/commands/${commandId}.json`, angular.toJson(editedCommand))
    //          .then(function(ObjectFromFirebase) {
    //              resolve(ObjectFromFirebase);
    //          })
    //      .catch(function(error) {
    //          reject(error);
    //      });
    //  });
    // };

    // return {getCommandList, getSingleCommand};   ///////////DO YOU NEED ALL OF THESE???
    return {getCommandList};
});
