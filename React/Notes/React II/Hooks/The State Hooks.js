/*
Why Use Hooks?
**************
What should we do if we want to add a state to our function component? How about if we wanted our app to respond to the changes in data?

In this lesson, we’ll learn about React Hooks and how they can help us powerfully wield function components.

React Hooks, plainly put, are functions that let us manage the internal state of components and handle post-rendering side effects directly from our function components. Using Hooks, we can determine what we want to show the users by declaring how our user interface should look based on the state.

React offers a number of built-in Hooks. A few of these include useState(), useEffect(), useContext(), useReducer(), and useRef(). See the full list in the React docs.

In this lesson, we’ll learn how to:

    1. Build a “stateful” function component.
    2. Use the State Hook.
    3. Initialize a state and set a state.
    4. Define event handlers.
    5. Use state setter callback functions.
    6. Use state with arrays and objects.

Instructions
1. Open the AppFunction.js file. We will learn how this code works in the next few exercises. Don’t worry about the details of what is going on here just yet, but take a few moments to read through the definition of this function component and develop some theories about what this code may be doing.

Press “Run” to see how the code behaves!
*/
/* Index.js */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Container/AppFunction";

ReactDOM.createRoot(
  document.querySelector("#app")
).render(<App />);

/* AppFunctions.js */

import React, { useState } from "react";
import NewTask from "../Presentational/NewTask";
import TasksList from "../Presentational/TasksList";

export default function AppFunction() {
  const [newTask, setNewTask] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const [allTasks, setAllTasks] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };
  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter((task) => task.id !== taskIdToRemove));
  };

  return (
    <main>
      <h1>Tasks</h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList allTasks={allTasks} handleDelete={handleDelete} />
    </main>
  );
}

/* TaskList.js */

import React from "react";

export default function TasksList({ allTasks, handleDelete }) {
  return (
    <ul>
      {allTasks.map(({ title, description, id }) => (
        <li key={id}>
          <div>
            <h2>{title}</h2>
            <button onClick={() => handleDelete(id)}>X</button>
          </div>
          {!description ? null : <p>{description}</p>}
        </li>
      ))}
    </ul>
  );
}

/* NewTask.js */

import React from "react";

export default function NewTask({ newTask, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="New task"
        value={newTask.title || ""}
        onChange={handleChange}
      />
      {!newTask.title ? null : (
        <>
          <textarea
            name="description"
            placeholder="Details..."
            value={newTask.description || ""}
            onChange={handleChange}
          />
          <button type="submit">Add Task</button>
        </>
      )}
    </form>
  );
}