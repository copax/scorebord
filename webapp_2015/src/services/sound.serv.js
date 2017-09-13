/*
 * Sounds taken from: http://www.qwizx.com/gssfx/usa/jeop.htm
 */
(function() {
  angular.
  module('app').
  service('SoundService', ['ngAudio', function(ngAudio) {
    this.sounds = {
      wooshingEffect: ngAudio.load('snd/j-woosh.wav'),
      takenTooLongToAnswer: ngAudio.load('snd/j64-outtatime.wav')
    };

    this.killAll = function(sound) {
      clearTimeout(triviaSoundTimeout);

      for (var prop in this.sounds) {
        this.sounds[prop].stop();
      }
    };

    /*
     * Description: The Daily Double sound effect
     */
    this.getDailyDouble = function() {
      return ngAudio.load('snd/jdaily2x.wav');
    };

    /*
     * Description: The 'blong' from the Final Jeopardy answer reveal
     */
    this.getFinalJeopardyAnswerReveal = function() {
      return ngAudio.load('snd/jfinalj.wav');
    };

    /*
     * Description: This sound signals the end of the round
     */
    this.getEndOfRound = function() {
      return ngAudio.load('snd/jdits.wav');
    };

    /*
     * Description: If a player runs out of time trying to answer a question
     * or no players respond, this is played
     */
    this.getRunOutOfTimeToAnswer = function() {
      return ngAudio.load('snd/jtime.wav');
    };

    /*
     * Description: The series of dits and doots heard when loading the dollar
     * amounts into the board
     */
    this.getLoadingDollarAmount = function() {
      return ngAudio.load('snd/jboardfill.wav');
    };

    /*
     * Description: A series of bell clangs signals a Daily Double
     */
    this.getBellClangForDailDouble = function() {
      return ngAudio.load('snd/j64-dailydoub.wav');
    };

    /*
     * Description: 2 double clangs means the end of a round
     */
    this.getDoubleEndOfRound = function() {
      return ngAudio.load('snd/64-endround.wav');
    };

    /*
     * Description: A quick double-buzz means the players have taken
     * too long to answer
     */
    this.getTakenTooLongToAnswer = function() {
      return this.sounds.takenTooLongToAnswer;
    };

    /*
     * Description: This ding was played when contestants rang-in
     */
    this.getContestantsRangIn = function() {
      return ngAudio.load('snd/j64-ringin.wav');
    };

    /*
     * Description: This is the old wooshing effect used when the globe logo
     * would appear on-screen
     */
    this.getWooshingEffect = function() {
      return this.sounds.wooshingEffect;
    };

    /*
     * Description: This is the wooshing effect used when the logo would be
     * wiped from the screens, just before the Double Jeopardy! amounts are
     * loaded in
     */
    this.getWhooshingEffectToWipeScreen = function() {
      return ngAudio.load('snd/jeop-dj84woosh.wav');
    };
  }]);
})();
