(function() {
  'use strict';

  angular
    .module('angular-inbox', )
    .controller('messageController', function(){

  const vm = this;

  vm.selectCheckbox = function(msg){

  }

  vm.toggleStar = function(msg) {
    msg.starred = !msg.starred

  }




})
}());
