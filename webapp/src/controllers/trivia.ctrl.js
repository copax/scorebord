(function() {
  angular.
  module('app').
  controller('TriviaCtrl', ['$scope', '$routeParams', '$http', 'QuestionService', TriviaController]);

  function TriviaController($scope, $routeParams, $http, QuestionService) {
    if ($routeParams && $routeParams.round) {
      $scope.round = $routeParams.round;

      QuestionService.getQuestions($routeParams.round).then(function(data) {
        $scope.categories = data;
      });
    }
  }
})();
