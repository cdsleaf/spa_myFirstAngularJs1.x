'use strict';

angular.module('spaPjtApp.auth', ['spaPjtApp.constants', 'spaPjtApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
