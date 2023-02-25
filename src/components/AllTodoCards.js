import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs"
import { FaCheck } from "react-icons/fa"
// Past due = red || Due soon = yellow || due later = green (card change color based on date?)


const AllTodos = (props) => {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        const url = "http://localhost:8080/todo";

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            setTodo(json)
        } catch (error){
            console.log("error", error);
        }
    };

    fetchData();
    }, []);

    return (
        <div className="all-todos-container">
            {todo.map((todo) => {
                return (
        <div className="todo-container">
            <div className="todo-card" key={todo.id} style={{backgroundColor: 'red'}}>
                <button className="complete"><FaCheck /></button>
                <button className="delete"><BsTrash /></button>

                <div className="details" style={{color: 'black'}}>{todo.text}
                    <h3 className="title">{todo.title}</h3>
                    <h4 className="description">{todo.description}</h4>
                    <h4 className="dueAt">{todo.dueAt}</h4>
                </div>
            </div>
         </div>
                )
            })}
     </div>
    )
}

export default AllTodos