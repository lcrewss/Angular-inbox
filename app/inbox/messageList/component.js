(function() {
  'use strict';
  angular.module('angular-inbox', )
  .component('ngmessagelist', {
    controller:'messageListController',
    templateUrl:'app/inbox/messageList/temp.html',
    bindings: {
      messagesbinding: '<'
    }
})
}());
