(function() {
'use strict';

angular.module('spaPjtApp', ['spaPjtApp.auth', 'spaPjtApp.admin', 'spaPjtApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router', 'ui.bootstrap',
    'validation.match', 'gettext', 'sg.translation','sg.message'
  ])
  .constant('config', {
    api_version: 'api/v1'
  })
  .config(config)
  .factory('authInterceptor', authInterceptor);
  .run(run);

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, RestangularProvider, config) {
    RestangularProvider.setBaseUrl(config.api_version);

    $urlRouterProvider.otherwise('/');

    $httpProvider.interceptors.push('authInterceptor');
    $httpProvider.interceptors.push('sgHttpInterceptor');
  }

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

    //TODO: Redirect to login if route requires auth and you're not logged in
  }

  /* @ngInject */
  function authInterceptor($rootScope, $q, $cookieStore, $location){
    return {
      //http 헤더에 authorization token을 추가한다.
      request: function (config) {
        config.headers = config.headers || {};
        if($cookieStore.get('token')){
          config.headers.Authorization = 'Bearer '+$cookieStore.get('token');
        }
        return config;
      },

      //응답 에러가 401 이면 권한이 없으므로 로그인 페이지로 리다이렉트 한다.
      responseError: function (response) {
        if (response.status === 401) {
          $location.path('/login');
          //tokens를 제거한다.
          $cookieStore.remove('token');
          return $q.reject(response);
        } else {
          return $q.reject(response)
        }
      }
    };
  }


})();
