(function() {
  angular.
  module('app').
  directive('triviaQuestion', ['QuestionService', 'BuzzrService', TriviaQuestion]);

  function TriviaQuestion(QuestionService, BuzzrService) {
    return {
      restrict: 'E',
      templateUrl: '../../templates/question.tpl.html',
      replace: true,
      scope: {
        question: '='
      },
      link: function($scope, elem, attr, ctrl) {
        var killTimeWatch;

        $scope.activate = activate;
        $scope.reveal = reveal;
        $scope.dismiss = dismiss;

        $scope.question.active = false;
        $scope.question.activated = false;
        $scope.question.reveal = false;

        $scope.time = BuzzrService.getTimeLeft();

        $scope.$on('$destroy', function() {
          BuzzrService.resetBuzzrService();
          killTimeWatch();
        });

        function reveal(question) {
          question.reveal = true;

          BuzzrService.stopButtonPressInterval();
        }

        function dismiss(question) {
          question.reveal = false;

          BuzzrService.stopButtonPressInterval();
          QuestionService.deactivateAll();
        }

        function activate(question) {
          if (!question.active) {
            question.outOfTime = false;

            BuzzrService.registerListeners(function(timeLeft) {
              $scope.time = timeLeft;
            });

            killTimeWatch = $scope.$watch('time', function(currentTime) {
              question.outOfTime = (currentTime === 0);
            });

            if (BuzzrService.hasButtonBeenPressed()) return;

            QuestionService.deactivateAll();
            question.active = true;
            question.activated = true;

            if (QuestionService.allQuestionsActivated()) {
              console.log('Probably a good time to start a new round!');
            }
          }
        }
      }
    };
  }
})();
