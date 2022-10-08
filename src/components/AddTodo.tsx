import React, { ChangeEvent } from "react";

interface Props {
    todo: string,
    handleChange: (e:ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (e:React.FormEvent) => void
}

const AddTodo:React.FC<Props> = ({ handleChange, todo, handleSubmit }) => {
    return <form onSubmit={handleSubmit}>
        <input name="task" onChange={handleChange} value={todo} />
        <button>Add</button>
    </form>
}

export default AddTodo;