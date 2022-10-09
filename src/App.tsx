import React, { ChangeEvent, FormEvent, useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { ITodo } from './todoModel';

const App:React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todo, setTodo] = useState<string>("");


  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
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

  const editTodo = (id:number, newTodo:string) => {
    const selectedTodo = todos.find(t => t.id === id);
    if (selectedTodo) {
      selectedTodo.todo = newTodo;
    }
    setTodos([...todos]);
  }

  const deleteTodo = (id:number) => {
    const filteredTodos = todos.filter(t => t.id !== id);
    setTodos([...filteredTodos]);
  }

  return (
    <div className='main-container'>
        <div>
            <AddTodo handleChange={handleChange} handleSubmit={handleSubmit} todo={todo} />
        </div>
        <div>
            <TodoList 
              todos={todos}
              editTodo={editTodo}
              deleteTodo={deleteTodo}  
            />
        </div>
    </div>
  );
}

export default App;
