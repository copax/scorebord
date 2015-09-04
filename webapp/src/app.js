var myTimeouts;

(function() {
  angular.
  module('app', []).
  run(['$rootScope', 'QuestionService', 'SoundService', run]).
  controller('TriviaCtrl', ['$scope', '$http', 'QuestionService', 'ngAudio', TriviaController]);

  function TriviaController($scope, $http, QuestionService) {
    $scope.categories = QuestionService.getQuestions();
  }

  function run($rootScope, QuestionService, SoundService) {
    //console.log(window, window.origin);

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
})();
