(function() {
  'use strict';
angular
  .module('angular-inbox', )
  .controller('inboxController', inboxController)

  function inboxController($http){

    const vm = this
      vm.$onInit = function(){
        const baseURL = "https://angular-inbox.herokuapp.com/api/"
        // const baseURL = "http://localhost:8082/api"
        $http.get(baseURL + '/messages')
        .then(function(messages){
          vm.messages = messages.data._embedded.messages
          console.log(messages.data._embedded.messages);
        })



        // var data = angular.fromJson(jsonData)
        // vm.messages = data
  }
}
}());
