import React, { ChangeEvent, useState } from 'react';
import './App.css';

interface ITask {
  taskName: string
}

const App:React.FC = () => {
  const [todo, setTodo] = useState<ITask[]>([]);
  const [task, setTask] = useState<string>("");


  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    }
  };

  const handleSubmit = () => {
    const newTask = {
      taskName: task
    }
    setTodo([...todo, newTask]);
    setTask("");
  };

  return (
    <div className="App">
        <div>
            <input name="task" onChange={handleChange} value={task} />
            <button onClick={handleSubmit}>Add</button>
        </div>
        <div>
            <ul>
              {todo.map((item) => (
                <li>{item.taskName}</li>
              ))}
            </ul>
        </div>
    </div>
  );
}

export default App;
