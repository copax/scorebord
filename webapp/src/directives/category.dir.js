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
        console.log('category linked')
        $scope.$watch('categories', function(oldValue, newValue) {
          console.log(newValue);
        });

        $scope.categoryFinished = function() {
          return $scope.category.questions.every(function(question) {
            return question.activated;
          });
        }
      }
    };
  }
})();
