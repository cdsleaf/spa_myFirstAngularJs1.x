(function(){

  'use strict';

  angular.module('spaPjtApp')
    .factory('sgHttpInterceptor', sgHttpInterceptor);

  /* @ngInject */
  function sgHttpInterceptor() {
    return{
      'request':request,
      'requestError':requestError,
      'response':response,
      'responseError':responseError

    };

    function request(config){
      return config;
    }

    function requestError() {

      //에러처리
      return $q.reject(rejection);

    }
  }
})






