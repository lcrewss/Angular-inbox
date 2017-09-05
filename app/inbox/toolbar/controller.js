(function() {
  'use strict';
angular
.module('angular-inbox', )
.controller('toolbarController', toolbarController)
function toolbarController($http){


  var vm = this

  vm.$onInit=function(){
      vm.allSelected=function (messages){
        if (messages !==undefined) {
          return status=messages.every(function(data){
            return data.selected==true
          })
        }

      }

      vm.someSelected = function(messages){
        if (messages !==undefined) {
          const someMsgs = messages.some(function(data){
            return data.selected == true
          })
          const allMsgs=messages.every(function(data){
            return data.selected==true
          })
          return  someMsgs && !allMsgs
        }

      }
      vm.allNotSelected=function (messages){
        if (messages !==undefined) {
          return status=messages.every(function(data){
            return data.selected!==true
          })
        }

      }
  }

      vm.markRead = function(messages){
        var messageId = []
        for (var i = 0; i < messages.length; i++) {
          if (messages[i].selected) {
            messages[i].read=true
            messageId.push(messages[i].id)
          }
        }
        var body = {
          messageIds: [ messageId ],
          command: "read",
          read: true
        }
        const baseURL = "https://angular-inbox.herokuapp.com/api/"
        $http.patch(baseURL + 'messages', JSON.stringify(body)).then(function(response){
      })
    }


      vm.markUnRead = function(messages){
        var messageId = []
        for (var i = 0; i < messages.length; i++) {
          if (messages[i].selected) {
            messages[i].read=false
            messageId.push(messages[i].id)
          }
        }
        var body = {
          messageIds: [ messageId ],
          command: "read",
          read: false
        }
        const baseURL = "https://angular-inbox.herokuapp.com/api/"
        $http.patch(baseURL + 'messages', JSON.stringify(body)).then(function(response){
      })
      }

      vm.deleteMessage = function(messages){
        var messagesId = []
        for (var i = 0; i < messages.length; i++) {
          if (messages[i].selected) {
            messages.splice(i,1)
            i--
            messagesId.push(messages[i].id)
          }
        }
        var body =  {
          messageIds: [ messagesId ],
          command: "delete"
        }
        const baseURL = "https://angular-inbox.herokuapp.com/api/"
        $http.patch(baseURL + 'messages', JSON.stringify(body)).then(function(response){
        })
        }

      vm.countUnreadMessage = function(messages){
        if (messages !==undefined) {
          var count = 0;
          for (var i = 0; i < messages.length; i++) {
            if (messages[i].read == false){
              count++
            }
          }return count
        }
        }

      vm.addLabel=function(messages,label){
        var messageId = []
      for (var i = 0; i < messages.length; i++) {
        var labelExist=messages[i].labels.includes(label)
        if (messages[i].selected && !labelExist ) {
          messages[i].labels.push(label)
          messageId.push(messages[i].id)
          }
        }
        var body = {
          messageIds: [ messageId ],
          command: "addLabel",
            label: label
        }
        const baseURL = "https://angular-inbox.herokuapp.com/api/"
        $http.patch(baseURL + 'messages', JSON.stringify(body)).then(function(response){
        })
      }

      vm.removeLabel=function(messages,label){
        var messageId = []
        for (var i = 0; i < messages.length; i++) {
        if (messages[i].selected) {
          var index=messages[i].labels.indexOf(label)
          console.log(index);
          if (index > -1) {
          messages[i].labels.splice(index, 1);
          messageId.push(messages[i].id)
        }
      }
    }
    var body = {
      messageIds: [ messageId ],
      command: "removeLabel",
        label: label
    }
    const baseURL = "https://angular-inbox.herokuapp.com/api/"
    $http.patch(baseURL + 'messages', JSON.stringify(body)).then(function(response){
    })

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
