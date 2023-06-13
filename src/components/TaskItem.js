import React from "react";
import "./TaskItem.css";
function TaskItem({ task, tasks, updatedTasks }) {
  function handleDelete(id) {
    const tasksAfterDel = tasks.filter((task) => task.id !== id);
    updatedTasks(tasksAfterDel);
  }
  function handleComplete(id) {
    const listAfterComp = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    updatedTasks(listAfterComp);
  }

  const taskClassName = `task-container task-pri${task.priority} ${
    task.completed ? "completed" : ""
  }`;
  return (
    <li className={taskClassName}>
      <div className="taskdetails">
        <p id="task-title">{task.title}</p>
        <div id="task-due">{task.dueDate}</div>
        <div id="task-priority">{task.priority}</div>
      </div>
      <div className="taskdetails2">
        <div className="task-desc">{task.description}</div>
        <div className="action-buttons">
          <button className="delbtn" onClick={() => handleDelete(task.id)}>
            Delete
          </button>
          <button
            className={`donbtn ${task.completed ? "disabled" : ""}`}
            onClick={() => handleComplete(task.id)}
          >
            Done ✅
          </button>
        </div>
      </div>
    </li>
  );
}

export default TaskItem;
