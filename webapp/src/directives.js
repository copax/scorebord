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

        var woosh = SoundService.getWooshingEffect(),
            timedOut = SoundService.getTakenTooLongToAnswer();

        woosh.volume = 0.5;
        timedOut.volume = 1.0;

        function activate(question) {
          woosh.play();

          function outOfTime() {
            timedOut.play();
            QuestionService.deactivateAll();
          }

          window.setTimeout(outOfTime, 5000);

          QuestionService.deactivateAll();
          question.active = true;
        }
      }
    };
  }
})();
