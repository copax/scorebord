(function() {
  angular.
  module('app').
  controller('RoundAdminCtrl', ['$scope', '$http', '$routeParams', RoundAdminController]);

  function RoundAdminController($scope, $http, $routeParams) {
    console.log("RoundAdminController");
  }
})();
