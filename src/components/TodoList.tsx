import React from "react";
import { ITodo } from "../todoModel";
import SingleTodo from "./SingleTodo";

interface Props  {
    todos: ITodo[];
};

const TodoList:React.FC<Props> = ({ todos }) => {
    return <div>
        <ul className="todo-list">
              {todos.map((item) => (
                <SingleTodo todo={item.todo} />
              ))}
            </ul>
    </div>
};

export default TodoList;