import React, { ChangeEvent, FormEvent, useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { ITodo } from './todoModel';

const App:React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todo, setTodo] = useState<string>("");


  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task" && event.target.value) {
      setTodo(event.target.value);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (todo) {
      const newTask = {
        id: Date.now(),
        todo,
        isCompleted: false
      }
      setTodos([...todos, newTask]);
      setTodo("");
    }
  };

  return (
    <div className='main-container'>
        <div>
            <AddTodo handleChange={handleChange} handleSubmit={handleSubmit} todo={todo} />
        </div>
        <div>
            <TodoList todos={todos}/>
        </div>
    </div>
  );
}

export default App;
