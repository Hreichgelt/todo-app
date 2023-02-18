import React from "react";
// Past due = red || Due soon = yellow || due later = green (card change color based on date?)


const AllTodos = (props) => {
    return (
    <div className="all-todos">
        <div className="todo-container">
            <div className="todo-card" style={{backgroundColor: 'red'}}>
                <button className="complete">Complete</button>
                <button className="delete">Delete</button>
                <div className="details" style={{color: 'black'}}>{props.text}
                    <h3 className="title">{props.title}</h3>
                    <h4 className="description">{props.description}</h4>
                    <h4 className="dueAt">{props.dueAt}</h4>
                </div>
            </div>
        </div>
    </div>
    )
}
export default AllTodos