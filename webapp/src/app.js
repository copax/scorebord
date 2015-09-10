(function() {
  angular.
  module('app', ['ngRoute', 'ngSanitize']).
  run(['$rootScope', '$http', 'QuestionService', 'SoundService', run]).
  config(['$routeProvider', config]);

  function run($rootScope, $http, QuestionService, SoundService) {
    window.triviaSoundTimeout = null;

    function killAllSoundsAndDeactivate() {
      $rootScope.$apply(function() {
        QuestionService.deactivateAll();
        SoundService.killAll();

        clearTimeout(triviaSoundTimeout);
      });
    }

    window.addEventListener('keyup', (function(evt) {
      if (evt.keyCode === 27) {
        killAllSoundsAndDeactivate();
      }
    }));

    window.addEventListener('click', function(evt) {
      if (evt.target.className.indexOf('modal') !== -1) {
        killAllSoundsAndDeactivate();
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
