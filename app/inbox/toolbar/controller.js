(function() {
  'use strict';
angular
.module('angular-inbox', )
.controller('toolbarController', toolbarController)
function toolbarController(){

  var vm = this

  vm.$onInit=function(){
      vm.allSelected=function (messages){
        return status=messages.every(function(data){
          return data.selected==true
        })
      }

      vm.someSelected = function(messages){
        const someMsgs = messages.some(function(data){
          return data.selected == true
        })
        const allMsgs=messages.every(function(data){
          return data.selected==true
        })
        return  someMsgs && !allMsgs
      }
      vm.allNotSelected=function (messages){
        return status=messages.every(function(data){
          return data.selected!==true
        })
      }
  }

      vm.markRead = function(messages){
        for (var i = 0; i < messages.length; i++) {
          if (messages[i].selected) {
            messages[i].read=true
          } else {
            messages[i].read=false
          }
        }
      }
      vm.markUnRead = function(messages){
        for (var i = 0; i < messages.length; i++) {
          if (messages[i].selected) {
            messages[i].unread=true
          } else {
            messages[i].unread=false
          }
        }
      }

      vm.deleteMessage = function(messages){
        for (var i = 0; i < messages.length; i++) {
          if (messages[i].selected) {
            messages.splice(i,1)
            i--
          }
        }
      }

      vm.countUnreadMessage = function(messages){
        var count = 0;
        for (var i = 0; i < messages.length; i++) {
          if(messages.unread = true){
            count++
          } return count
        }
      }

      vm.addLabel=function(messages,label){
      for (var i = 0; i < messages.length; i++) {
        var labelExist=messages[i].labels.includes(label)
        if (messages[i].selected && !labelExist ) {
          messages[i].labels.push(label)
          console.log(labelExist);
          }
        }
      }

      vm.removeLabel=function(messages,label){
        for (var i = 0; i < messages.length; i++) {
        if (messages[i].selected) {
          var index=messages[i].labels.indexOf(label)
          console.log(index);
          if (index > -1) {
          messages[i].labels.splice(index, 1);
        }
      }
    }
  }

      vm.checkAllBox=function(messages){
        if(vm.allSelected(messages)){
          for (var i = 0; i < messages.length; i++) {
            messages[i].selected=false
          }
        } else {
          (vm.someSelected(messages))
        }
      }





}
}());
