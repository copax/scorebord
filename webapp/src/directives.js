(function() {
  angular.
  module('app').
  directive('triviaCategory', ['QuestionService', TriviaCategory]).
  directive('triviaQuestion', ['QuestionService', 'SoundService', 'ngAudio', TriviaQuestion]);

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

  function TriviaQuestion(QuestionService, SoundService, ngAudio) {
    return {
      restrict: 'E',
      templateUrl: '../templates/question.tpl.html',
      replace: true,
      scope: {
        question: '='
      },
      link: function($scope, elem, attr, ctrl) {
        $scope.activate = activate;

        var woosh = SoundService.getWooshingEffect();

        function activate(question) {
          woosh.play();

          QuestionService.deactivateAll();
          question.active = true;
        }
      }
    };
  }
})();
