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
        $scope.activate = activate;
        $scope.reveal = reveal;
        $scope.dismiss = dismiss;

        $scope.question.active = false;
        $scope.question.activated = false;

        function reveal(question) {
          question.reveal = true;
        }

        function dismiss() {
          QuestionService.deactivateAll();
        }

        function activate(question) {
          //if (!question.activated) {
            question.outOfTime = false;
            
            triviaTimeout = setTimeout(function() {
              question.outOfTime = true;
            }, 15000);

            QuestionService.deactivateAll();
            question.active = true;
            question.activated = true;

            if (QuestionService.allQuestionsActivated()) {
              console.log('Probably a good time to start a new round!');
            }
          //}
        }
      }
    };
  }
})();
