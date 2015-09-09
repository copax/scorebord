(function() {
  angular.
  module('app').
  directive('triviaAdminQuestion', ['QuestionService', 'SoundService', 'ngAudio', TriviaAdminQuestion]);

  function TriviaAdminQuestion(QuestionService, SoundService, ngAudio) {
    return {
      restrict: 'E',
      templateUrl: '../../templates/question.admin.tpl.html',
      replace: true,
      scope: {
        question: '='
      },
      link: function($scope, elem, attr, ctrl) {
        $scope.activate = activate;
        $scope.reveal = reveal;
      }
    };
  }
})();
