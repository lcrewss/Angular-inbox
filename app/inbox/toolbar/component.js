(function() {
  'use strict';
  angular.module('angular-inbox', )
  .component('ngtoolbar', {
    controller:'toolbarController',
    templateUrl:'app/inbox/toolbar/temp.html',
    bindings: {
      messagesbinding: '<'
    }
  })
}());
