import React from "react";

type Props = {
    todo: string
}

const SingleTodo:React.FC<Props> = ({ todo }) => {
    return <div className="card">
        <div className="container">
            <p>{todo}</p>
        </div>
    </div>
}

export default SingleTodo;