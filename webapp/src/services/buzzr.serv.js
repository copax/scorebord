(function() {
  angular.
  module('app').
  service('BuzzrService', [BuzzrService]);

  function BuzzrService() {
    var decrementTimer = null;
    var totalSeconds = 5;

    this.hasButtonBeenPressed = function() {
        return this.decrementTimer != null;
    };

    this.buttonPressed = function(onProgressCallback, onCompletedCallback) {
      var seconds = totalSeconds;

      this.decrementTimer = setInterval(function() {
        seconds--;
        if (seconds <= 0) {
          onCompletedCallback();
        } else
          onProgressCallback(seconds);

        console.log("BuzzrService: seconds: " + seconds);

      }, 1000); /* once a second */
    };

    this.stopButtonPressInterval = function() {
      console.log("BuzzrService: Stopping intervals");

      clearInterval(this.decrementTimer);
    };

    this.resetBuzzrService = function() {
      console.log("BuzzrService: Reseting");

      this.stopButtonPressInterval();
      this.decrementTimer = null;
    }

  }
})();
