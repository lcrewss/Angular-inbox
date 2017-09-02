(function() {
  'use strict';
angular
.module('angular-inbox', )
.controller('toolbarController', toolbarController)
function toolbarController(){

  var vm = this
console.log(messagesbinding);
  vm.$onInit=function(){
      vm.allSelected=function (messages){
        return status=messages.every(function(data){
          return data.selected==true
        })
      }


  }

}
}());
