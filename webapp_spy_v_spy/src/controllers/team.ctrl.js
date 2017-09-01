(function() {
  angular.
  module('app').
  controller('TeamCtrl', ['$scope', '$routeParams', '$http', TeamController]);

  function TeamController($scope, $routeParams, $http) {

	$scope.teamCnts = [];
	var teamMin = 1;
	var teamMax = 12;
	
	if ($routeParams){
		console.log('A');
		if( $routeParams.action == 'c57664b4-32f2-4d5b-8093-be8f01b7927a') {
			console.log('B');
			$scope.teamCnts = [];
		}
		else{
			console.log('C');
			$scope.randomTeam = Math.random() * (teamMax - teamMin ) + teamMin;
		}
//	if ($routeParams && $routeParams.reset) {
//		//	}
//	
	}
  }
})();
   
