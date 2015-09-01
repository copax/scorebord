(function() {
  angular.
  module('app').
  directive('triviaQuestion', TriviaQuestion);

  function TriviaQuestion() {
    return {
      restrict: 'E',
      templateUrl: './templates/question.tpl.html',
      replace: true,
      scope: {
        question: '='
      },
      link: function($scope, elem, attr, ctrl) {
        console.log($scope);
      }
    };
  }
})();
