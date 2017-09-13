(function() {
  angular.
  module('app').
  service('BuzzrService', [BuzzrService]);

  function BuzzrService() {
    var self = this;

    this.decrementTimer = null;
    this.totalSeconds = 5;

    this.hasButtonBeenPressed = function() {
        return this.decrementTimer != null;
    };

    this.buttonPressed = function() {
      this.decrementTimer = setInterval(function() {
        if (self.totalSeconds > 0) {
          self.totalSeconds--;
        }
        
        if (typeof self.onProgress === 'function') {
          self.onProgress(self.totalSeconds)
        }

        console.log("BuzzrService: seconds: " + self.totalSeconds);

      }, 1000); /* once a second */
    };

    this.getTimeLeft = function() {
      return this.totalSeconds;
    };

    this.registerListeners = function(onProgressCallback, onCompletedCallback) {
      self.totalSeconds = 5;
      this.onComplete = onCompletedCallback;
      this.onProgress = onProgressCallback;
    };

    this.stopButtonPressInterval = function() {
      console.log("BuzzrService: Stopping intervals");
      self.totalSeconds = 5;

      clearInterval(this.decrementTimer);
    };

    this.resetBuzzrService = function() {
      console.log("BuzzrService: Reseting");

      this.totalSeconds = 5;

      if (typeof self.onProgress === 'function') {
        self.onProgress(self.totalSeconds);
      }

      this.stopButtonPressInterval();
      this.decrementTimer = null;
    }

  }
})();
