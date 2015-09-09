(function() {
  angular.
  module('app').
  controller('RoundCtrl', ['$scope', '$http', '$routeParams', RoundController]);

  function RoundController($scope, $http, $routeParams) {
    console.log('new controller');

    if ($routeParams && $routeParams.round) {
      $scope.nextRound = parseInt($routeParams.round) + 1;
    }

    function buttonPoll() {
      $http.get('/api/index.php/fetchteam/12TM').then(function(response) {
        if (response.data && response.data.team.length) {
          if (response.data.team[0].name !== $scope.team) {
            $scope.team = response.data.team[0].name;
          }
        } else {
          if ($scope.team !== '') {
            $scope.team = '';
          }
        }
      });
    }

    var pollInterval = setInterval(buttonPoll, 100);

    $scope.$on('$destroy', function() {
      clearInterval(buttonPoll);
      pollInterval = 0;
      console.log(pollInterval);
    });
  }
})();
