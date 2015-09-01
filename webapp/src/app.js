(function() {
  angular.
  module('app', []).
  controller('TriviaCtrl', ['$scope', '$http', 'QuestionService', 'SoundService', 'ngAudio', TriviaController]);

  function TriviaController($scope, $http, QuestionService, SoundService, ngAudio) {
    $scope.categories = QuestionService.getQuestions().categories;
    $scope.audioFiles = SoundService.getAudioFiles();
    $scope.activate = activate;

    $scope.audio = ngAudio.load($scope.audioFiles[0]);
    $scope.audio.volume = 0.8;

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
