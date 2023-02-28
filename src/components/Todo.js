import React from "react";
import AllTodoCards from "./AllTodoCards"
import { TodoData } from "./TodoData"
import { format } from 'date-fns'

const Todo = () => {
    return (
        <div className="todo-container">
            {TodoData.map((todo, index) => {
                return (
                    <AllTodoCards
                    key={index}
                    title={todo.title}
                    description={todo.description}
                    dueAt={todo.dueAt}
                    />
                )
            })}
        </div>
    )
}

export default Todo