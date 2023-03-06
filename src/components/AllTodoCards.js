import React, { useEffect, useState } from "react";
import "./styles/AllTodoCards.css";
import { BsTrash } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";


// Past due = red || Due soon = yellow || due later = green (card change color based on date?)

const formatDate = (date) => {
  const today = new Date(date);

  return today.toLocaleDateString("en-US"); // 9/17/2016
};

const AllTodos = (props) => {
  // const [completedTodos, setCompletedTodos] = useState(0);
  const [todo, setTodo] = useState([]);

  //  complete todo
  // need these to show differently or drop to a new page - currently show at bottom
  function completeTodo(id) {
    const todoCopy = [...todo];
    todoCopy.push(todoCopy.splice(id, 1)[0]);
    setTodo(todoCopy);
  }

  // delete specific todo from list
  // need functionality to timestamp this for tracking purposes
  function deleteTodo(id) {
    const todoCopy = [...todo];
    todoCopy.filter(id, 1);
    setTodo(todoCopy);
  }

  useEffect(() => {
    const url = "http://localhost:8080/todo";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setTodo(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="all-todos-container">
      {todo.map((todo, id) => {
        return (
          <div className="todo-container" style={{ backgroundColor: "gray" }}>
            <div
              className="todo-card"
              key={todo.id}
              style={{ backgroundColor: todo.isCompleted ? "blue" : "red" }}
            >
              <div className="btns">
                <button
                  className="complete"
                  id={id}
                  onClick={() => completeTodo(id)}
                >
                  <FaCheck />
                </button>
                <button
                  className="delete"
                  id={id}
                  onClick={() => deleteTodo(id)}
                >
                  <BsTrash />
                </button>
              </div>
              <div className="details" style={{ color: "black" }}>
                {todo.text}
                <h3 className="title">{todo.title}</h3>
                <h4 className="description">{todo.description}</h4>
                <h4 className="dueAt">{formatDate(todo.dueAt)}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllTodos;
