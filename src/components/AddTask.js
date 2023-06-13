import React from "react";
import { useState } from "react";
import "./AddTask.css";
import TextField from "@mui/material/TextField";
function AddTask({ addTask }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: 1,
    id: 0,
    completed: false,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
      id: Math.random(),
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.length === 0) return alert("Please enter title");
    addTask(task);
    setTask({
      title: "",
      description: "",
      dueDate: "",
      priority: 1,
      id: 0,
      completed: false,
    });
  };
  return (
    <div onSubmit={handleSubmit}>
      <form className="task_info">
        <div className="task_info_headers">
          <div>
            <TextField
              aria-label="minimum height"
              minRows={3}
              label="Title"
              color="secondary"
              type="text"
              id="title"
              sx={{
                backgroundColor: "white",
              }}
              name="title"
              value={task.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <TextField
              label="Date"
              color="warning"
              focused
              type="date"
              id="dueDate"
              name="dueDate"
              sx={{
                backgroundColor: "white",
              }}
              value={task.dueDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <TextField
              type="number"
              id="priority"
              name="priority"
              label="Priority"
              value={task.priority}
              sx={{
                backgroundColor: "white",
                width:"150px"
              }}
              inputProps={{
                min: 1,
                max: 3,
                step: 1,
              }}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="task_info_footer">
          <div className="task_info_desc">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={task.description}
              onChange={handleInputChange}
              style={{
                height: "90px",
                width: "250px",
                border: "2px solid lightblue",
                borderRadius: "5px",
                padding: "15px",
                fontSize: "15px",
                outline:0,
                marginLeft:"4px"
              }}
            />
          </div>
          <button type="submit">Add Task</button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
