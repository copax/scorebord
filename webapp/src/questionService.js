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

    //$http.get('/api/index.php/getquestions/1').then(function(response) {
    //  console.log(response);
    //});

    this.getQuestions = function() {
      return $http.get('/api/index.php/getquestions/3').then(function(response) {
        self.cache = response.data;
        return response.data;
      });
    };
  }
})();
