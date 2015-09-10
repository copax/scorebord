(function() {
  angular.
  module('app').
  directive('triviaQuestion', ['QuestionService', 'SoundService', 'ngAudio', TriviaQuestion]);

  function TriviaQuestion(QuestionService, SoundService, ngAudio) {
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

        var woosh = SoundService.getWooshingEffect(),
            timedOut = SoundService.getRunOutOfTimeToAnswer(),
            endOfRound = SoundService.getEndOfRound();

        woosh.volume = 0.5;
        timedOut.volume = 1.0;

        function reveal(question) {
          question.reveal = true;
        }

        function dismiss() {
          QuestionService.deactivateAll();
          
          if (QuestionService.allQuestionsActivated()) {
            endOfRound.play();
            console.log('Probably a good time to start a new round!');
          }
        }

        function activate(question) {
          if (!question.activated) {

            function outOfTime() {
              timedOut.play();
              //QuestionService.deactivateAll();
            }

            triviaSoundTimeout = setTimeout(outOfTime, 15000);

            QuestionService.deactivateAll();
            question.active = true;
            question.activated = true;
          }
        }
      }
    };
  }
})();
