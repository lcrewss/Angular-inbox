(function() {
  'use strict';
angular
.module('angular-inbox', )
.controller('formController', function(){

  var vm = this

  vm.testing=function(data){
    console.log('datatesting');
  };
})
}());
