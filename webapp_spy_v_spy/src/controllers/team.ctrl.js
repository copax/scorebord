'use strict';

angular.module('SpyVsSpy.TeamCtrl', ['ngRoute', 'ngCookies'])
    .controller('TeamCtrl', ['$scope','$routeParams','$cookies',
        function ($scope, $routeParams, $cookies) {
    		$scope.teamCnts = [];
    		var teamMin = 1;
            var teamMax = 12;
            var randomTeam = 0;
            $scope.teamLevel = 1;
            
            $scope.teamCnts = $cookies.getObject('cnts');
            $scope.teamLevel = $cookies.get('teamLvl');

            if ($routeParams) {
                if ($routeParams.p == 'c57664b4-32f2-4d5b-8093-be8f01b7927a') {
                    for (var i = 0; i < teamMax; i++) {
                    	$scope.teamCnts[i] = 0;
                    }
                    $cookies.putObject('cnts',$scope.teamCnts);
                    $cookies.put('teamLvl',1);
                    console.log('Reset and Ready');
                }
                else {
                	var openSpots = 0;
                	for ( var i = 0; i < teamMax; i++){
                		if ($scope.teamCnts[i] < $scope.teamLevel){
                			openSpots++;
                		}
                	}
                	console.log('openSpots - ' + openSpots);
                	if (openSpots == 0){             		
                		$scope.teamLevel++;
                	}
                	console.log('level - ' + $scope.teamLevel);

                	var filled = 0;
                	while (filled == 0){
                		randomTeam = Math.floor( Math.random() * ((teamMax+1) - teamMin ) + teamMin);
                		if ($scope.teamCnts[randomTeam -1] < $scope.teamLevel ){
                			$scope.teamCnts[randomTeam -1]++;
                			filled = 1;
                			console.log('filled - ' + (randomTeam - 1));
                		}
                	}
                    
                	$cookies.putObject('cnts',$scope.teamCnts);
                    $cookies.put('teamLvl',$scope.teamLevel);

                }
            }
        }]);
                                                            
