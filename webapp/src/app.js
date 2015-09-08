var myTimeouts;

// pi raspberry

(function() {
  angular.
  module('app', []).
  run(['$rootScope', '$http', 'QuestionService', 'SoundService', run]).
  controller('TriviaCtrl', ['$scope', '$http', 'QuestionService', 'ngAudio', TriviaController]);

  function TriviaController($scope, $http, QuestionService) {
    QuestionService.getQuestions().then(function(data) {
      $scope.categories = data;
    });

    function buttonPoll() {
      $http.get('/api/index.php/fetchteam/2TMS').then(function(response) {
        console.log(response);
        $scope.team = response.data.team;
      });
    }

    buttonPoll();
    window.setInterval(buttonPoll, 500);
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
})();
