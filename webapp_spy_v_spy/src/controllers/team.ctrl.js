(function() {
  angular.
  module('app').
  controller('TeamCtrl', ['$scope', '$routeParams', '$http', TeamController]);

  function TeamController($scope, $routeParams, $http) {

    $scope.teamCount = 4;





    // if ($routeParams && $routeParams.) {
    //   $scope.round = $routeParams.round;
    //
    //   TeamSelectionService.getQuestions($routeParams.round).then(function(data) {
    //     $scope.categories = data;
    //   });
    // }
  }
})();
