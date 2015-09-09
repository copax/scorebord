var myTimeouts;

(function() {
  angular.
  module('app', ['ngRoute']).
  run(['$rootScope', '$http', 'QuestionService', 'SoundService', run]).
  config(['$routeProvider', config]).
  controller('TriviaCtrl', ['$scope', '$routeParams', '$http', 'QuestionService', 'ngAudio', TriviaController]);

  function TriviaController($scope, $routeParams, $http, QuestionService) {
    if ($routeParams && $routeParams.round) {
      $scope.round = $routeParams.round;

      QuestionService.getQuestions($routeParams.round).then(function(data) {
        $scope.categories = data;
      });
    }
  }

  function run($rootScope, $http, QuestionService, SoundService) {
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
    otherwise({
      redirectTo: '/'
    });
  }
})();
