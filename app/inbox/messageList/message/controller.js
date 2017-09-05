(function() {
 'use strict';

angular
   .module('angular-inbox', )
   .controller('messageController', function($http){

const vm = this;

vm.selectCheckbox = function(selected,msg){
     msg.selected=selected
 }

vm.toggleStar = function(msg) {
  var body = {
  messageIds: [ msg.id ],
  command: "star",
  star: !msg.starred
}

const baseURL = "https://angular-inbox.herokuapp.com/api/"
// const baseURL = "http://localhost:8082/api"
$http.patch(baseURL + '/messages', JSON.stringify(body)).then(function(response){
  msg.starred = !msg.starred
})



}
})
}());
