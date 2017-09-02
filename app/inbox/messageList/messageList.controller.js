(function() {
  'use strict';
  angular
    .module('angular-inbox', )
    .controller('messageListController', function(){

  const vm = this
    vm.$onInit = function(){
      var data = angular.fromJson(jsonData)
      vm.message = data
      // console.log(vm);
      // console.log("hello from messagelist");
  }
})
}());
