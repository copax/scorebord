(function() {
  angular.
  module('app').
  service('QuestionService', ['$http', QuestionService]);

  function QuestionService($http) {
    var cache,
        self = this;

    this.deactivateAll = function() {
      if (this.cache && this.cache.length) {
        this.cache.forEach(function(category) {
          category.questions.forEach(function(question) {
            question.active = false;
          });
        });
      }
    };

    this.allQuestionsActivated = function() {
      return this.cache.every(function(category) {
        return allQuestionsInCategoryActivated = category.questions.every(function(question) {
          return question.activated;
        });
      });
    };

    this.getQuestions = function(round) {
      return $http.get('/api/index.php/getquestions/' + round).then(function(response) {
        self.cache = response.data;
        return response.data;
      });
    };

    this.getRandomQuestions = function(round) {
      return $http.get('/api/index.php/getquestionsrandom/' + round).then(function(response) {
        self.cache = response.data;
        return self.cache;
      });
    }
  }
})();
