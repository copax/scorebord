(function() {
  angular.
  module('app').
  directive('triviaCategory', TriviaCategory).
  directive('triviaQuestion', TriviaQuestion);

  function TriviaCategory() {
    return {
      restrict: 'E',
      templateUrl: '../templates/category.tpl.html',
      replace: true,
      scope: {

      },
      link: function($scope, elem, attr) {
        
      }
    }
  }

  function TriviaQuestion() {
    return {
      restrict: 'E',
      templateUrl: '../templates/question.tpl.html',
      replace: true,
      scope: {
        question: '=',
        deactivateAll: '&'
      },
      link: function($scope, elem, attr, ctrl) {
        $scope.activate = activate;

        function activate(question) {
          deactivateAll();
          question.active = true;
        }
      }
    };
  }
})();
