(function() {
  'use strict';
  angular.module('angular-inbox', )
  .component('ngmessage', {
    controller:'messageController',
    templateUrl:'app/inbox/messageList/message/temp.html',
    bindings: {
    messagebinding: '<'
    }

})
}());
