(function() {
  angular.
  module('app').
  controller('RoundCtrl', ['$scope', '$http', '$routeParams', RoundController]);

  function RoundController($scope, $http, $routeParams) {
    var pollInterval = setInterval(buttonPoll, 100);

    $scope.team = {name: 'Awaiting Buzzes!!!'};
    $scope.nextRound = '#/round/' + parseInt(parseInt($routeParams.round) + 1) + '?mode=' + $routeParams.mode;
    $scope.previousRound = '#/round/' + parseInt(parseInt($routeParams.round) - 1) + '?mode=' + $routeParams.mode;

    var pollUrl = '/api/index.php/fetchteam/' + $routeParams.mode || '2TMS';

    function buttonPoll() {
      $http.get(pollUrl).then(function(response) {
        if (response.data && response.data.team.length) {
          if (response.data.team[0].name !== $scope.team) {
            $scope.team = response.data.team[0];
          }
        } else {
          if ($scope.team.name !== 'Awaiting Buzzes!!!') {
            $scope.team = {name: 'Awaiting Buzzes!!!'};
          }
        }
      });
    }

    $scope.$on('$destroy', function() {
      clearInterval(pollInterval);
      pollInterval = null;
    });
  }
})();
