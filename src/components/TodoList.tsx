import React from "react";
import { ITodo } from "../todoModel";
import SingleTodo from "./SingleTodo";

interface Props  {
    todos: ITodo[];
    editTodo: (id: number, newTodo: string) => void;
    deleteTodo: (id: number) => void
};

const TodoList:React.FC<Props> = ({ todos, editTodo, deleteTodo }) => {
    return <div>
        <ul className="todo-list">
              {todos.map((item) => (
                <SingleTodo 
                  todoItem={item}
                  editTodo={editTodo}
                  deleteTodo={deleteTodo}
                />
              ))}
            </ul>
    </div>
};

export default TodoList;