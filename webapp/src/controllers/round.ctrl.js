(function() {
  angular.
  module('app').
  controller('RoundCtrl', ['$scope', '$http', '$routeParams', 'BuzzrService', RoundController]);

  function RoundController($scope, $http, $routeParams, BuzzrService) {
    var pollInterval = setInterval(buttonPoll, 100);

    $scope.team = {name: 'Awaiting Buzzes!!!'};
    $scope.mode = $routeParams.mode;
    $scope.nextRound = parseInt(parseInt($routeParams.round) + 1);
    $scope.previousRound = parseInt(parseInt($routeParams.round) - 1);

    var pollUrl = '/api/index.php/fetchteam/' + $routeParams.mode || '2TMS';

    function buttonPoll() {
      $http.get(pollUrl).then(function(response) {
        if (response.data && response.data.team.length) {
          if (response.data.team[0].name !== $scope.team) {
            $scope.team = response.data.team[0];

            if (BuzzrService.hasButtonBeenPressed()) return;
            BuzzrService.buttonPressed(
              function(secondsLeft) {
                /* update progress */
                console.log("RoundCtrl: " + secondsLeft);
              },
              function() {
                /* timer has expired do yo thing! */
                console.log("RoundCtrl: time expired");
                BuzzrService.stopButtonPressInterval();
              });
          }
        } else {
          if ($scope.team.name !== 'Awaiting Buzzes!!!') {
            $scope.team = {name: 'Awaiting Buzzes!!!'};
            BuzzrService.resetBuzzrService();
          }
        }
      });
    }

    $scope.$on('$destroy', function() {
      clearInterval(pollInterval);
      pollInterval = null;
      BuzzrService.resetBuzzrService();
    });
  }
})();
