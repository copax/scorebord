(function() {
  angular.
  module('app', ['ngRoute', 'ngSanitize']).
  run(['$rootScope', '$http', run]).
  config(['$routeProvider', config]);

  function run($rootScope, $http) {


    function deactivate() {
      $rootScope.$apply(function() {
          
      });
    }

    window.addEventListener('keyup', (function(evt) {
      if (evt.keyCode === 27) {
        deactivate();
      }
    }));

    /*
    window.addEventListener('click', function(evt) {
      if (evt.target.className.indexOf('modal') !== -1) {
        deactivate();
      }
    });
    */
  }

  function config($routeProvider) {
    $routeProvider.
    when('/admin', {
      templateUrl: '/templates/team.admin.tpl.html'
    }).
    otherwise({
        templateUrl: '/templates/default.tpl.html'
    });
  }
})();
