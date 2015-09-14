(function() {
  angular.
  module('app').
  directive('triviaQuestion', ['QuestionService', TriviaQuestion]);

  function TriviaQuestion(QuestionService) {
    return {
      restrict: 'E',
      templateUrl: '../../templates/question.tpl.html',
      replace: true,
      scope: {
        question: '='
      },
      link: function($scope, elem, attr, ctrl) {
        var timer;

        $scope.activate = activate;
        $scope.reveal = reveal;
        $scope.dismiss = dismiss;

        $scope.question.active = false;
        $scope.question.activated = false;
        $scope.question.reveal = false;

        $scope.$on('$destroy', function() {
          window.clearInterval(timer);
          timer = null;
        });

        function reveal(question) {
          window.clearInterval(timer);
          timer = null;

          question.reveal = true;
        }

        function dismiss(question) {
          question.reveal = false;
          window.clearInterval(timer);
          timer = null;

          QuestionService.deactivateAll();
        }

        function questionTimer() {
          $scope.time = 15;

          return window.setInterval(function() {
            if ($scope.time > 0) {
              $scope.time --;
            } else {
              return "done";
            }
          }, 1000);
        }

        function activate(question) {
          if (!question.active) {
            question.outOfTime = false;

            $scope.$watch('time', function(current) {
              if (current === 0) {
                question.outOfTime = true;
              }
            });

            timer = questionTimer();

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
