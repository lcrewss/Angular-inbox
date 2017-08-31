(function() {
  'use strict';

angular
.module('angular-inbox', )
.controller('messageController', function(){
  const vm = this;

  vm.$onInit = function(){
    var data = angular.fromJson(jsonData)
    vm.message = data

  }
  vm.selectCheckbox = function(msg){
  }

  vm.toggleStar = function(msg) {
    msg.star = !msg.star
    console.log(msg);

  }




})
}());
