"use strict";

angular.module("ToDo").component("filterComponent", {
    bindings: {
      search: "="
      
    },
  
    controller: [function(){
      const $ctrl = this;


    }],
  
    template: `<input type="text" placeholder="Filter your to-dos" ng-model="$ctrl.search"/>`
  });