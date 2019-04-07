"use strict";
function ToDoController() {  
    const vm = this;
    vm.todoList = [
      {
        task: `Clean Room`,
        completed: true,
        deleted: false
      },

      {
        task: `Walk dog`,
        completed: false,
        deleted: false
      },

      {
        task: `Do homework`,
        completed: false,
        deleted: false
      }

    ];

    //add object to array with user input
    vm.addTask = (newTask) => {
      vm.todoList.push({task: newTask, completed: false, deleted: false});
    }

    //delete task from list
    vm.removeTask = (deleted) => {
      console.log(`Delete button clicked`);
      return deleted = true;
      
    }

    //changes completed property to true
    vm.completeTask = (complete) => {
    console.log(`Complete button clicked`);
     return complete = true;
  
    }

}


angular
  .module("ToDo")
  .controller("ToDoController", ToDoController)
