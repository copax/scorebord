'use strict';

angular.module('TeamDay.TeamCtrl', ['ngRoute', 'ngCookies'])
    .controller('TeamCtrl', ['$scope','$routeParams','$cookies','$http','$route',
        function ($scope, $routeParams, $cookies, $http, $route) {

    		//Global Team Data
			$scope.teamsData = [['1','Avengers','avengers.jpg'],
				['2','Back to the Future','back_to_the_future.jpg'],
				['3','Ghostbusters','ghostbusters.jpg'],
				['4','Guardians of the Galaxy','gotg.jpg'],
				['5','Harry Potter','harry_potter.jpg'],
				['6','Indiana Jones','indiana_jones.jpg'],
				['7','James Bond','james_bond_2.jpg'],
				['8','Jurassic Park','jurassic_park.jpg'],
				['9','Major League','major_league.jpg'],
				['10','Star Trek','star_trek.jpg'],    		
				['11','Star Wars','star_wars.jpg'],
				['12','The Godfather','the_godfather.jpg']];
				
    		
    		//Team Vars
    		$scope.teamCnts = [];
    		var teamMin = 1;
            var teamMax = $scope.teamsData.length;
            var randomTeam = 0;
            $scope.teamLevel = 1;
			$scope.TEAMNAME = "Box Office";
			$scope.IMG_FILE = "boxoffice.jpg";
			
    		//Button Poll 
    		var pollInterval = setInterval(buttonPoll, 2000);
    		var pollUrl = '/api/index.php/fetchcurrentteam';
    		
    		var resetUrl = '/api/index.php/resetteam';
    		
            //Pull Cookies
            $scope.teamCnts = $cookies.getObject('cnts');
            $scope.teamLevel = $cookies.get('teamLvl');

            if ($routeParams) {
                if ($routeParams.p == 'c57664b4-32f2-4d5b-8093-be8f01b7927a') {
                	$scope.teamCnts = [];
                	$scope.teamLevel = 1;
                	for (var i = 0; i < teamMax; i++) {
                    	$scope.teamCnts[i] = 0;
                    }
                    $cookies.putObject('cnts',$scope.teamCnts);
                    $cookies.put('teamLvl',1);
                    console.log('Reset and Ready');
                }
            }
            
            function buttonPoll() {
                $http.get(pollUrl).then(function(response) {
                  if (response.data && response.data.team.length) {
                	  console.log('have team');
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
                			  $scope.TEAMNAME = $scope.teamsData[randomTeam - 1][1];
                			  $scope.IMG_FILE = $scope.teamsData[randomTeam - 1][2];
                		}
                	}
                    
                	$cookies.putObject('cnts',$scope.teamCnts);
                    $cookies.put('teamLvl',$scope.teamLevel);
                	
                    $http.post(resetUrl).then(function(response) {
                    	console.log('reset');

                    })
                  }                
                });
            }
    }]);
                                                            
