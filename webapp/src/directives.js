(function() {
  angular.
  module('app').
  directive('triviaCategory', ['QuestionService', TriviaCategory]).
  directive('triviaQuestion', ['QuestionService', TriviaQuestion]);

  function TriviaCategory(QuestionService) {
    return {
      restrict: 'E',
      templateUrl: '../templates/category.tpl.html',
      replace: true,
      scope: {
        category: '=',
        categories: '='
      },
      link: function($scope, elem, attr) {

      },
      controller: function($scope) {
      }
    }
  }

  function TriviaQuestion(QuestionService) {
    return {
      restrict: 'E',
      templateUrl: '../templates/question.tpl.html',
      replace: true,
      scope: {
        question: '='
      },
      link: function($scope, elem, attr, ctrl) {
        $scope.activate = activate;

        function activate(question) {
          QuestionService.deactivateAll();
          question.active = true;
        }
      }
    };
  }
})();
