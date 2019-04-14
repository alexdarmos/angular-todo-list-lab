"use strict";

angular.module("ToDo").component("filterComponent", {
    bindings: {
      
    },
  
    controller: [function(){
      const $ctrl = this;


    }],
  
    template: `<input type="text" ng-model="filter" placeholder="Filter your to-dos"/>`
  });