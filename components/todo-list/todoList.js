"use strict";

angular.module("ToDo").component("listComponent", {
    bindings: {},
    controller: [function () {
        const $ctrl = this;
        $ctrl.search = "";

        $ctrl.todoList = [
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

        $ctrl.completeTask = function () {
            console.log(`Complete button clicked`);
            let complete;
            return complete = true;
        }

        $ctrl.removeTask = function () {
            console.log(`Delete button clicked`);
            let remove;
            return remove = true;
        }

        //add object to array with user input
        $ctrl.addTask = (newTask) => {
            console.log(newTask);
            $ctrl.todoList.push({ task: newTask, completed: false, deleted: false });
        }

    }],

    template: `
<div class="container">
<h1>TODO List</h1>
<p>A place to store the things you have to do!</p>

<filter-component search="search"></filter-component>
<task-component search="search" tasks="$ctrl.todoList" complete-task="$ctrl.completeTask()" remove-task="$ctrl.removeTask()"></task-component>
<add-component add-task="$ctrl.addTask(newTask)"></add-component>

</div>`
});


