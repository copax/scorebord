(function() {
  angular.
  module('app').
  directive('triviaAdminQuestion', ['QuestionService', TriviaAdminQuestion]);

  function TriviaAdminQuestion(QuestionService) {
    return {
      restrict: 'E',
      templateUrl: '../../templates/question.admin.tpl.html',
      replace: true,
      scope: {
        question: '='
      },
      link: function($scope, elem, attr, ctrl) {
        //$scope.activate = activate;
        //$scope.reveal = reveal;
      }
    };
  }
})();
