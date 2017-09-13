(function() {
  angular.
  module('app').
  directive('triviaAdminCategory', ['QuestionService', '$routeParams', TriviaAdminCategory]);

  function TriviaAdminCategory(QuestionService, $routeParams) {
    return {
      restrict: 'E',
      templateUrl: '../templates/category.admin.tpl.html',
      replace: true,
      scope: {
        category: '=',
        categories: '='
      }
    };
  }
})();
