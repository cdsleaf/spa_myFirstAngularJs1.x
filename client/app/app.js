(function() {
'use strict';

angular.module('spaPjtApp', ['spaPjtApp.auth', 'spaPjtApp.admin', 'spaPjtApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router', 'ui.bootstrap',
    'validation.match', 'gettext', 'sg.translation','sg.message'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .run(run);

  /* @ngInject */
  function run($rootScope, $location, Auth, gettextCatalog) {
    // gettext
    $rootScope.setLang = function(lang) {
      if(lang) {
        gettextCatalog.currentLanguage = lang;
      } else {
        gettextCatalog.currentLanguage = 'ko_KR';
      }
    }

    $rootScope.setLang();
  }

})();
