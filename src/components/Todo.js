import React from "react";
import AllTodoCards from "./AllTodoCards"
import TodoData from "./TodoData"

const Todo = () => {
    return (
        <div className="todo-container">
            {TodoData.map((todo, index) => {
                return (
                    <AllTodoCards
                    key={index}
                    title={todo.title}
                    description={todo.description}
                    duedate={todo.duedate}
                    />
                )
            })}
        </div>
    )
}