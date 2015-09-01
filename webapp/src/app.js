(function() {
  angular.
  module('app', []).
  controller('TriviaCtrl', ['$scope', '$http', 'QuestionService', TriviaController]);
  
  function TriviaController($scope, $http, QuestionService) {
    $scope.categories = QuestionService.getQuestions().categories;
    
    $scope.activate = activate;
    
    function activate(question) {
      deactivateAll();
      question.active = true;
    }
    
    function deactivateAll() {
      $scope.categories.forEach(function(category) {
        category.questions.forEach(function(question) {
          question.active = false;
        });
      });
    }
    
    document.addEventListener('keyup', (function(event) {
      if (event.keyCode === 27) {
        $scope.$apply(function() {
          deactivateAll();
        });
      }
    }));
  }
})();
