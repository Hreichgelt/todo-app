import React from "react";
// Past due = red || Due soon = yellow || due later = green (card change color based on date?)


const AllTodos = () => {
    <div className="all-todos">
        <div className="todo-container">
            <div className="todo-card" style={{backgroundColor: red}}>
                <button className="complete"></button>
                <button className="delete"></button>
                <div className="details" style={{color: 'black'}}>{props.text}
                    <h3 className="title">{props.title}</h3>
                    <h4 className="description">{props.description}</h4>
                    <h4 className="duedate">{props.duedate}</h4>
                </div>
            </div>
        </div>
    </div>
}