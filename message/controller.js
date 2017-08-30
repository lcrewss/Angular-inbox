(function() {
  'use strict';

angular
.module('angular-inbox', )
.controller('messageController', function(){
  const vm = this;

  vm.$onInit = function(){
    var data = angular.fromJson(jsonData)
    vm.message = data
    console.log(data);
  }
  vm.selectCheckbox = function(msg){
    console.log(msg);
  }

  vm.selectStar = function(msg) {
    console.log(msg);
    msg.start = true;

  }




})
}());
