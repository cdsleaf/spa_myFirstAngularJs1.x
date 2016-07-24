'use strict';

angular.module('spaPjtApp.sgAlert')
  .service('sgAlert', sgAlertService);

  function sgAlertService(gettextCatalog) {
    this.success = function(msg) {
      console.log(getMessage(msg));
    };

    this.information = function(msg) {
      console.log(getMessage(msg));
    };

    this.warning = function(msg) {
      console.log(getMessage(msg));
    };

    this.error = function(msg, err) {
      console.log(getMessage(msg));
    };

    //설정된 언어의 메시지를 반환
    function getMessage(msg){
      return gettextCatalog.getString(msg);
    }
  }
