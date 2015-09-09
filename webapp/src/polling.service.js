(function() {
  angular.
  module('app').
  service('PollingService', [PollingService]);

  function PollingService() {
    function buttonPoll(variable) {
      $http.get('/api/index.php/fetchteam/2TMS').then(function(response) {
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

    buttonPoll();
  }
});
