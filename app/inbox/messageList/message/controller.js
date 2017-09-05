(function() {
 'use strict';

angular
   .module('angular-inbox', )
   .controller('messageController', function(){

const vm = this;

vm.selectCheckbox = function(selected,msg){
     msg.selected=selected
 }

vm.toggleStar = function(msg) {
   msg.starred = !msg.starred

}
})
}());
