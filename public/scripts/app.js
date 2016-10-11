(function(){
    function config($stateProvider, $locationprovider) {
        $locationprovider
            .html5Mode({
                enabled: true,
                requireBase: false
        });

        $stateProvider
            .state('landing', {
                url: '/',
                templateUrl: '/templates/landing.html'
        })
         .state('album', {
             url: '/album',
             templateUrl: '/templates/album.html'
         });
    }

    angular.module('bloc-jams', ['ui.router']);
        angular
            .module('bloc-jams', ['ui.router'])
            .config(config);
})();
