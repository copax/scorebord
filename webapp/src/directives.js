(function() {
  angular.
  module('app').
  directive('triviaCategory', ['QuestionService', '$routeParams', TriviaCategory]).
  directive('triviaQuestion', ['QuestionService', 'SoundService', 'ngAudio', TriviaQuestion]);

  function TriviaCategory(QuestionService, $routeParams) {
    return {
      restrict: 'E',
      templateUrl: '../templates/category.tpl.html',
      replace: true,
      scope: {
        category: '=',
        categories: '='
      },
      link: function() {
      }
    };
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
        $scope.reveal = reveal;

        $scope.question.active = false;
        $scope.question.activated = false;

        var woosh = SoundService.getWooshingEffect(),
            timedOut = SoundService.getTakenTooLongToAnswer();

        woosh.volume = 0.5;
        timedOut.volume = 1.0;

        function reveal(question) {
          question.reveal = true;
        }

        function activate(question) {
          if (!question.activated) {
            woosh.play();

            console.log();

            function outOfTime() {
              timedOut.play();
              //QuestionService.deactivateAll();
            }

            myTimeouts = setTimeout(outOfTime, 15000);

            QuestionService.deactivateAll();
            question.active = true;
            question.activated = true;

            console.log(QuestionService.allQuestionsActivated());
          }
        }
      }
    };
  }
})();
