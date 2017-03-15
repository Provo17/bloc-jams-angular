 (function() {
     function Fixtures() {
        var Fixtures = {};

        var albumPicasso = {
         title: 'The Colors',
         artist: 'Pablo Picasso',
         label: 'Cubism',
         year: '1881',
         albumArtUrl: 'assets/images/album_covers/01.png',
         songs: [
             { title: 'Blue', duration: '161.71', audioUrl: '/assets/music/blue' },
             { title: 'Green', duration: '103.96', audioUrl: '/assets/music/green' },
             { title: 'Red', duration: '268.45', audioUrl: '/assets/music/red' },
             { title: 'Pink', duration: '153.14', audioUrl: '/assets/music/pink' },
             { title: 'Magenta', duration: '374.22', audioUrl: '/assets/music/magenta' }
            ]
        };

        var albumMarconi = {
         title: 'The Telephone',
         artist: 'Guglielmo Marconi',
         label: 'EM',
         year: '1909',
         albumArtUrl: '/assets/images/album_covers/20.png',
         songs: [
             { title: 'Hello, Operator?', duration: '1:01' },
             { title: 'Ring, ring, ring', duration: '5:01' },
             { title: 'Fits in your pocket', duration: '3:21' },
             { title: 'Can you hear me now?', duration: '3:14' },
             { title: 'Wrong phone number', duration: '2:15' }
            ]
        };
      
        var albumThree = {
         title: 'The bonez',
         artist: 'Johhny Newport',
         label: 'EM',
         year: '1909',
         albumArtUrl: '/assets/images/album_covers/02.png',
         songs: [
             { title: 'Hello, Operator?', duration: '1:01' },
             { title: 'Ring, ring, ring', duration: '5:01' },
             { title: 'Fits in your pocket', duration: '3:21' },
             { title: 'Can you hear me now?', duration: '3:14' },
             { title: 'Wrong phone number', duration: '2:15' }
            ]
        };  
      
        var albumFour = {
         title: 'Love',
         artist: 'HeartBeats',
         label: 'EM',
         year: '1909',
         albumArtUrl: '/assets/images/album_covers/17.png',
         songs: [
             { title: 'Hello, Operator?', duration: '1:01' },
             { title: 'Ring, ring, ring', duration: '5:01' },
             { title: 'Fits in your pocket', duration: '3:21' },
             { title: 'Can you hear me now?', duration: '3:14' },
             { title: 'Wrong phone number', duration: '2:15' }
            ]
        };      

        var albumFive = {
         title: 'Julie',
         artist: 'Sam Nevers',
         label: 'Cubism',
         year: '1881',
         albumArtUrl: 'assets/images/album_covers/15.png',
         songs: [
             { title: 'Blue', duration: '161.71', audioUrl: '/assets/music/blue' },
             { title: 'Green', duration: '103.96', audioUrl: '/assets/music/green' },
             { title: 'Red', duration: '268.45', audioUrl: '/assets/music/red' },
             { title: 'Pink', duration: '153.14', audioUrl: '/assets/music/pink' },
             { title: 'Magenta', duration: '374.22', audioUrl: '/assets/music/magenta' }
            ]
        };

        var albumSix = {
         title: 'The New Tale',
         artist: 'ASAP',
         label: 'EM',
         year: '1909',
         albumArtUrl: '/assets/images/album_covers/13.png',
         songs: [
             { title: 'Hello, Operator?', duration: '1:01' },
             { title: 'Ring, ring, ring', duration: '5:01' },
             { title: 'Fits in your pocket', duration: '3:21' },
             { title: 'Can you hear me now?', duration: '3:14' },
             { title: 'Wrong phone number', duration: '2:15' }
            ]
        };
      
        var albumSeven = {
         title: 'Stack Flow',
         artist: 'Ohms',
         label: 'EM',
         year: '1909',
         albumArtUrl: '/assets/images/album_covers/18.png',
         songs: [
             { title: 'Hello, Operator?', duration: '1:01' },
             { title: 'Ring, ring, ring', duration: '5:01' },
             { title: 'Fits in your pocket', duration: '3:21' },
             { title: 'Can you hear me now?', duration: '3:14' },
             { title: 'Wrong phone number', duration: '2:15' }
            ]
        };  
      
        var albumEight = {
         title: 'Swing for the Fences',
         artist: 'The Duggouts',
         label: 'EM',
         year: '1909',
         albumArtUrl: '/assets/images/album_covers/19.png',
         songs: [
             { title: 'Hello, Operator?', duration: '1:01' },
             { title: 'Ring, ring, ring', duration: '5:01' },
             { title: 'Fits in your pocket', duration: '3:21' },
             { title: 'Can you hear me now?', duration: '3:14' },
             { title: 'Wrong phone number', duration: '2:15' }
            ]
        };      

        Fixtures.getAlbum = function() {
            return albumPicasso;
        };

        Fixtures.getCollection = function(numberOfAlbums) {
             var albums = [];
             for (var i = 0; i < numberOfAlbums; i++) {
                 albums.push(albumPicasso,albumMarconi,albumThree,albumFour,albumFive,albumSix,albumSeven,albumEight);
             }
             return albums;
         };

         return Fixtures;
     }

     angular
         .module('blocJams')
         .factory('Fixtures', Fixtures);
 })();
