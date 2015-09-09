(function() {
  angular.
  module('app').
  controller('RoundCtrl', ['$scope', '$http', '$routeParams', RoundController]);

  function RoundController($scope, $http, $routeParams) {
    var pollInterval = setInterval(buttonPoll, 100);

    $scope.team = {name: 'Awaiting Buzzes!!!'};

    if ($routeParams && $routeParams.round) {
      $scope.nextRound = parseInt($routeParams.round) + 1;
    }

    function buttonPoll() {
      $http.get('/api/index.php/fetchteam/2TMS').then(function(response) {
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