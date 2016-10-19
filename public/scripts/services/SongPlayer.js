(function() {
    function SongPlayer($rootScope, Fixtures) {

        var SongPlayer = {};

        /**
        * @desc allows access to albumPiccasso
        * @type {object}
        */
        var currentAlbum = Fixtures.getAlbum();

        /**
        * @desc Buzz object audio file
        * @type {Object}
        */
        var currentBuzzObject = null;

        /**
        * @function setSong
        * @desc Stops currently playing song and loads new audio file as currentBuzzObject
        * @param {Object} song
        */

        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            currentBuzzObject.bind('timeupdate', function() {
                $rootScope.$apply(function() {
                SongPlayer.currentTime = currentBuzzObject.getTime();
                });
            });

            currentBuzzObject.bind('ended', function() {
                SongPlayer.next();
            });

            SongPlayer.currentSong = song;
        };

        /**
         * @function playSong
         * @desc plays song
         * @param {Object} song
         */

        var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
        };

        /**
         * @function stopSong
         * @desc stops song
         * @param {Object} song
         */
        var stopSong = function(song) {
            currentBuzzObject.stop();
            SongPlayer.currentSong.playing = null;
        };

        /**
         * @function getSongIndex
         * @desc gets index of a song
         * @param {Object} song
         */
        var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
        };


        /**
        * @desc Active song object from list of songs
        * @type {Object}
        */
        SongPlayer.currentSong = null;

         /**
         * @desc Current playback time (in seconds) of currently playing song
         * @type {Number}
         */
         SongPlayer.currentTime = null;

         /**
        * @desc Current volume
        * @type {Number}
        */
         SongPlayer.volume = 80;

         /**
        * @desc Boolean value for mute
        * @type {Boolean}
        */
         SongPlayer.muted = false;

         /**
        * @desc Variable that stores previous volume
        * @type {Number}
        */
         SongPlayer.previousVolume = 80;

         /**
         * @function play
         * @desc Play current or new song
         * @param {Object} song
         */

        SongPlayer.play = function(song) {

            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {

                setSong(song);
                playSong(song);

            } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong(song);
                }
            }

        };

         /**
         * @function pause
         * @desc Pause current song
         * @param {Object} song
         */

        SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
        };

        /**
         * @function previous
         * @desc gets previous song
         */
         SongPlayer.previous = function() {
             var currentSongIndex = getSongIndex(SongPlayer.currentSong);
             currentSongIndex--;

             if (currentSongIndex < 0) {
                 stopSong(song);
             } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
             }
         };

        /**
         * @function next
         * @desc gets next song
         */
        SongPlayer.next = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;

            if (currentSongIndex > currentSongIndex.length-1) {
                stopSong(song);
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };

         /**
         * @function setCurrentTime
         * @desc Set current time (in seconds) of currently playing song
         * @param {Number} time
         */
         SongPlayer.setCurrentTime = function(time) {
             if (currentBuzzObject) {
                 currentBuzzObject.setTime(time);
             }
         };

          /**
         * @function setVolume
         * @desc Set volume to current song
         * @param {Number} volume
         */
          SongPlayer.setVolume = function(volume) {
             if (currentBuzzObject) {
                 currentBuzzObject.setVolume(volume);
             }
              SongPlayer.volume = volume;
          };

         /**
         * @function muteVolume
         * @desc Set volume to zero
         */
          SongPlayer.muteVolume = function() {
             if (currentBuzzObject) {
                 SongPlayer.previousVolume = SongPlayer.volume;
                 currentBuzzObject.setVolume(0);
                 SongPlayer.volume = 0;
                 SongPlayer.muted = true;
             }
          };

         /**
         * @function unmuteVolume
         * @desc Resotres volume
         */
          SongPlayer.unmuteVolume = function() {
             if (currentBuzzObject) {
                 currentBuzzObject.setVolume(SongPlayer.previousVolume);
                 SongPlayer.volume = SongPlayer.previousVolume;
                 SongPlayer.muted = false;
             }
          };


        return SongPlayer;
     }

     angular
         .module('blocJams')
         .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
 })();
