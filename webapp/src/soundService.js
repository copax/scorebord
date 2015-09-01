(function() {
  angular.
  module('app').
  service('SoundService', function() {
    this.getAudioFiles = function() {
     return [
        'snd/j-woosh.wav',
        'snd/j64-endround.wav',
        'snd/j64-ringin.wav',
        'snd/jdaily2x.wav',
        'snd/jeop-dj84woosh.wav',
        'snd/j64-endround.wav',
        'snd/jtime.wav',
        'snd/j64-dailydoub.wav',
        'snd/j64-outtatime.wav',
        'snd/jboardfill.wav',
        'snd/jdits.wav',
        'snd/jfinalj.wav'
      ];
    };
  });
})();
