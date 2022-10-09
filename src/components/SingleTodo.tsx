import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDoneAll } from "react-icons/md";
import { ITodo } from "../todoModel";

type Props = {
    todoItem: ITodo;
    editTodo: (id: number, newTodo: string) => void;
    deleteTodo: (id: number) => void;
}

const SingleTodo:React.FC<Props> = ({ todoItem, editTodo, deleteTodo }) => {
    const [isEditBtnClicked, setIsEditBtnClicked] = useState<boolean>(false);
    const [currentTodoItem, setCurrentTodoItem] = useState<ITodo>({ id: 0, todo: '', isCompleted: false});

    const handleEdit = () => {
        setIsEditBtnClicked(true);
    }

    useEffect(() => {
        setCurrentTodoItem(todoItem);
    }, [todoItem]);

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === "todo") {
            setCurrentTodoItem({
                ...currentTodoItem,
                todo: event.target.value
            })
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        editTodo(currentTodoItem.id, currentTodoItem.todo);
        setIsEditBtnClicked(false);
    }

    return <div className="card">
        <div className="container">
            {isEditBtnClicked ? 
            <form onSubmit={handleSubmit}>
                <input name="todo" value={currentTodoItem.todo} onChange={handleChange} />
            </form>
            : 
            <p>
                {todoItem.todo}
            </p>
            }
        </div>
        <div className="icons-wrapper">
            <span onClick={handleEdit}><AiFillEdit/></span>
            <span onClick={() => deleteTodo(currentTodoItem.id)}><AiFillDelete/></span>
            <span><MdDoneAll/></span>
        </div>
    </div>
}

export default SingleTodo;