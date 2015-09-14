(function() {
  angular.
  module('app', ['ngRoute', 'ngSanitize']).
  run(['$rootScope', '$http', 'QuestionService', run]).
  config(['$routeProvider', config]);

  function run($rootScope, $http, QuestionService) {
    window.triviaTimeout = null;

    function deactivate() {
      $rootScope.$apply(function() {
        window.triviaTimeout = null;
        QuestionService.deactivateAll();
      });
    }

    window.addEventListener('keyup', (function(evt) {
      if (evt.keyCode === 27) {
        deactivate();
      }
    }));

    window.addEventListener('click', function(evt) {
      if (evt.target.className.indexOf('modal') !== -1) {
        deactivate();
      }
    });
  }

  function config($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: '/templates/mode.selection.tpl.html',
      controller: ''
    }).
    when('/round/:round', {
      templateUrl: '/templates/round.tpl.html',
      controller: 'RoundCtrl'
    }).
    when('/round/:round/admin', {
      templateUrl: '/templates/round.admin.tpl.html',
      controller: 'RoundAdminCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
})();
