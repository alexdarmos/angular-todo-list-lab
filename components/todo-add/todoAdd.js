"use strict";

angular.module("ToDo").component("addComponent", {
    bindings: {
        addTask: "&",
        // tasks: "<"
    },
  
    controller: [function(){
      const $ctrl = this;

      $ctrl.addATask = function() {
        $ctrl.addTask({newTask: $ctrl.item})
      }
    }],
  
    template: `<input type="text" ng-model="$ctrl.item" placeholder="Add your to do"/>
    <button class="add-btn" ng-click="$ctrl.addATask()">Add Task</button>`
  });