(function() {
  angular.
  module('app').
  directive('triviaCategory', ['QuestionService', '$routeParams', TriviaCategory]);

  function TriviaCategory(QuestionService, $routeParams) {
    return {
      restrict: 'E',
      templateUrl: '../templates/category.tpl.html',
      replace: true,
      scope: {
        category: '=',
        categories: '='
      },
      link: function($scope) {
        $scope.categoryFinished = function() {
          return $scope.category.questions.every(function(question) {
            return question.activated;
          });
        };
      }
    };
  }
})();
