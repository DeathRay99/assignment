import React from "react";
import TaskItem from "./TaskItem";
function TaskList({ tasks, updatedTasks }) {
 tasks.sort((taskA, taskB) => {
    if (taskA.dueDate < taskB.dueDate) {
      return -1;
    }
    if (taskA.dueDate > taskB.dueDate) {
      return 1;
    }
    if (+taskA.priority > +taskB.priority) {
      return -1;
    }
    if (+taskA.priority < +taskB.priority) {
      return 1;
    }
    return 0;
  });
  return (
    <div>
      {tasks.map((task) => {
        return <TaskItem task={task} key={Math.random()} tasks={tasks} updatedTasks={updatedTasks}/>;
      })}
    </div>
  );
}

export default TaskList;
