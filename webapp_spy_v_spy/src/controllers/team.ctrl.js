'use strict';

angular.module('SpyVsSpy.TeamCtrl', ['ngRoute'])
    .controller('TeamCtrl', ['TeamCntService',
        function ($scope, $routeParams) {
            var teamMin = 1;
            var teamMax = 2;
            var randomTeam = 0;


            if ($routeParams) {
                if ($routeParams.p == 'c57664b4-32f2-4d5b-8093-be8f01b7927a') {
                    TeamCntService.resetCounts();
                }
                else {
                    randomTeam = Math.floor( Math.random() * (teamMax - teamMin ) + teamMin);
                    console.log('Random Team:' + randomTeam );
                    TeamCntService.setCount(randomTeam);
                    console.log(TeamCntService.getCount(randomTeam));

                }
            }
        }]
    );
                                                            
