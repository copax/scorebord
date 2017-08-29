(function() {
  angular.
  module('app').
  controller('TeamCtrl', ['$scope', '$routeParams', '$http', 'TeamSelectionService', TeamController]);

  function TeamController($scope, $routeParams, $http, TeamSelectionService) {
    if ($routeParams && $routeParams.round) {
      $scope.round = $routeParams.round;

      TeamSelectionService.getQuestions($routeParams.round).then(function(data) {
        $scope.categories = data;
      });
    }
  }
})();
