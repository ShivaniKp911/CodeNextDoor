import { useState } from "react";

import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleAddTask = () => {
    const addedItem = { id: taskList.length + 1, task: task };

    setTaskList([...taskList, addedItem]);
  };

  return (
    <>
      <h1>Todo List App</h1>
      <input
        name="task"
        value={task}
        style={{ width: "200px", height: "100px", border: "1px  solid #ccc" }}
        onChange={handleChange}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <h2>Task list</h2>
      <ol>
        {taskList.map((item) => {
          return <li key={item.id}>{item.task}</li>;
        })}
      </ol>
    </>
  );
}

export default App;
