"use strict";

angular.module("ToDo").component("taskComponent", {
  bindings: {
    tasks: "<",
    completeTask: "&",
    removeTask: "&"
  },

  controller: [function(){
    const $ctrl = this;
  }],

  template: `<ol>
  <li ng-if="!todo.deleted" ng-repeat="todo in $ctrl.tasks | filter: filter">
      <div class="list-item">

      <button class="complete-btn" ng-if="!todo.completed" ng-click="todo.completed=$ctrl.completeTask()">Complete</button>

      <div class="task-item" ng-class="{completed: todo.completed}">{{todo.task}}</div>

      <button class="delete-btn" ng-click="todo.deleted = $ctrl.removeTask()"><img src="assets/close-button.svg"/></button>
      </div>
  </li>
  </ol>`
});