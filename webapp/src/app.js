'use strict';

angular.module('TeamDay', ['TeamDay.TeamCtrl','ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/templates/default.tpl.html'
        });
        $routeProvider.when('/team/:p', {
            templateUrl: '/templates/team.selection.tpl.html',
            controller: 'TeamCtrl'
        });
        $routeProvider.otherwise({
            templateUrl: '/templates/default.tpl.html',
            //controller: 'TeamCtrl'
        })
    }])

    .run(function($rootScope) {
        $rootScope.teams = "Team Chooser";

    });

 