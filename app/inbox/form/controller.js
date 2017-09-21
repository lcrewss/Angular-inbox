(function() {
  'use strict';
angular
.module('angular-inbox', )
.controller('formController', function(){

  var vm = this
  vm.addForm = function(messages,submessage,bodymessage){

    var body =
    {
      subject: submessage,
      body: bodymessage
    }
  }

})
}());
