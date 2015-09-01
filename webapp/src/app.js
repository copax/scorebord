(function() {
  angular.
  module('app', []).
  controller('TriviaCtrl', ['$scope', '$http', 'QuestionService', 'SoundService', 'ngAudio', TriviaController]);

  function TriviaController($scope, $http, QuestionService, SoundService, ngAudio) {
    $scope.categories = QuestionService.getQuestions();
    $scope.audioFiles = SoundService.getAudioFiles();
  }
})();
