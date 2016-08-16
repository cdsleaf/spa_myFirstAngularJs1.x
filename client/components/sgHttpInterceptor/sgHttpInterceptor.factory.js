(function(){

  'use strict';

  angular.module('spaPjtApp')
    .factory('sgHttpInterceptor', sgHttpInterceptor);

  /* @ngInject */
  function sgHttpInterceptor($q) {
    return{
      'request':request,
      'requestError':requestError,
      'response':response,
      'responseError':responseError

    };

    function request(config){
      return config;
    }

    function requestError(rejection) {

      var msg = httpType(rejection.status);
      sgAlert.error(msg.value, msg.code);
      //에러처리
      return $q.reject(rejection);
    }

    function response(response) {
      return response;
    }

    function responseError(rejection) {
      return $q.reject(rejection);
    }

    function httpType(status){
      var msg = null;
      if(status === 400){
        msg = {
          code : 'BAD_REQUEST',
          value:' YOU send a bad request. send the right thing'
        };
      }else if(status === 401){

      }

      return msg;
    }
  }
});






