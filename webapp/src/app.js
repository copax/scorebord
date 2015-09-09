(function() {
  angular.
  module('app', ['ngRoute']).
  run(['$rootScope', '$http', 'QuestionService', 'SoundService', run]).
  config(['$routeProvider', config]);

  function run($rootScope, $http, QuestionService, SoundService) {
    var myTimeouts;

    window.addEventListener('keyup', (function(evt) {
      if (evt.keyCode === 27) {
        $rootScope.$apply(function() {
          QuestionService.deactivateAll();
          SoundService.killAll();

          clearTimeout(myTimeouts);
        });
      }
    }));

    window.addEventListener('click', function(evt) {
      if (evt.target.className.indexOf('modal') !== -1) {
        $rootScope.$apply(function() {
          QuestionService.deactivateAll();
          SoundService.killAll();
        });
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
