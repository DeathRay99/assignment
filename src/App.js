// the cmmntd out code in this component is of searchbar that I tried to Implement.. it is working but is not fully correct
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import "./App.css";
function App() {
  const [tasks, setTasks] = useState([]);
  // const [searchInput, setSearchInput] = useState("");
  // const [searchedTasks, setSearchedTasks] = useState([]);
  // function handleSearchChange(e) {
  //   e.preventDefault();
  //   const input = e.target.value;
  //   setSearchInput(input);
  //   setSearchedTasks(
  //     tasks.filter((task) => {
  //       return task.title.includes(input);
  //     })
  //   );
  // }
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  function addTask(task) {
    setTasks((prev) => [...prev, task]);
  }
  function updatedTasks(updated) {
    setTasks(updated);
    // setSearchedTasks(updated);
  }
  return (
    <div className="App">
      <AddTask addTask={addTask} />
      {/* <input type="text" onChange={handleSearchChange} value={searchInput} /> */}
      <ul className="tasks-container">
        {/* {searchInput.length === 0 ? (
          <TaskList tasks={tasks} updatedTasks={updatedTasks} />
        ) : (
          <TaskList tasks={searchedTasks} updatedTasks={updatedTasks} />
        )} */}
        <TaskList tasks={tasks} updatedTasks={updatedTasks} />
      </ul>
    </div>
  );
}

export default App;
