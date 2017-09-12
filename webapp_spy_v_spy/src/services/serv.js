'use strict';

angular.module('SpyVsSpy.services', [])
    .factory('TeamCntService', function ($rootScope) {
    var teamCnts = [];
    var teamMax = 12;

    teamCnts.resetCounts = function () {
        for (var i = 0; i < teamMax; i++) {
            teamCnts[i] = 0;
        }
        this.broadcastTeamCntChangeEvent();
    };

    teamCnts.broadcastTeamCntChangeEvent = function() {
        $rootScope.$broadcast('teamCntChangeEvent');
    };

    teamCnts.setCount = function (x) {
        teamCnt[x]++;
        this.broadcastTeamCntChangeEvent();
    }

    teamCnts.getCount = function (x) {
        return teamCnts[x];
    }

    return teamCnts;
});