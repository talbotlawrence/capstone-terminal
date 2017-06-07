"use strict";

app.controller("NavCtrl", function($scope, $window, SearchTermData){
	$scope.searchText = SearchTermData;
	// $scope.isLoggedIn = false;			///////////DO YOU NEED???

	// firebase.auth().onAuthStateChanged(function(user){		///////////DO YOU NEED ANY OF THIS BELOW???
	// 	if (user) {
	// 		$scope.isLoggedIn = true;
	// 	} else	{
	// 		$scope.isLoggedIn = false;
	// 		$window.location.href = "#!/login";
	// 	}
	// });
});
